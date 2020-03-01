---
title: Vuepress 安裝設定
date: 2019-12-15
description: This post look at how to install vuepress
categories: [web]
tags: [vuepress] 
sidebar: auto
---


# {{ $page.title }}

<ArticlePostMeta/>

## Vuepress 使用 Tailwindcss

### 安裝依賴項

```sh
yarn add -D @fullhuman/postcss-purgecss tailwindcss
```

### 配置 [`config`](https://vuepress.vuejs.org/config/)

```js
// .vuepress/config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
      "./node_modules/@vuepress/theme-default/**/*.*",
      "./node_modules/@vuepress/!(theme-default)/**/*.vue",
      "./docs/.vuepress/styles/*.styl",
      "./docs/.vuepress/components/*.vue",
      "./docs/**/*.md"
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });

module.exports = {
    ...
    postcss: {
        plugins: [
          require("tailwindcss")("./tailwind.config.js"),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
        ]
    },
    ...
}
```

`purgecss` 會提取到對應到相關樣式檔案，以避免包含未定義之樣式。

```json
{
  ...
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:prod": "export NODE_ENV=production && vuepress build docs"
  },
  ...
}
```

`yarn docs:prod`：建立 NODE_ENV 環境變數套用至 config.js 中的 `postcss` 。

### 新增 `tailwind.config.js` 文件

```sh
npx tailwind init # defult configuration
```

### 新增 `styl` 檔案

```css
// .vuepress/styles/index.styl
// @tailwind base;

*, *::before, *::after {
    border-width: 0;
    border-style: solid; 
    border-color: #e2e8f0;
    box-sizing: border-box;
}

.reset-underline a:hover {
    text-decoration: none !important;
    outline: 0;
}

@tailwind components;

@tailwind utilities;
```

因 `vuepress` 預設樣式與 `@tailwind base` 有所不同，因此移除 `@tailwind base`，並作少數的樣式調整。
以確保 `tailwindcss` 可使用。

## Unknown custom element: `<v-xxxxxxxx>` - did you register the component correctly?

新增 `enhanceApp.js`，強制註冊組件。

```js
import pageComponents from "@internal/page-components";

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    for (const [name, component] of Object.entries(pageComponents)) {
        Vue.component(name, component);
    }
};
```
