# exchange_web

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 参考文档
- [vue](https://cn.vuejs.org/)
- [vuex](https://vuex.vuejs.org/zh-cn/)
- [Vue-Router](https://router.vuejs.org/zh-cn/)
- [elementUI](http://element.eleme.io/)

## 开发工具(统一，防止代码格式化冲突)
- [vscode](https://code.visualstudio.com/)

## vscode插件列表
- Vetur
- Prettier-Code format
- ESlint
- HTML CSS Support
- HTML Snippetss

## vscode配置文件

```
{
  "editor.fontSize": 12,
  "workbench.colorTheme": "Atom One Dark",
  "explorer.confirmDragAndDrop": false,
  "files.autoSave":"off",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    { "language": "vue", "autoFix": true }
  ],
  "eslint.options": {
      "plugins": ["html"]
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
      "wrap_attributes": "force-aligned"
  }
}
```