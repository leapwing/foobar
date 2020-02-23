---
title: Using Tailwind in SCSS with Gatsby JS
date: 2020-02-23
description: This post look at how to use tailwindcss in Gatsby
categories: [web]
tags: [gatsby, tailwind, css] 
sidebar: auto
---


# {{ $page.title }}

<ArticlePostMeta/>

## 安裝 `tailwindcsss` 與 `sass`

### 安裝依賴項

```sh
yarn add -D node-sass gatsby-plugin-sass tailwindcss
```

### 配置 [`gatsby-plugin-sass`](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)

```js
// gatbsy-config.js
plugins: [
    {
        resolve: `gatsby-plugin-sass`,
            options: {
            postCssPlugins: [
                require("tailwindcss")("./tailwind.config.js"),
                require("autoprefixer"),
            ],
        },
    },
]
```

### 新增 `tailwind.config.js` 文件

```sh
npx tailwind init # defult configuration
```

### 新增 `scss` 檔案

```scss
// src/compoments/layout.scss
@tailwind base;

@tailwind components;

@tailwind utilities;
```

### 導入 `scss` 到 `layout.js`

```js
// src/compoments/layout.js
import './layout.scss'
```

### 在 `page` 的文件中導入 `layout.js`

```js
// src/pages/index.js
import React from "react"
import Layout from "../components/layout"

export default () => <Layout>Hello Tailwindcss</Layout>
```

That's it.

## 安裝 [`gatsby-plugin-purgecss`](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)

### 安裝依賴項

```sh
yarn add -D gatsby-plugin-purgecss
```

### 配置 `gatsby-plugin-purgecsss`

```js
// gatbsy-config.js
plugins: [
    {
        resolve: `gatsby-plugin-sass`,
        options: {
            postCssPlugins: [
                require("tailwindcss")("./tailwind.config.js"),
                require("autoprefixer"),
            ],
        },
    },
    { 
        resolve: `gatsby-plugin-purgecss`,
        options: {
            printRejected: true, // Print removed selectors and processed file names
            // develop: true, // Enable while using `gatsby develop`
            tailwind: true, // Enable tailwindcss support
            // whitelist: ['whitelist'], // Don't remove this selector
            // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
            // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        }
    }
]
```

### 運行指令

建構會移除未使用到的 `css` 類別

```sh
yarn build
```

開發環境測試可將設定調整為 `develop: true`,即可測試：

```sh
yarn development
```