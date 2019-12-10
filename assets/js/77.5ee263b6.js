(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{377:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[t._v("#")]),t._v(" 数据类型转换")]),t._v(" "),s("h2",{attrs:{id:"变量的类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的类型转换"}},[t._v("#")]),t._v(" 变量的类型转换")]),t._v(" "),s("p",[t._v("类型转换主要指，将其他的数据类型，转换为：String、Number、Boolean。你会把某个数据类型转换成 null 或者 undefined 吗？不会，因为这样做，没有意义。")]),t._v(" "),s("h3",{attrs:{id:"其他的简单类型-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他的简单类型-string"}},[t._v("#")]),t._v(" 其他的简单类型 --\x3e String")]),t._v(" "),s("h4",{attrs:{id:"方法一：变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一：变量"}},[t._v("#")]),t._v(' 方法一：变量+""')]),t._v(" "),s("p",[t._v("举例如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("vat a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Number 类型")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转换成 String 类型")]),t._v("\n")])])]),s("p",[t._v("上面的例子中，打印的结果，都是字符串类型的数据。")]),t._v(" "),s("h4",{attrs:{id:"方法二：调用-tostring-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二：调用-tostring-方法"}},[t._v("#")]),t._v(" 方法二：调用 toString()方法")]),t._v(" "),s("p",[t._v("举例如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("变量.toString()\n")])])]),s("p",[t._v("【重要】该方法"),s("strong",[t._v("不会影响到原变量")]),t._v("，它会将转换的结果返回。当然我们还可以直接写成"),s("code",[t._v("a = a.toString()")]),t._v("，这样的话，就是直接修改原变量。")]),t._v(" "),s("p",[t._v("注意：null 和 undefined 这两个值没有 toString()方法，所以它们不能用方法二。如果调用，会报错。")]),t._v(" "),s("p",[t._v("另外，Number 类型的变量，在调用 toString()时，可以在方法中传递一个整数作为参数。此时它将会把数字转换为指定的进制，如果不指定则默认转换为 10 进制。例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对于Number调用toString()时可以在方法中传递一个整数作为参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11111111")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n")])])]),s("h4",{attrs:{id:"方法三：使用-string-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法三：使用-string-函数"}},[t._v("#")]),t._v(" 方法三：使用 String()函数")]),t._v(" "),s("p",[t._v("格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("String(变量)\n")])])]),s("p",[t._v("使用 String()函数做强制类型转换时：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对于 Number 和 Boolean 而言，实际上就是调用 toString()方法。")])]),t._v(" "),s("li",[s("p",[t._v('但是对于 null 和 undefined，就不会调用 toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。')])])]),t._v(" "),s("h3",{attrs:{id:"其他的数据类型-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他的数据类型-number"}},[t._v("#")]),t._v(" 其他的数据类型 --\x3e Number")]),t._v(" "),s("h4",{attrs:{id:"使用-number-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-number-函数"}},[t._v("#")]),t._v(" 使用 Number()函数")]),t._v(" "),s("p",[s("strong",[t._v("情况一：字符串 --\x3e 数字")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.如果字符串中是纯数字，则直接将其转换为数字。")])]),t._v(" "),s("li",[s("p",[t._v("2.如果字符串中有非数字的内容，则转换为 NaN。（此处可以看到 Number()函数的局限性）")])]),t._v(" "),s("li",[s("p",[t._v("3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。")])])]),t._v(" "),s("p",[s("strong",[t._v("情况二：布尔 --\x3e 数字")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("true 转成 1")])]),t._v(" "),s("li",[s("p",[t._v("false 转成 0")])])]),t._v(" "),s("p",[s("strong",[t._v("情况三：null --\x3e 数字")])]),t._v(" "),s("ul",[s("li",[t._v("结果为：0")])]),t._v(" "),s("p",[s("strong",[t._v("情况四：undefined --\x3e 数字")])]),t._v(" "),s("ul",[s("li",[t._v("结果为：NaN")])]),t._v(" "),s("h3",{attrs:{id:"转换为-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换为-boolean"}},[t._v("#")]),t._v(" 转换为 Boolean")]),t._v(" "),s("p",[t._v("将其他的数据类型转换为 Boolean，可以使用 Boolean()函数。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("情况一：数字 --\x3e 布尔。除了 0 和 NaN，其余的都是 true。")])]),t._v(" "),s("li",[s("p",[t._v("情况二：字符串 ---\x3e 布尔。除了空串，其余的都是 true。")])]),t._v(" "),s("li",[s("p",[t._v("情况三：null 和 undefined 都会转换为 false。")])]),t._v(" "),s("li",[s("p",[t._v("情况四：对象也会转换为 true。")])])]),t._v(" "),s("p",[t._v("Tip：上面的这就种情况，很重要，开发中会经常用到。")]),t._v(" "),s("h3",{attrs:{id:"隐式类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),s("p",[t._v("在 JavaScrit 中存在很多的隐式类型转换，隐式转换采用的其实是以下方式:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("转换为number类型: Number()\n转换为string类型: String()\n转换为boolean类型: Boolean()\n\n")])])]),s("h2",{attrs:{id:"parseint-和-parsefloat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint-和-parsefloat"}},[t._v("#")]),t._v(" parseInt() 和 parseFloat()")]),t._v(" "),s("h3",{attrs:{id:"parseint-：字符串-整数【重要】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint-：字符串-整数【重要】"}},[t._v("#")]),t._v(" "),s("code",[t._v("parseInt()")]),t._v("：字符串 -> 整数【重要】")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("parseInt()")]),t._v("是专门用来对付字符串的。")])]),t._v(" "),s("p",[s("strong",[t._v("parseInt()的作用是将字符串中的有效的整数内容转为数字")]),t._v("。parse 表示“转换”，Int 表示“整数”（注意"),s("code",[t._v("Int")]),t._v("的拼写）。例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('parseInt("5");\n')])])]),s("p",[t._v("得到的结果是数字 5。")]),t._v(" "),s("p",[s("strong",[t._v("parseInt()还具有以下特性")]),t._v("：")]),t._v(" "),s("p",[t._v("（1）"),s("strong",[t._v("只保留字符串最开头的数字")]),t._v("，后面的中文自动消失。例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    console.log(parseInt("2019在公众号上写了6篇文章"));  //打印结果：2019\n\n    console.log(parseInt("2019.01在公众号上写了6篇文章"));  //打印结果仍是：2019   （说明只会取整数）\n\n    console.log(parseInt("aaa2019.01在公众号上写了6篇文章"));  //打印结果：NaN\n')])])]),s("p",[t._v("（2）自动带有截断小数的功能："),s("strong",[t._v("取整，不四舍五入")]),t._v("。")]),t._v(" "),s("p",[t._v("例 1：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9")]),t._v("\n")])])]),s("p",[t._v("例 2：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10")]),t._v("\n")])])]),s("p",[t._v("（3）如果对"),s("strong",[t._v("非 String")]),t._v("使用 parseInt()或 parseFloat()，它会"),s("strong",[t._v("先将其转换为 String")]),t._v("然后再操作。")]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印结果：NaN （因为是先将a转为字符串"true"，然后然后再操作）')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印结果：NaN  （因为是先将b转为字符串"null"，然后然后再操作）')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印结果：NaN  （因为是先将b转为字符串"undefined"，然后然后再操作）')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("168.23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印结果：168  （因为是先将c转为字符串"168.23"，然后然后再操作）')]),t._v("\n")])])]),s("p",[t._v("（4）带两个参数时，表示进制转换。")]),t._v(" "),s("h3",{attrs:{id:"parsefloat-：字符串-浮点数（小数）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat-：字符串-浮点数（小数）"}},[t._v("#")]),t._v(" "),s("code",[t._v("parseFloat()")]),t._v("：字符串 --\x3e 浮点数（小数）")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("parseFloat()")]),t._v("是专门用来对付字符串的。")])]),t._v(" "),s("p",[t._v("parseFloat()的作用是：将字符串转换为"),s("strong",[t._v("浮点数")]),t._v("。")]),t._v(" "),s("p",[t._v("parseFloat()和 parseInt()的作用类似，不同的是，parseFloat()可以获得有效的小数部分。")]),t._v(" "),s("p",[t._v("代码举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123.456.789px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：123.456")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);