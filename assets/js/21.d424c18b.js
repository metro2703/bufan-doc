(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{224:function(t,s,a){t.exports=a.p+"assets/img/code-style.4e1bf55c.svg"},367:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"代码风格和压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码风格和压缩"}},[t._v("#")]),t._v(" 代码风格和压缩")]),t._v(" "),n("h2",{attrs:{id:"代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[t._v("#")]),t._v(" 代码压缩")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("精简代码体积，减小网络传输时间，提高页面响应。")])]),t._v(" "),n("li",[n("p",[t._v("删除代码注释")])]),t._v(" "),n("li",[n("p",[t._v("删除无意义或者多余的空白（如空格，制表符，回车，换行）")])]),t._v(" "),n("li",[n("p",[t._v("删除可以省略的符号（如 css 最后一条规则后面的分号，js 块内最后的一条语句的分号）")])]),t._v(" "),n("li",[n("p",[t._v("缩短语句（如果 css 的简写，html 中 disabled='disabled' 改成 disabled , js 中缩短局部变量）")])]),t._v(" "),n("li",[n("p",[t._v("混淆: 降低代码的可读性，防止被追踪出程序逻辑。")])])]),t._v(" "),n("h2",{attrs:{id:"代码风格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码风格"}},[t._v("#")]),t._v(" 代码风格")]),t._v(" "),n("p",[t._v("我们的代码必须尽可能的清晰和易读。")]),t._v(" "),n("p",[t._v("这实际是一种编程艺术 —— 以一种正确并且人类易读的方式编码来完成一个复杂的任务。")]),t._v(" "),n("p",[t._v("有一个帮助你（实现上面的目标）的事情就是良好的代码风格。")]),t._v(" "),n("h2",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),n("p",[t._v("一个含有规则的备忘录（更多细节如下）：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(224),alt:""}})]),t._v(" "),n("p",[t._v("首先，我们需要明确一下，没有什么规则是“刻在石头上”的，每一条都是可选的而且可修改的：这些是编码规则，而不是宗教教条。")]),t._v(" "),n("h3",{attrs:{id:"大括号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大括号"}},[t._v("#")]),t._v(" 大括号")]),t._v(" "),n("p",[t._v('在大多数的 JavaScript 中，大括号（的开始部分）都是写在同一行而不是新换一行。这就是所谓的 "egyptian" 风格。（"egyptian" 风格又称 K&R 风格 —— 代码段括号的开始位于一行的末尾，而不是另外起一行的风格。）对了，在括号的开始部分前面还有一个空格。')]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do this")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...and that")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...and that")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("总结：")]),t._v(" "),n("ul",[n("li",[t._v("对于很短的代码，一行是可以接受的：例如 "),n("code",[t._v("if (cond) return null")]),t._v(".")]),t._v(" "),n("li",[t._v("但是括号中的每个语句单独一行通常更好些。")])]),t._v(" "),n("h3",{attrs:{id:"缩进"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缩进"}},[t._v("#")]),t._v(" 缩进")]),t._v(" "),n("p",[t._v("有两种类型的缩进：")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("水平方向上的缩进: 2(4) 个空格。")])]),t._v(" "),n("p",[t._v('一个水平缩进通常由 2 或 4 个空格或者 "Tab" 制表符构成。选择哪一个方式是一场古老的圣战。')])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("垂直方向上的缩进：用于将逻辑块中的代码进行分割的空行。")])]),t._v(" "),n("p",[t._v("即使是单个函数通常也被分割为数个逻辑块。在下面的例子中，初始化的变量、主要的循环结构和返回值都被垂直分割了。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//              <--")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tresult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//              <--")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("插入一个额外的空行有助于让代码更加地易读。连续超过 9 行都没有被垂直分割的代码是不应该出现的。")])])]),t._v(" "),n("h3",{attrs:{id:"分号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分号"}},[t._v("#")]),t._v(" 分号")]),t._v(" "),n("p",[t._v("每一个语句后面都应该有一个分号。即使它可能会被跳过。")]),t._v(" "),n("h3",{attrs:{id:"嵌套的层级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌套的层级"}},[t._v("#")]),t._v(" 嵌套的层级")]),t._v(" "),n("p",[t._v("你不应该嵌套太多的层级。")]),t._v(" "),n("p",[t._v("例如，下面的两个结构是相同的。")]),t._v(" "),n("p",[t._v("第一个：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Negative 'n' not supported\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tresult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("还有这个：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Negative 'n' not supported\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tresult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("但是第二个更加的可读，因为 "),n("code",[t._v("n < 0")]),t._v(" 这个”边缘情况“已经提前被处理过，并且我们有一个 ”主“ 代码流，而不需要额外的嵌套。")]),t._v(" "),n("h2",{attrs:{id:"函数在代码下面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数在代码下面"}},[t._v("#")]),t._v(" 函数在代码下面")]),t._v(" "),n("p",[t._v("如果你正在写几个”辅助类“的函数和一些使用它们的代码，有三种方式来放置它们。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("函数在调用它们的那些代码之上：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *!*函数声明*/!*")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("walkAround")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用函数的代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("walkAround")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("先写代码，再写函数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("walkAround")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("function createElement() {\n...\n}")]),t._v(" "),n("p",[t._v("function setHandler(elem) {\n...\n}")]),t._v(" "),n("p",[t._v("function walkAround() {\n...\n}")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n")])])])])]),t._v(" "),n("p",[t._v("大多数时候，第二种方式更好。")]),t._v(" "),n("p",[t._v("这是因为当在阅读代码时，我们首先想要知道的是“它做了什么”。如果代码先行，它就会提供这些信息。或许我们一点也不需要阅读这些函数，尤其是他们的名字足够表示出他们做了什么的时候。")]),t._v(" "),n("h2",{attrs:{id:"风格指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#风格指南"}},[t._v("#")]),t._v(" 风格指南")]),t._v(" "),n("p",[t._v("风格指南包含了“如果编写代码”的通用规则：使用什么引号、用多少空格来缩进、哪里放置换行等等很多的小细节。")]),t._v(" "),n("p",[t._v("总的来说，当团队中的所有成员都使用同样的风格指南时，代码看起来是统一的。无论团队中谁写的，都是一样的风格。")]),t._v(" "),n("p",[t._v("当然，一个团队可能会考虑一个他们自己的风格指南。但是现在，他们没必要这样做。现在有很多已经尝试过并制作好的风格指南，可以很容易采用。")]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://google.github.io/styleguide/javascriptguide.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google JavaScript 风格指南"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb JavaScript 风格指南"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/rwaldron/idiomatic.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Idiomatic.JS"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://standardjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("StandardJS"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("(还有很多)")])]),t._v(" "),n("h2",{attrs:{id:"自动检测器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动检测器"}},[t._v("#")]),t._v(" 自动检测器")]),t._v(" "),n("p",[t._v('有很多工具可以自动检查你的代码风格。他们叫做 "linters"。')]),t._v(" "),n("p",[t._v("它们有一个很棒的地方是风格检测也会发现一些 bug（问题），诸如变量名或者函数书写错误。")]),t._v(" "),n("p",[t._v("最出名的工具有：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.jslint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSLint"),n("OutboundLink")],1),t._v(" -- 第一批 linters 之一。")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.jshint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSHint"),n("OutboundLink")],1),t._v(" -- 比 JSLint 多了更多设置。")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),n("OutboundLink")],1),t._v(" -- 可能是最新的一个。")])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("本章的所有语法规则和样式指南旨在提高可读性，因此所有的内容都是值得商榷的。")]),t._v(" "),n("p",[t._v("当我们思考“如何写地更好”的时候，唯一的标准是“什么会让代码更加可读和容易理解，什么会帮助我们避免错误”。这是当选择一种风格或讨论哪一种更好的时候要牢记的主要原则。")])])}),[],!1,null,null,null);s.default=r.exports}}]);