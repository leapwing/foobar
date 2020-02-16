---
title: JavaScript 基礎
date: 2020-02-13
description: This post is about JS base
categories: [web]
tags: [js]
sidebar: auto
---

# {{ $page.title }}

<ArticlePostMeta/>

## JavaScript Variables (變數)

變數是表示標示符的文字，所以可以在程式中參考或使用。

JS 的變數中沒有附加任何類型，所以可重新配置其他類型之資料，也不會出現類型錯誤的問題。

這也是 JS 被稱為 `weakly-typed` 的原因。

### var

在 ES2015之前，`var` 是唯一可用於定定義變數的結構。

```js
var a = 0
b = 0 // no declare result might very
var a // typeof a === 'undefined'
var a = 1 // redeclare the variable
var a = 2, b = 1 // in the same statement
```

若變數沒有宣告`var` ，卻賦值可能造成不同結果。
不同環境下依啟用嚴格模式([strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode))，就會出現錯誤，而未啟用下就會將其分配給全局(global)變數。
如有聲明變數而無初始化(賦值)，變數將具有未定義(undefined)的值。
可多次重新宣告，會覆蓋先前宣告。
也可在同一語句中同時宣告多個變數。

作用域(scope) 僅在函式部分，非函式的變數都分配給全局變數。

### let

`let` 是 ES2015 中的一個新特性，作用範圍僅限於塊(curly braces)、語句(statement)、或表達式(expression)。


```js
let a = 10
```

在任何函式外定義 `let` 並不會分配給全局變數。

### const

用 `var` 或 `let` 聲明的變數可在稍後的程序中修改，只要初始化一個常數，其值就不能再次修改，無法再重新分配其他值。

```js
const a = "test"
```

不能將常數變數賦予不同內容值，但若是物件變數則有修改的方式。

`const` 並不提供不變性，只是確保參考不會被變動。

`Const` 有塊作用域，和 `let` 一樣。

常被使用來處理不需要重新分配的變數。

### 詞結構法(Lexical Structure)

- Unicode

可用任何語言編寫標示符(須符合規範)，或 `Emojis` 作為變數。

- 分號(Semicolons)

分號不是強制性，不使用分號也不會有問題。
但要避免多行輸入語句。

- 空格(White space)

對 JS來說空格不具有意義，留空格或換行只是一種寫作風格。

- 區分大小寫(Case sensitive)

`variable != Variable` 此兩變數是不同的。

- 註解(Comments)

```js
/* 可跨越多行，且需要關閉 */
// 註釋當前內容
```

- 變數命名

```js
let userName // best practice use camelCase            ✅
let userGroup10 // use digits after letters is allowed ✅
let $dollar // starting with $ is allowed              ✅
let _privateName // starting with _ is allowed         ✅
let user_name   // allowed but bad practice
let 99Players // starting with digits is not allowed   ❌
let user-name // no special characters                 ❌
let let // Keyword not allowed                         ❌
```

- 保留字(Reserved words)

勿使用保留字作為標示。

## Data Types 簡介

### Numbers

數值類型只有一種，每個數值都是浮點數(float)。

```js
10
-7
0xAB // hex
9.99
1.23e4 //1.23 * 10^4
```

### Strings

字串類型是字元序列。

```js
'Hi'  // single quotes
"Hi"  // double quotes
`Hi`  // template literals using backtick
"A \
string" // across multiple lines by using the backslash
'I\'m a developer' // backslash interpret escape sequences method
"A " + "string" // joined using the "+" operator
```

ES2015 提供的 template literals 可替換字符串。

```js
const myString = `it work!`
`my string with ${myString}` // substitution
`my string with ${myString + myOtherString}` // operator
`my string with ${obj.method()}`  // expression
`my string
with
${myString}` // multiline
```

### Booleans

布林類型定義兩個保留字：`true` 和 `false` ，在比較運算中會返回布林值。

```js
true
false
```

控制結構流程，不只接受布林值，還可接受 `truthy` 和 `falsy` 的值。

```js
0
-0
NaN
undefined
null
'' // empty string
```

以上的值被解釋為 `falsy` ，其餘的都為 `truthy`。

### null

`null` 是一個特殊值，表示沒有值，可用來重置或清除變數值。

### undefined

`undefined` 表示變數未初始化而且沒有值。
不能賦值 `undefined` 給變數。
當函式沒返回值，調用時，調用時分配給一變數，此變數就會變成未定義。

### Object types

任何不是 primitive type 的都是物件類型。
物件類型具有屬性，還有可作用於屬性的方法。

```js
{item: "book", amount: 12}
[2,4,6]  // arrays
```

## 算術運算子(Operators)

| Operators     | Example  | Description                                         |
|---------------|----------|-----------------------------------------------------|
| `+`           | `1 + 2`  | add two number                                      |
| `-`           | `5 - 2`  | Subtract two numbers                                |
| `*`           | `2 * 3`  | Multiply two numbers                                |
| `/`           | `6 / 2`  | Divide two numbers                                  |
| `%`           | `7 % 2`  | Divide two numbers, yield remainder                 |
| `**`          | `2 ** 3` | Exponentiation                                      |
| `=`           | `x = 10` | Assign value to variable                            |
| `+=` `-=` ... | `x += 5` | Perform calculation and reassign result to variable |
| `++` `--`     | `x++`    | Increment / Decrement variable value + reassign     |
| `+` `-`       | `-x`     | Unary negation                                      |

### Operators 優先權

運算子優先權規則順序如下：

| Operator                           | Description                              |
|------------------------------------|------------------------------------------|
| `-` `+` `++` `--`                  | unary operators, increment and decrement |
| `*` `/` `%`                        | multiply/divide                          |
| `+` `-`                            | addition/subtraction                     |
| `=` `+=` `-=` `*=` `/=` `%=` `**=` | assignments                              |

若加入小括號(parentheses) 則擁有最高優先權級。
