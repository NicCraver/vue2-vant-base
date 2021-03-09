# vue2-vant-base

## 所有命令

使用本框架建议使用`yarn`进行安装启动，安装`yarn`请执行 `npm install yarn -g`

``` 安装
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

具体配置方法 在项目根目录postcss.config.js

### 内置装饰器

### gzip打包压缩代码
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

### 常见问题