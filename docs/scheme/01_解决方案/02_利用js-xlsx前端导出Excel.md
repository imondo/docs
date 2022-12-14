# 利用js-xlsx前端导出Excel

由于项目临时加入导出Excel功能，后台童靴没有多余时间来处理，想前端来处理导出。

查询了前端导出方法，大部分是利用`js-xlsx`来做处理，按照[js-xlsx](https://github.com/SheetJS/js-xlsx)来导出`excel`时是没有样式处理的。需要我们来利用该库的专业版本才能设置样式。

这里就需要[xlsx-style](https://github.com/protobi/js-xlsx/tree/beta)来处理，给我们的`excel`文件来添加样式。

## 利用数据导出

拿到后端数据，先要对数据进行组装才能导出我们想要的文件格式。如果想文件有样式只能利用`xlsx-style`;

```
npm install xlsx-style
```

拷贝下载下来的文件目录`dist`里的`xlsx.core.min.js`，引入文件

```html
<body>
  <button onclick="downLoad()">导出</button>
  <script src="./xlsx.core.min.js"></script>
  <script src="./index.js"></script> 
</body>
```

这里借鉴这位[博主](https://www.jianshu.com/p/5cfe0ead22cd)主要代码，整理了下，可以实现表头与导出文件名称。


具体调用可以[查看DEMO](https://imondo.cn/excelj/)

```js
/**
 * @param {Array} header 表格头部
 * @param {Array} body 表格数据
 * @param {String} title 表格导出名称
 * @param {Boolean} hasTitle 是否需要表格标题
 */
function ExportsEXCL() {
  this.downLoad = ({
    header = [],
    body = [],
    title = 'excel',
    hasTitle = false,
  }) => {
    const styleCell = this.setBorderStyle();

    const _headers = header
      .map((v, i) => {
        let key = Object.keys(v);
        return Object.assign(
          {},
          {
            v: `${v[key[0]]}<key>${key[0]}`,
            position: String.fromCharCode(65 + i) + (hasTitle ? 1 : 0)
          }
        );
      })
      .reduce(
        (prev, next) =>
          Object.assign({}, prev, {
            [next.position]: { v: next.v, s: styleCell }
          }),
        {}
      );
    const _body = body
      .map((v, i) =>
        header.map((k, j) => {
          let key = Object.keys(k);
          return Object.assign(
            {},
            {
              v: v[key[0]],
              position: String.fromCharCode(65 + j) + (i + (hasTitle ? 2 : 1))
            }
          );
        })
      )
      .reduce((prev, next) => prev.concat(next))
      .reduce(
        (prev, next) =>
          Object.assign({}, prev, {
            [next.position]: { v: next.v, s: styleCell }
          }),
        {}
      );

    const mergeThead = this.setMergeThead(_headers, hasTitle, title);

    const _merges = this.setTableMerges(header, _headers, hasTitle);

    const _thead = this.setTableThead(mergeThead);

    const output = Object.assign({}, _thead, _body);

    const outputPos = Object.keys(output).sort();

    const ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];

    const wb = {
      SheetNames: ['mySheet'],
      Sheets: {
        mySheet: Object.assign({}, output, { '!ref': ref, '!merges': _merges })
      }
    };

    this.save(wb, `${title}.xlsx`);
  };

  this.setTableThead = wb => {
    for (let key in wb) {
      let i = wb[key].v.indexOf('<key>');
      if (wb[key].v.includes('<key>')) {
        wb[key].v = wb[key].v.substr(0, i);
      }
    }
    return wb;
  };

  // 设置合并表头
  this.setTableMerges = (header, wb, hasTitle) => {
    let _merges = [];
    let len = header.length - 1;
    if (hasTitle) {
      let o = {
        s: {
          c: 0,
          r: 0
        },
        e: {
          c: len,
          r: 0
        }
      };
      _merges.push(o);
    }
    return [..._merges];
  };

  // 设置表头
  this.setMergeThead = (wb, merge, hasTitle, title) => {
    const borderAll = {
      top: {
        style: 'thin'
      },
      bottom: {
        style: 'thin'
      },
      left: {
        style: 'thin'
      },
      right: {
        style: 'thin'
      }
    };
    if (hasTitle) {
      wb['A1'] = {
        v: `${title}`,
        s: {
          border: borderAll,
          font: {
            sz: 18,
            bold: true
          },
          alignment: {
            horizontal: 'center'
          }
        }
      };
    }
    return wb;
  };

  this.setBorderStyle = () => {
    const borderAll = {
      top: {
        style: 'thin'
      },
      bottom: {
        style: 'thin'
      },
      left: {
        style: 'thin'
      },
      right: {
        style: 'thin'
      }
    };
    return { border: borderAll };
  };

  this.save = (wb, fileName) => {
    let wopts = {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    };
    let xw = XLSX.write(wb, wopts);
    let obj = new Blob([this.s2ab(xw)], {
      type: ''
    });
    let elem = document.createElement('a');
    elem.download = fileName || '下载';
    elem.href = URL.createObjectURL(obj);
    elem.click();
    setTimeout(function() {
      URL.revokeObjectURL(obj);
    }, 100);
  };

  this.s2ab = s => {
    if (typeof ArrayBuffer !== 'undefined') {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    } else {
      var buf = new Array(s.length);
      for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
  };

  // 根据val查询Object key
  this.findKey = (val, obj) => {
    return Object.keys(obj).find(v => obj[v] === val);
  };
}
```


## 利用DOM导出

`js-xlsx`提供了一个直接导出HTML上的DOM表格方法`XLSX.utils.table_to_book`，但是导出的`excel`文件时没有任何样式，利用`xlsx-style`中的`xlsx.full.min.js`来导出时，没有上面这个方法，后面取了巧。

把`xlsx-style`中的`full`文件导出来的`XLSX`改成了`STYLEXLSX`；


引用如下：

```
<script src="//unpkg.com/xlsx/dist/shim.min.js"></script>
<script src="//unpkg.com/blob.js@1.0.1/Blob.js"></script>
<script src="//unpkg.com/file-saver@1.3.3/FileSaver.js"></script>
<script src="./STYLEXLSX.full.min.js"></script>
<script src="./xlsx.full.min.js"></script>

<script src="./index.js"></script>
```

利用`js-xlsx`来导出表格数据，用`STYLEXLSX.write`来写入数据。

```
STYLEXLSX.write(
  wb,
  {
    bookType: type == undefined ? 'xlsx' : type,
    bookSST: false,
    type: 'binary'
  }
)
```


具体主要代码：

```
/**
 * 
 * @param {Object} dom table的dom元素
 * @param {Object} name 导出的表名
 * @param {Object} type 导出的类型
 * 
 */
function exportExl(dom, name = '导出数据', type) {
	var wb = XLSX.utils.table_to_book(dom, {sheet: "Sheet JS"});
	var wopts = {
    bookType: 'xlsx',
    bookSST: true,
    type: 'binary',
    cellStyles: true
	};

	setExlStyle(wb['Sheets']['Sheet JS']);
	
	let tmpDown = new Blob(
		[
			this.s2ab(
				STYLEXLSX.write(
					wb,
					{
						bookType: type == undefined ? 'xlsx' : type,
						bookSST: false,
						type: 'binary'
					} //这里的数据是用来定义导出的格式类型
				)
			)
		],
		{
			type: ''
		}
	);
	saveAs(
		tmpDown,
		`${name}` +
			'.' +
			(wopts.bookType == 'biff2' ? 'xls' : wopts.bookType)
	);	
}

function saveAs(obj, fileName) {
	let tmpa = document.createElement('a');
	tmpa.download = fileName || '下载';
	tmpa.href = URL.createObjectURL(obj);
	tmpa.click();
	setTimeout(function() {
		URL.revokeObjectURL(obj);
	}, 100);
}	


function s2ab (s){
	if (typeof ArrayBuffer !== 'undefined') {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
		return buf;
	} else {
		var buf = new Array(s.length);
		for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
		return buf;
	}
};

function setExlStyle (data) {  
	
  let borderAll = {  //单元格外侧框线
    top: {
      style: 'thin'
    },
    bottom: {
      style: 'thin'
    },
    left: {
      style: 'thin'
    },
    right: {
      style: 'thin'
    }
  }; 
	data['!cols'] = [];
	for (let key in data) {
		if (data[key] instanceof Object) {
			data[key].s = {
				border: borderAll,
				alignment: {
					horizontal: 'center'   //水平居中对其
				},
				numFmt: 0
			}
			data['!cols'].push({wpx: 170});
		}
	}
	return data;
}
```

## 缺陷

如果用数据来控制我们的导出，发现配置多级表头时会好复杂，所以没取深究了，用DOM来导出，又发现如果**要导出分页表格**时只能导出当前页的数据。

而且现在所有的表格都可能不是规范的表格，每个表格结构可能都不相同，只能单独处理。

相关源码：[地址](https://github.com/imondo/study/tree/master/excel)

> 积硅步，至千里。
> 
> 公众号[码不停指](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/855e466bedfd48be83a87be744dfec21~tplv-k3u1fbpfcp-watermark.image)，欢迎关注。
