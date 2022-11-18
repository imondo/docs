const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const logger = require("tracer").colorConsole();

const docsRoot = path.join(__dirname, "..", "docs");
const sidebarPath = path.join(
  __dirname,
  "../docs",
  ".vitepress",
  "config",
  "sidebar.ts"
);
const template = `
<% for(let variable of variables) { %>
  const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
<% } %>

export default {
  <% for (let variable of variables) { %>
    "<%- variable.path %>": <%- variable.name %>,
  <% } %>
}
`;

main();

/**
 * 主体函数
 */
function main() {
  const variables = [];

  const tocs = readTocs(docsRoot);
  tocs.forEach(toc => {
    const js = mapTocToSidebar(toc, `/${path.basename(toc)}/`);
    if (!js.length) {
      return;
    }

    variables.push({
      path: `/${path.basename(toc)}/`,
      name: path.basename(toc).replace(/ /g, "_"),
      js
    });
  });

  fs.writeFileSync(sidebarPath, ejs.render(template, { variables }));
}

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
function readTocs(root) {
  const result = [];
  const files = fs.readdirSync(root);
  files.forEach(name => {
    const file = path.resolve(root, name);
    if (fs.statSync(file).isDirectory()) {
      result.push(file);
    }
  });
  return result;
}

/**
 * 将对应目录映射为对应的边栏配置
 * @param {String} root
 * @param {String} prefix
 */
function mapTocToSidebar(root, prefix) {
  prefix = prefix || "";
  let sidebar = [];

  const files = fs.readdirSync(root);
  files.forEach(filename => {
    const file = path.resolve(root, filename);
    const stat = fs.statSync(file);
    let [order, title] = filename.split("_");

    order = parseInt(order, 10);
    if (isNaN(order) || order < 0) {
      return;
    }

    if (sidebar[order]) {
      logger.warn(
        `For ${file}, its order has appeared in the same level directory. And it will be rewritten.`
      );
    }

    if (stat.isDirectory()) {
      sidebar[order] = {
        text: title,
        collapsible: true,
        collapsed: true,
        items: mapTocToSidebar(file, prefix + filename + "/")
      };
    } else {
      if (!title.includes('md')) {
        logger.error(`For ${file}, its type is not supported.`);
        return;
      }
      const [text] = title.split('.')
      sidebar[order] = {
        text: text,
        link: `${prefix}${filename}`
      }
    }
  });

  sidebar = sidebar.filter(item => item !== null && item !== undefined);
  return sidebar;
}
