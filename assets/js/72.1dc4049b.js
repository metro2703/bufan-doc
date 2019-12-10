(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{267:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[t._v("#")]),t._v(" FLEX 布局")]),t._v(" "),a("p",[t._v("布局的传统解决方案，基于"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("盒状模型"),a("OutboundLink")],1),t._v("，依赖 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("display")]),a("OutboundLink")],1),t._v(" 属性 + "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("position")]),a("OutboundLink")],1),t._v("属性 + "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("float")]),a("OutboundLink")],1),t._v("属性，对于某些特殊布局非常不方便，比如，"),a("a",{attrs:{href:"https://css-tricks.com/centering-css-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("垂直居中"),a("OutboundLink")],1),t._v("就不容易实现。")]),t._v(" "),a("p",[t._v("2009 年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。")]),t._v(" "),a("h3",{attrs:{id:"_1-display-flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-display-flex"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("display: flex")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-690af0aeebadfcc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("每个弹性容器都有两根轴：主轴（横轴）和交叉轴（侧轴、纵轴），两轴之间成 90 度关系。注意：水平的不一定就是主轴。")]),t._v(" "),a("li",[t._v("每根轴都有起点和终点，这对于元素的对齐非常重要。")]),t._v(" "),a("li",[t._v("弹性容器中的所有子元素称为<弹性元素>，弹性元素永远沿主轴排列。")]),t._v(" "),a("li",[t._v("弹性元素也可以通过"),a("code",[t._v("display:flex")]),t._v("设置为另一个弹性容器，形成嵌套关系。因此一个元素既可以是弹性容器也可以是弹性元素。")])]),t._v(" "),a("h3",{attrs:{id:"_2-flex-属性分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-属性分类"}},[t._v("#")]),t._v(" 2. flex 属性分类")]),t._v(" "),a("ol",[a("li",[t._v("容器属性\n"),a("ul",[a("li",[t._v("flex-flow")]),t._v(" "),a("li",[t._v("flex-direction")]),t._v(" "),a("li",[t._v("flex-wrap")]),t._v(" "),a("li",[t._v("justify-content")]),t._v(" "),a("li",[t._v("align-items")]),t._v(" "),a("li",[t._v("align-content")])])]),t._v(" "),a("li",[t._v("弹性元素属性\n"),a("ul",[a("li",[t._v("order")]),t._v(" "),a("li",[t._v("flex-grow")]),t._v(" "),a("li",[t._v("flex-shrink")]),t._v(" "),a("li",[t._v("flex-basis")]),t._v(" "),a("li",[t._v("flex")]),t._v(" "),a("li",[t._v("align-self")])])])]),t._v(" "),a("h3",{attrs:{id:"具体属性介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体属性介绍"}},[t._v("#")]),t._v(" 具体属性介绍")]),t._v(" "),a("h4",{attrs:{id:"jusitify-content-主轴排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jusitify-content-主轴排列"}},[t._v("#")]),t._v(" "),a("code",[t._v("jusitify-content")]),t._v(" 主轴排列")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(".box{ justify-content:flex-start | flex-end | center | space-between | space-around | space-evenly(实验属性); }\nflex-start（默认值）：左对齐 flex-end：右对齐 center： 居中 space-between：两端对齐，项目之间的间隔都相等。\nspace-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。\nspace-evenly：均匀排列每个元素，每个元素之间的间隔相等\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-b751c63f5ed56e8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"align-items-交叉轴排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-items-交叉轴排列"}},[t._v("#")]),t._v(" "),a("code",[t._v("align-items")]),t._v(" 交叉轴排列")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-3e20a21fcf8cbb95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"align-self-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-self-的作用"}},[t._v("#")]),t._v(" "),a("code",[t._v("align-self")]),t._v(" 的作用")]),t._v(" "),a("p",[a("code",[t._v("align-self")]),t._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[t._v("align-items")]),t._v("属性。默认值为"),a("code",[t._v("auto")]),t._v("，表示继承父元素的"),a("code",[t._v("align-items")]),t._v("属性，如果没有父元素，则等同于"),a("code",[t._v("stretch")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-3fed00ec6e494081.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"flex-wrap-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap-的作用"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex-wrap")]),t._v(" 的作用")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowarp | wrap | wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nnowrap（默认值）：不换行\nwrap：换行，第一行在上方\nwrap-reverse：换行，第一行在下方\n")])])]),a("hr"),t._v(" "),a("h4",{attrs:{id:"align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[t._v("#")]),t._v(" "),a("code",[t._v("align-content")])]),t._v(" "),a("p",[a("code",[t._v("align-content")]),t._v("属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stretch | flex-start | flex-end | center | space-between | space-around | space-evenly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-a5306d77890864a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"flex-direction-的使用-及-align-items-方向问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction-的使用-及-align-items-方向问题"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex-direction")]),t._v(" 的使用 及 "),a("code",[t._v("align-items")]),t._v(" 方向问题")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrow（默认值）：主轴为水平方向，起点在左端。\nrow-reverse：主轴为水平方向，起点在右端。\ncolumn：主轴为垂直方向，起点在上沿。\ncolumn-reverse：主轴为垂直方向，起点在下沿。\n注意： flex-direction 改为垂直方向时，jusitify控制垂直方向，align控制水平方向\n")])])]),a("hr"),t._v(" "),a("h4",{attrs:{id:"复合属性-flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合属性-flex-flow"}},[t._v("#")]),t._v(" 复合属性: "),a("code",[t._v("flex-flow")])]),t._v(" "),a("p",[t._v("语法："),a("code",[t._v("flex-flow = flex-drection + flex-wrap")]),t._v("\n例如："),a("code",[t._v("flex-flow: row nowrap;")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("下面的属性都是加在子元素上面的，包括上面的 align-self 属性")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"order-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-的使用"}},[t._v("#")]),t._v(" "),a("code",[t._v("order")]),t._v(" 的使用")]),t._v(" "),a("p",[a("code",[t._v("order")]),t._v(" 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-068e2cb83d42f578.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"flex-grow属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex-grow属性")])]),t._v(" "),a("p",[a("code",[t._v("flex-grow")]),t._v("属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。无多余宽度时，flex-grow 无效。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 0 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")]),t._v(" "),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-2c252cc4ff832314.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"flex-shrink属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex-shrink")]),t._v("属性")]),t._v(" "),a("p",[a("code",[t._v("flex-shrink")]),t._v("属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。如果一个项目的"),a("code",[t._v("flex-shrink")]),t._v("属性为 0，其他项目都为 1，则空间不足时，前者不缩小。负值对该属性无效")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-01a42d3071fa5dcd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),a("p",[t._v("关于元素的收缩的计算方法："),a("a",{attrs:{href:"https://www.cnblogs.com/qcloud1001/p/9848619.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情请参见"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"flex-basis属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex-basis")]),t._v("属性")]),t._v(" "),a("p",[a("code",[t._v("flex-basis")]),t._v("属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <length> | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default auto */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间")]),t._v(" "),a("h4",{attrs:{id:"flex属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("flex")]),t._v("属性")]),t._v(" "),a("p",[t._v("它是"),a("code",[t._v("flex-grow, flex-shrink")]),t._v(" 和 "),a("code",[t._v("flex-basis")]),t._v("的简写，默认值为 0 1 auto。后两个属性可选")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ < "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-grow"')]),t._v(" > < "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-shrink"')]),t._v(" >? || < "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-basis"')]),t._v(" > ]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。\n建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值")]),t._v(" "),a("p",[t._v("除了以上两种取值方式外，"),a("code",[t._v("flex")]),t._v("后面跟其它值的情况：")]),t._v(" "),a("ul",[a("li",[t._v("当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item-1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item-1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item-2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item-1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，flex-basis 取 0%，如下是等同的：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1，如下是等同的：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"calc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calc"}},[t._v("#")]),t._v(" calc")]),t._v(" "),a("p",[a("code",[t._v("calc(expression)")]),t._v(" 函数用于动态计算长度值")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("expression")]),t._v(" 必须，一个数学表达式，结果将采用运算后的返回值。")]),t._v(" "),a("li",[t._v("需要注意的是，运算符前后都需要保留一个空格，例如："),a("code",[t._v("width: calc(100% - 10px)")])]),t._v(" "),a("li",[t._v("任何长度值都可以使用"),a("code",[t._v("calc()")]),t._v("函数进行计算")]),t._v(" "),a("li",[a("code",[t._v("calc()")]),t._v('函数支持 "+", "-", "*", "/" 运算')]),t._v(" "),a("li",[a("code",[t._v("calc()")]),t._v("函数使用标准的数学运算优先级规则")])])])}),[],!1,null,null,null);s.default=n.exports}}]);