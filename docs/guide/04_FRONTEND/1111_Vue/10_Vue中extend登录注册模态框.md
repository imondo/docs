# Vue.extend 登录注册模态框

模态框是我们 `UI` 控件中一个很重要的组件，使用场景有很多种，我们在 Vue 组件中创建模态框组件而用到的一个知识点是利用 `Vue.extend` 来创建。
文档中的解释是
![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1609134297017-b7489852-c216-4b23-aa36-15d831868249.png)

在最近在做一个常用的类似下面的`登录/注册`业务场景时，利用 `Vue.extend` 来改善我们的代码，使我们代码逻辑更清晰化。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/124135/1609134725039-caddfa48-1746-42ef-8e9f-3628d59c0085.png)

需求：点击登录或注册出现各自的模态框。

我们对于这种常见的登录注册业务，一般都是分为 `Sigin.vue` 和 `Register.vue` 两个组件，然后把两个组件写入 App.vue 组件中，或者是 `layout.vue` 组件中。

原来的这种使用，对于我们的整块的登录注册逻辑是分散的，一些需要登录或者是权限的逻辑，可能都需要特意去提取一个 `Visible` 来控制我们的登录框。

使用 `Vue.extend` 可以达到统一接口，不用逻辑分散，下面的示例，仅作参考，不了解该 api 使用的可以了解下，而了解的，欢迎指导😃

## 组件
新建 `LoginModel` 目录，新建 `Sigin.vue` 和 `Register.vue` 两个组件
```javascript
<template>
  <div>登录</div>
</template>

<template>
  <div>注册</div>
</template>
```
再新建 `index.vue` 组件
```javascript
<template>
  <div v-if="show">
    <Sigin v-if="type === 'sigin'" @sigin="loginCallback" />
    <Register v-if="type === 'register'" @register="loginCallback" />
  </div>
</template>

<script>
import Sigin from "./sigin";
import Register from "./register";
export default {
  components: {
    Register,
    Sigin
  },
  data() {
    return {
      show: false,
      type: "sigin"
    };
  }
};
</script>
```
<a name="b2w2C"></a>
## 创建子类
新建 `index.js`，导入我们的 `index.vue`
```javascript
import Vue from "vue";
import ModalCops from "./index.vue";

const LoginModal = Vue.extend(ModalCops); // 创建 Vue 子类

let instance;

const ModalBox = (options = {}) => {
  if (instance) {
    instance.doClose();
  }
  // 实例化
  instance = new LoginModal({
    data: {
      show: true, // 实例化后显示
      ...options
    }
  });
  instance.$mount();
  document.body.appendChild(instance.$el); // 将模态框添加至 body
  return instance;
};

// 对应的登录
ModalBox.sigin = () => {
  return ModalBox({
    type: "sigin"
  });
};

ModalBox.register = () => {
  return ModalBox({
    type: "register"
  });
};

export default {
  install(Vue) {
    Vue.prototype.$loginer = ModalBox;
  }
};

```
创建完成后，我们可以在入口挂载到 Vue 实例上
```javascript
// main.js
import LoginModal from "./components/LoginModal";

Vue.use(LoginModal);
```
在需要登录/注册的地方只用调用
```javascript
<div>
  <a href="javascript:;" @click="onLogin('sigin')">登录</a>
	/
  <a href="javascript:;" @click="onLogin('register')">注册</a>
</div>

onLogin(type) {
  this.$loginer({
    type
  })
}
```
效果如下

![rn12.gif](https://cdn.nlark.com/yuque/0/2020/gif/124135/1609136332247-1ef03f05-5dd2-4ca4-bb8b-14b8c10979cb.gif)
## 验证事件
我们都知道模态框需要关闭事件，而像这种业务的关闭事件必然是需要验证提交信息，所以我们需要加上关闭回调函数。<br />修改 `Sigin.vue` 和 `Register.vue` 两个组件，添加事件
```javascript
// Sigin.vue
<template>
  <div>
    <button @click="onClick">登录确认</button>
  </div>
</template>

<script>
export default {
  name: "Sigin",
  methods: {
    onClick() {
      this.$emit("sigin");
    }
  }
};
</script>

// Register.vue
<template>
  <button @click="onClick">注册确认</button>
</template>

<script>
export default {
  name: "Register",
  methods: {
    onClick() {
      this.$emit("register");
    }
  }
};
</script>

```
修改 `index.vue` 添加 `$emit` 事件
```javascript
<template>
  <div v-if="show">
    <Sigin v-if="type === 'sigin'" @sigin="loginCallback" />
    <Register v-if="type === 'register'" @register="loginCallback" />
  </div>
</template>

<script>
import Sigin from "./sigin";
import Register from "./register";
export default {
  components: {
    Register,
    Sigin
  },
  data() {
    return {
      show: false,
      type: "sigin"
    };
  },
  methods: {
    loginCallback() {
      if (!this.ok) return;
      this.ok().then(valid => {
        if (valid) {
          this.doClose();
        }
      });
    },
    doClose() {
      this.show = false;
    }
  }
};
</script>
```
修改 `index.js` 文件
```javascript
import Vue from "vue";
import ModalCops from "./index.vue";

const LoginModal = Vue.extend(ModalCops);

let instance;

const ModalBox = (options = {}) => {
  if (instance) {
    instance.doClose();
  }
  instance = new LoginModal({
    data: {
      show: true,
      ...options
    }
  });
  instance.ok = () => {
    return new Promise(resolve => {
      const before = options.ok ? options.ok() : false;
      if (before && before.then) {
        before.then(
          () => resolve(true),
          () => {
            console.log("reject");
          }
        );
      } else if (typeof before === "boolean" && before !== false) {
        resolve(true);
      }
    });
  };
  instance.$mount();
  document.body.appendChild(instance.$el);
  return instance;
};

ModalBox.sigin = ok => {
  return ModalBox({
    type: "sigin",
    ok
  });
};

ModalBox.register = ok => {
  return ModalBox({
    type: "register",
    ok
  });
};

ModalBox.close = () => {
  instance.doClose();
  instance.show = false;
};

export default {
  install(Vue) {
    Vue.prototype.$loginer = ModalBox;
  }
};

```
使用回调
```javascript
onLogin(type) {
  const funcs = {
    sigin: () => {
      console.log("登录请求");
    },
    register: () => {
      console.log("注册请求");
    }
  };
  this.$loginer({
    type,
    ok: () => {
      return new Promise((resolve, reject) => {
        // isOk 验证数据是否正确
        if (this.isOk) {
          funcs[type]();
          resolve();
        } else {
          reject();
        }
      });
    }
  });
}
```
效果如下

![12.gif](https://cdn.nlark.com/yuque/0/2020/gif/124135/1609137726495-d6d49966-d8af-4d5a-a9b3-6989ba6fa4d7.gif)

本文[代码地址](https://github.com/imondo/study/blob/master/vue-cli3/vue-project-article/src/components/LoginModal/index.js)
