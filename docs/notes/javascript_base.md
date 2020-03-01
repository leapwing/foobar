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

### `var`

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

### `let`

`let` 是 ES2015 中的一個新特性，作用範圍僅限於塊(curly braces)、語句(statement)、或表達式(expression)。


```js
let a = 10
```

在任何函式外定義 `let` 並不會分配給全局變數。

### `const`

用 `var` 或 `let` 聲明的變數可在稍後的程序中修改，只要初始化一個常數，其值就不能再次修改，無法再重新分配其他值。

```js
const a = "test"
```

不能將常數變數賦予不同內容值，但若是物件變數則有修改的方式。

`const` 並不提供不變性，只是確保參考不會被變動。

`const` 有塊作用域，和 `let` 一樣。

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

### `Numbers`

數值類型只有一種，每個數值都是浮點數(float)。

```js
10
-7
0xAB // hex
9.99
1.23e4 //1.23 * 10^4
```

### `Strings`

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

### `Booleans`

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

### `null`

`null` 是一個特殊值，表示沒有值，可用來重置或清除變數值。

### `undefined`

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

## 函式(function)

函式是個代碼塊，可以定義一次，並可在任何地方運行。

函式可接收參數，且可返回一個值。

函式類型是物件，一種特殊物件類型：`function objects` 。

### 語法(Syntax)

```js
function foo(bar) {  // regular function
    // do something
}
const foo = function(bar) {  // function expression
    // do something
}
const foo = function foo(bar) {  // named function expression
    // do something
}
const foo = bar => {  // arrow function
    // do something
}
```

### 參數(Parameters)

```js
const foo = () => {  // no parameters
    // do something
}
const foo = bar => {  // one parameters
    // do something
}
const foo = (bar, baz) => {  // more parameters
    // do something
}
const foo = (bar = 1, baz = 'hi') => {  // default value by ES6
    // do something
}
```

調用函式可使用展開操作(spread operator)：

```js
const foo = (bar = 1, baz = 'hi') => {
    // do something
}
const args = [2, 'Hi!!!']
foo(...args)
```

當有很多參數時，很難依順序加入，可使用 `objects` 來解構(destructuring)其參數名稱。

```js
const foo = ({ bar = 1, baz = 'hi'}) => {
    // do something
}
const args = {bar: 2, baz: 'Hi!!!'}
foo(args)
const foo_two = ({ bar = 1, baz = 'hi'} = {}) {
    // do something
}
foo_two() // assign a default empty object
```

### 返回值(Return values)

每個函式返回預設值都是 `undefined` 。

任何函式在其代碼行結束或執行流程遇到 `return` 時終止。

返回時只能返回一值，若要返回多值，可使用 `object` 或 `array` ，並在調用時使用解構賦值。

```js
const foo = () => {
    return ['javascript', 25]  // return array
}
const [name, age] = foo() // name = "javascript", age = 25
const bar = () => {
    return {name:'javascript', age:25}  // return objects
}
const {name, age} = bar() // name = "javascript", age = 25
```

### 嵌套函式(Nested functions)

```js
const foo = () => {
    const bar = () => {
        // bar function code
    }
    bar()  // cannot be called from the outside function
    return 'baz'
}
```

這有助於封裝程式碼，受作用域(scope)限制，所以可使用已定義在其他函式的函式與變數。

```js
const foo = () => {
    const bar = () => {
        // bar function code
    }
    bar() // this scope in foo
    return 'baz'
}
const foo_two = () => {
    const bar = () => {
        // bar function code
    }
    bar() // this scope in foo_two
    return 'qux'
}
```

### 物件方法(Object Methods)

當使用物件屬性時，函是被稱之為方法。

```js
const foo = {
    name: 'js',
    age: 25,
    start: function() {
        console.log('Started')
    }
}
foo.start()
```

### 箭頭函式中的 `this`

當作為物件方法使用時，箭頭函式與一般函式有著不同的行為：
`stop()` 方法執行下非預期的結果。

```js
const book = {
    name: 'Beginning JavaScript',
    publish: '2015-3-9',
    start: function() {
        console.log(`Started ${this.name} ${this.publish}`) // Started Beginning JavaScript 2015-3-9
    },
    stop: () =>  {
        console.log(`Stopped ${this.name} ${this.publish}`) // Stopped undefined undefined
    }
}
```

這是因為兩個函式聲明樣式對 `this` 的處理式不同的。箭頭函式的 `this` 是指封閉函式的上下文，這邊是指 `window` 物件。

`this` 是指向宿主物件使用的函式。

這表示箭頭函式不適合用於物件方法與構造函式(會引起 `TypeError`)。

### 及時調用函式表達式 (IIFE)

`IIFE`(Immediately Invocated Function Expressions) 是在聲明後立即執行的函式，因而不需在函是定義後再調用。

```js
(function foo() { // named IIFE
    console.log("run")
})();
const bar = (function () { // assign the result to a variable
    return 'bar';
})();
(() => { // arrow function IIFE
    console.log("run in arrow function")
})();
```

### 函式提升 (Function Hoisting)

JS 會在程式代碼執行前，根據規則重新排序。

特別是函式會被移到調用作用域的頂部。

```js
foo()
function foo() {
    console.log("run foo function")
}
```

但是若使用命名函式表達式，有使用變數，就會發生不一樣結果。
`var` 與 `const` 聲明產生不同錯誤。

```js
foo() // Uncaught ReferenceError: Cannot access 'foo' before initialization
const foo = function foo() {
    console.log("run foo function")
}
bar() // Uncaught TypeError: bar is not a function
var bar = function bar() {
    console.log("run bar function")
}
```

這是因為 `var` 聲明提升並初始化為 `undefined`，而 `const` 聲明提升但沒有初始化。

## 載入 `JavaScript` 腳本

在 HTML 頁面上加仔腳本時，需要注意不要損害頁面加載性能。

```js
<script src="script.js"></script>
```

當 HTML 執行到這行就會載入腳本並執行。完成後就繼續後面解析。這會對加載時間產生很大的影響。

### 腳本位置

一般會放到 `head` 標籤中。

```js
<html>
  <head>
    <title>Title</title>
    <script src="script.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

這樣的方式是不好的，會造成大量延遲，這問題常見的解決方法就是放置到 `</body>` 標籤前。在所有頁面被解析加載後，腳本才被加載和執行。

### Async & defer

異步和延遲用法相似：

```js
<script async src="script.js"></script>
<script defer src="script.js"></script>
<script async defer src="script.js"></script>
```

這只能放置 `head` 標籤內使用，在 `body` 標籤內不起作用。
亦可同時指定使用，`async` ，當瀏覽器不支援時，會退回到 `defer`。

### 效能比較

異步(async) 是會立即載入，並執行會阻止HTML解析及渲染。若有多腳本時，依載入完成先執行。
延遲(defer) 是會立即載入，並在HTML解析及渲染後執行。若有多腳本則執行順序依照標籤順序。


<img :src="$withBase('/js_script_load.jpg')" alt="foo">

### 參考文件

[MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[MDN JavaScript Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

[MDN JavaScript Operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

[MDN JavaScript Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

[MDN JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

[MDN JavaScript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)