# ofa.js in React 18

Using ofa.js in a react project

<video  controls>
    <source src=./screenshot/video-demo.mp4 type=video/mp4>
</video>

## Main Steps

### 1. Include ofa.js in `index.html`

[View File](./index.html)

```html
<head>
  <meta charset=UTF-8 />
  <link
    rel=icon
    type=image/svg+xml
    href=https://ofajs.github.io/ofa-v4-docs/docs/publics/logo.svg
  />
  <meta name=viewport content=width=device-width, initial-scale=1.0 />
  <title>ofa.js + React</title>
  <script src=https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js></script>
</head>
```

### 2. Use the component in `app.jsx` file

> The component based on ofa.js must have been published (or served from a local static server)

[View File](./public/index.html)
```jsx
function App() {
  //...
  const ofaLogo = <https://ofajs.github.io/ofa-v4-docs/docs/publics/logo.svg>;
  return (
    <>
      <l-m src=https://ofajs.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html></l-m>
      <punch-logo>
        <img src={ofaLogo} height=90 />
        <h2>Use ofa.js In React</h2>
        <p slot=fly>npm</p>
        <p slot=fly>webpack</p>
        <p slot=fly>nodejs</p>
      </punch-logo>
      //...
    </>
  );
}
```

