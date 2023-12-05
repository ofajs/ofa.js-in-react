# ofajs-in-react18

在 react 项目中使用 ofa.js

https://github.com/ofajs/ofa.js-in-react/raw/main/screenshot/video-demo.mp4

## 主要步骤

### 1. 在 `index.html` 中引入 ofa.js

[查看文件](./index.html)

```html
<head>
  <meta charset="UTF-8" />
  <link
    rel="icon"
    type="image/svg+xml"
    href="https://ofajs.github.io/ofa-v4-docs/docs/publics/logo.svg"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ofa.js + React</title>
  <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
</head>
...
```

### 2. 在 `app.jsx`文件中使用组件

> 基于 ofa.js 开发的组件必须已发布（或者放到本地静态服务器）

[查看文件](./src/App.jsx)
```jsx
function App() {
  //...
  const ofaLogo = "https://ofajs.github.io/ofa-v4-docs/docs/publics/logo.svg";
  return (
    <>
      <l-m src="https://ofajs.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
      <punch-logo>
        <img src={ofaLogo} height="90" />
        <h2>Use ofa.js In React</h2>
        <p slot="fly">npm</p>
        <p slot="fly">webpack</p>
        <p slot="fly">nodejs</p>
      </punch-logo>
      //...
    </>
  );
}
```
