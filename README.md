# drug-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


``` javascript
this.pageList.forEach(e => { e.imgUrl = this.$http.get(this.getImgURL(e.fileId, 'LOGO')); });
```
## vant ui
```
https://youzan.github.io/vant/#/zh-CN
```
## views文件夹下格式命名

```
模块名-具体模块名称(例：Info)
index.vue 默认为该模块的列表页面
view.vue 默认为list下列表子项跳转的详情页
其余页面语义化命名

组件命名
模块名+具体功能名（例：InfoItem.vue）
```
## 第三方插件地址
```
https://github.com/vuejs/awesome-vue
```
