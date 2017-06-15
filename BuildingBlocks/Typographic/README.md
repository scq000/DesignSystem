# 字体排版

字体的选用在设计系统中通常可以分为几个部分：字体大小粗细（size&weight)、字体(typeface)、颜色(color)。

## 距离
“距离”通常指的是设置行高、内间距和外间距所制造出来的留白空间

## 使用web字体

```
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/assets/fonts/HelveticaNeue-Light.eot');
  src: url('/assets/fonts/HelveticaNeue-Light.eot?#iefix') format('embedded-opentype'),
    url('/assets/fonts/HelveticaNeue-Light.woff2') format('woff2'),
    url('/assets/fonts/HelveticaNeue-Light.woff') format('woff'),
    url('/assets/fonts/HelveticaNeue-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}
```

## 相对大小

```
html { font-size: 100% }
p { font-size: 1em }

@media (min-width: 64em) {
  html {
    font-size: 112.5%;
  }
}
```


# *工具*

[https://fonts.google.com/](https://fonts.google.com/)

[webfontloader](https://github.com/typekit/webfontloader) 用来控制@font-face加载


http://zcfy.cc/article/typography-handbook-696.html#