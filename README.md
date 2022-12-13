# cheese

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用方法：
首先你需要下载nodejs,百度，设置下环境变量
全局安装vue-cli脚手架，接着pull本项目，然后执行
然后安装本项目，依次运行以下语句
```
npm install
```

```
npm run serve
```
提示:
```
 App running at:
  - Local:   xxx.xxxx.xxx
  - Network: xxx.xxx.xxxx
```
则项目启动成功,
打开浏览器，输入下方任意一个地址就可以访问本项目了，一般用localhost就行

如果报错，检查package.json里的dependencies是否有缺失，它应该是这样的：
```
"dependencies": {
    "ant-design-vue": "^1.7.8",
    "axios": "^1.2.1",
    "core-js": "^3.8.3",
    "register-service-worker": "^1.7.2",
    "vue": "^2.6.14",
    "vue-router": "^3.5.1",
    "vuex": "^3.6.2"
  },
```
缺失什么包直接在项目的根目录npm install对应的模块，如果不行，请
```
npm list -g
``` 
查看下全局的依赖
它应该是至少包含下面字段的：
```
+--@vue/cli@5.0.8
+--webpack-dev-server@4.11.1

```
没有就全局安装，
```
npm install 模块名 -g
```
