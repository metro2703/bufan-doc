(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{283:function(t,e,s){"use strict";s.r(e);var a=s(2),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"从-vuepress-0-x-迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-vuepress-0-x-迁移"}},[t._v("#")]),t._v(" 从 VuePress 0.x 迁移")]),t._v(" "),s("h2",{attrs:{id:"站点配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点配置"}},[t._v("#")]),t._v(" 站点配置")]),t._v(" "),s("h3",{attrs:{id:"ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ga"}},[t._v("#")]),t._v(" ga "),s("Badge",{attrs:{text:"替换"}})],1),t._v(" "),s("p",[t._v("GA 已经被分离为一个单独的插件 "),s("router-link",{attrs:{to:"/plugin/official/plugin-google-analytics.html"}},[t._v("@vuepress/plugin-google-analytics")]),t._v("。")],1),t._v(" "),s("UpgradePath",{attrs:{title:"UPGRADE"}},[s("ol",[s("li",[t._v("安装 "),s("code",[t._v("@vuepress/plugin-google-analytics")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-google-analytics@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("更新 "),s("code",[t._v("vuepress/config.js")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-  ga: 'UA-12345678-9'\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+  plugins: [\n+    ['@vuepress/google-analytics', {\n+      ga: 'UA-12345678-9'\n+    }]\n+ ]\n")]),t._v("}\n")])])])]),s("h3",{attrs:{id:"markdown-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config"}},[t._v("#")]),t._v(" markdown.config "),s("Badge",{attrs:{text:"重命名"}})],1),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("extendMarkdown")]),t._v("：")]),t._v(" "),s("UpgradePath",{attrs:{title:"UPGRADE"}},[s("p",[t._v("更新 "),s("code",[t._v("vuepress/config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[t._v("// vuepress/config.js\nmodule.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-  markdown: {\n-    config(md) { /* ... */ }\n-  },\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+  extendMarkdown(md) { /* ... */ }\n")]),t._v("}\n")])])])]),s("h3",{attrs:{id:"serviceworker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker"}},[t._v("#")]),t._v(" serviceWorker "),s("Badge",{attrs:{text:"替换"}})],1),t._v(" "),s("p",[t._v("Service Worker 相关的功能已经被分离为一个单独的插件 "),s("router-link",{attrs:{to:"/plugin/official/plugin-pwa.html"}},[t._v("@vuepress/plugin-pwa")]),t._v("。")],1),t._v(" "),s("UpgradePath",{attrs:{title:"UPGRADE"}},[s("p",[t._v("参考: "),s("router-link",{attrs:{to:"/plugin/official/plugin-pwa.html#从-0-x-迁移"}},[t._v("@vuepress/plugin-pwa > 从 0.x 迁移")])],1)]),s("h2",{attrs:{id:"默认主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认主题配置"}},[t._v("#")]),t._v(" 默认主题配置")]),t._v(" "),s("h3",{attrs:{id:"vuepress-override-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl"}},[t._v("#")]),t._v(" "),s("code",[t._v(".vuepress/override.styl")]),t._v(" "),s("Badge",{attrs:{text:"替换"}})],1),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v(".vuepress/styles/palette.styl")]),t._v(" 代替。")]),t._v(" "),s("UpgradePath",{attrs:{title:"UPGRADE"}},[s("p",[t._v("参考: "),s("router-link",{attrs:{to:"/config/#palette-styl"}},[t._v("Config > palette.styl")])],1)]),s("h3",{attrs:{id:"vuepress-style-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl"}},[t._v("#")]),t._v(" "),s("code",[t._v(".vuepress/style.styl")]),t._v(" "),s("Badge",{attrs:{text:"替换"}})],1),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v(".vuepress/styles/index.styl")]),t._v(" 代替。")]),t._v(" "),s("UpgradePath",{attrs:{title:"UPGRADE"}},[s("p",[t._v("参考: "),s("router-link",{attrs:{to:"/config/#index-styl"}},[t._v("Config > index.styl")])],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);