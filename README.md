### RN v0.6x 搭配 react-navigation v5 的最新版三端同构方案
![TEST-PASSING](https://img.shields.io/badge/test-passing-brightgreen)

#### 大致流程：
- 原生客户端使用`npm run android`或`npx react-native run-android`(npm v5.2+)启动
- h5使用webpack进行打包配置，将`react-native$`映射到`react-native-web`渲染为为dom元素
- `npm run web:dev`启动webpack-dev-server调试，和普通移动端开发一样
- `npm run web`打包为生产环境代码到dist-H5

#### 注意事项：
1. 项目全部采用TS，目前新版RN支持TS，只需要在根目录配置`tsconfig.json`即可。需要注意的是在webpack编译RN TS代码为H5 JS，没有使用`ts-loader`，因为`tsconfig.json`中我们配的`jsx`识别为`react-native`，但是实际上我们将其代理成了dom元素，打包会产生冲突导致loader编译错误。解决方案为直接使用`babel-loader`进行配置编译TS。

2. 该项目大环境有两个包使用了原生的模块，需要使用link进行关联操作，否则构建报错。在npm i后执行：
- `npx react-native link react-native-gesture-handler` 这个是react-navigation使用的原生的手势系统。
- `npx react-native link @react-native-community/async-storage` 这个类似于浏览器的localStorage原生缓存。