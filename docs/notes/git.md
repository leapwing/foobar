---
title: GIT 基本應用 
date: 2019-11-26
description: This post look at how to use git
categories: [GIT]
tags: [git]
sidebar: auto
---

# {{ $page.title }}

<ArticlePostMeta/>

## 使用 `.gitignore` 來忽略文件

使 `GIT` 不追蹤設定匹配的文件，一般來說如，系統檔案、配置文件、建構生成檔、安裝相依、非文檔說明及個人檔案、應用資料和日誌等...

```
# comment
node_modules
app.config
*.pyc
*.sqlite
log-*
public/**/*.min.js
!.env
```

通配符 `*` 會匹配除了 `/` 之外的內容，而 `**` 的使用會在後連接 `/` 且在所有目錄中匹配，而不管有多少目錄。

支援一些簡單的正則表達式

- `[a-zA-Z]` : 匹配字符
- `?`: 匹配前面字元0次或1次
- `!` : 否定匹配項或前一字符

允許添加註解 `#` 以利說明

在專案中跟目錄放置 `.gitignore` 是最常見的方式，也可將其至於嵌套中的目錄，便於使用不同規則。

另外亦有全局的 `.gitignore` 通置於主目錄文件夾中 `~/.gitignore`

可使用 `git config --global core.excludesFile ~/.gitignore` 指令變更文件路徑

當需提交忽略的文件
- 可加入 `!` 前綴來告訴 `GIT` 不要忽略文件，例如 `!.env`，這會覆蓋全局或父目錄中的匹配設定。
- 暫存文件時使用 `--force` 選項 (或 `-f`) 即 `git add .env --force`

