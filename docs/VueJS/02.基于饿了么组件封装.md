# 【Vue项目总结】基于饿了么组件封装

`vue`项目中，组件是项目的基石，每个页面都是组件来组装起来，我司没有自己的组件库，选用的是`ElementUI`组件库，在它的基础上再次封装。

## 可编辑表格

由于是后台管理项目，各种单据漫天飞，而且单据列表要可编辑，可验证，基于业务所以封装了[可编辑表格组件](https://github.com/one-pupil/vue-template/blob/master/src/components/page-edit-table/index.vue)

业务需求：

1. 每列可以编辑

2. 每列输入的值需要被验证

每列可编辑，则需要每列的字段需要一个可编辑的属性`edit`来确定是否可以编辑，输入的值可以被验证，需要我们传入验证规则。

### 确认需要传入的`props`

```
props: {
  // 表格数据
  tableData: {
    type: Array,
    default: () => []
  },
  // 需要验证的列字段
  columns: {
    type: Array,
    default: () => []
  },
  // 是否可编辑
  defaultEdit: {
    type: Boolean,
    default: true
  },
  // 验证集合
  verifyRules: {
    type: Object,
    default: () => {}
  }
}
```

### 表格传入数据后，初始化可编辑状态

阅读`el-table`源码，可以看到，表格组件拥有自己的`store`，一些需要通信的状态都是它来维护的，我们也可创建一个自有的[table-store.js](https://github.com/one-pupil/vue-template/blob/master/src/components/page-edit-table/table-store.js)来维护编辑状态

```
// 初始化数据
this.store = new TableStore({
  list: this.tableData,
  columns: this.columns,
  defaultEdit: this.defaultEdit
});
```

### 可编辑列`edit-table-cell`

利用`slot`插槽来传递编辑状态和验证规则

```
<slot v-else :cellState="cellState" :validateCell="validateCell"></slot>
...
computed: {
  isInput() {
    return this.slotName === 'input';
  },
  rowState() {
    const states = this.editTable.store.states;
    const rowState = states.get(this.row);
    return rowState;
  },
  cellState() {
    const cellState = this.rowState.get(this.prop);
    return cellState;
  }
},
methods: {
  // 验证
  validateCell(cb) {
    this.editTable
      .verifyTableCell(this.row, this.prop, this.cellState)
      .then(errMsg => {
        const valid = !errMsg;
        typeof cb === 'function' && cb(valid);
      });
  }
}
```

### 使用组件

```
// edit-table.vue

<page-edit-table
  ref="editTable"
  v-model="tableData"
  :columns="['categoryName', 'name', 'purchaseDate']"
  :default-edit="true"
  :verify-rules="verifyRules"
>
  <el-table
    ref="table"
    v-loading="loading"
    :data="tableData"
    tooltip-effect="dark"
    highlight-current-row
    border
    stripe
    style="width: 100%"
  >
    <el-table-column align="center" label="序号" width="50">
      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
    </el-table-column>
    <el-table-column label="品目名称" prop="categoryName" show-overflow-tooltip>
      <template slot-scope="{ row }">
        <edit-table-cell :row="row" prop="categoryName">
          <template slot-scope="{ cellState, validateCell }">
            <el-select
              v-if="cellState.edit"
              v-model="row.categoryName"
              clearable
              placeholder="请选择品目"
              @change="validateCell"
            >
              <el-option label="你" value="1"></el-option>
              <el-option label="好" value="2"></el-option>
              <el-option label="呀" value="3"></el-option>
            </el-select>
            <span v-if="!cellState.edit">{{ row.categoryName }}</span>
          </template>
        </edit-table-cell>
      </template>
    </el-table-column>
....    
```

效果如下

![](https://user-gold-cdn.xitu.io/2019/6/28/16b9d4008d95a734?w=1388&h=888&f=gif&s=538644)


具体代码可查看[组件](https://github.com/one-pupil/vue-template/blob/master/src/components/page-edit-table/index.vue)

## 增删改的树组件

`el-tree`树形组件其实已经支持了**自定义节点内容**，但是我们要在它的基础上改变**节点内容**，这里主要是运用了`Vue.set`向响应式对象中添加一个属性。

```
// 部分代码
append(node, data) {
  const { label } = this.configProps;
  const newChild = {
    id: id++,
    [label]: `三级-${id}`,
    children: [],
    isEdit: false
  };
  if (!data.children) {
    this.$set(data, 'children', []);
  }
  data.children.push(newChild);
  this.$emit('addNode', node, data);
},
edit(node, data) {
  if (!node.isEdit) {
    this.$set(node, 'isEdit', true);
  }
  this.$nextTick(() => {
    this.$refs[`treeInput${node.id}`].focus();
  });
  this.$emit('editNode', node, data);
}
```

效果如下：

![](https://user-gold-cdn.xitu.io/2019/6/28/16b9d46ce6de7ff8?w=1388&h=298&f=gif&s=233274)

## 总结

组件是项目的积木条，公用组件的封装成功与否其实是对项目的开发效率有直接影响。具体代码可查看[vue-template](https://github.com/one-pupil/vue-template)，基于`vue-cli3.0`搭建的后台模版。

- [webpack常规打包优化方案](/Note/webpack/webpack.md)
- [组件通信处理方案](/Note/vue/props.md)
- [后台管理项目总结](/Note/vue/http.md)
- [项目部署](/Note/vue/deploy.md)

* 参考
[ElTable](https://github.com/ElemeFE/element/blob/dev/packages/table/src/table.vue)
[el-table-editabled](https://github.com/code-farmer-i/el-table-editabled)