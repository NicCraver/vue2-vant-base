# vue2-vant-base

- [x] 移动端适配
- [x] vant 自动按需引入组件
- [ ] 内置装饰器
- [x] gzip 打包压缩代码
- [x] 自动删除 console.log
- [x] 二次封装 axios
- [x] mock
- [x] store
- [x] router
- [x] filter
- [x] mixins
- [x] Lodash
- [x] 全局 base components
- [x] 404
- [ ] VConsole
- [x] 自定义指令 Directives
- [ ] 路由后退缓存 https://github.com/hezhongfeng/vue-page-stack
- [ ] vue.config.js css

## 所有命令

使用本框架建议使用`yarn`进行安装启动，安装`yarn`请执行 `npm install yarn -g`

```安装
yarn install
```

### 启动

```
yarn serve
```

### 打包

```
yarn build
```

### 移动端适配方案

当前框架使用了插件`postcss-px-to-viewport`在项目构建的时候，将`px`转换为`vw`,来满足移动端适配需求

```
yarn add postcss-px-to-viewport -D
```

具体配置方法 在项目根目录 postcss.config.js

### vant 自动按需引入组件 (推荐)

```
yarn add babel-plugin-import -D
```

具体配置在`babel.config.js`中

vant 组件引入位置在 src\plugin\vant.js

### 内置装饰器

### gzip 打包压缩代码

通过配置压缩工具，可以在`build`的时候，自动将静态资源压缩为`gz`文件，当部署的服务器启用`gzip`功能后，将会自动加载压缩的文件，提高加载速度

### 自动删除`console.log`

```
yarn add babel-plugin-transform-remove-console -D
```

具体配置在`babel.config.js`中

一般在调试程序时，需要通过`console.log`来调试，但是发布到线上后，一般并不需要这些`console.log`，如果手动删除太麻烦了，所以配置了自动删除`console.log`功能

### 二次封装`axios`

本框架对`axios`进行了二次封装，使用时只需要调整一下`token`获取方式，封装文件位置在 `src/utils/request.js`

### `mock`

mock 文件夹中按功能模块维护 mockapi，/src/api 中使用 mockapi 返回接口数据
详细示例在 /src/Examples/Axios 中

### 全局 base components

Base 组件维护在 /src/components/base 中
/src/components/index.js 中 将 components 文件夹下的组件注册到全局
注意：1.组件名称必须首字母大写 2.组件内部必须有 name 属性

### `store`

集成了缓存的 vuex
src\Examples\Vuex.vue 中有示例
src 下`config.js`中有配置是否缓存及缓存方式

### 常见问题
