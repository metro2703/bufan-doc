(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{351:function(t,e,s){"use strict";s.r(e);var v=s(2),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"扩充知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩充知识"}},[t._v("#")]),t._v(" 扩充知识")]),t._v(" "),s("p",[s("strong",[t._v("物理像素(physical pixel)：")]),t._v("\n物理像素又被称为设备像素，他是显示设备中一个最微小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。")]),t._v(" "),s("p",[s("strong",[t._v("设备独立像素(density-independent pixel)：")]),t._v("\n设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说 CSS 像素)，然后由相关系统转换为物理像素。")]),t._v(" "),s("p",[s("strong",[t._v("CSS 像素：")]),t._v("\nCSS 像素是一个抽像的单位，主要使用在浏览器上，用来精确度量 Web 页面上的内容。一般情况之下，CSS 像素称为与设备无关的像素(device-independent pixel)，简称 DIPs。")]),t._v(" "),s("p",[s("strong",[t._v("屏幕密度：")]),t._v("\n屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。")]),t._v(" "),s("p",[s("strong",[t._v("设备像素比(device pixel ratio)：")]),t._v("\n设备像素比简称为 dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("设备像素比 ＝ 物理像素 / 设备独立像素\n")])])]),s("p",[t._v("在 JavaScript 中，可以通过"),s("code",[t._v("window.devicePixelRatio")]),t._v("获取到当前设备的 dpr。而在 CSS 中，可以通过"),s("code",[t._v("-webkit-device-pixel-ratio")]),t._v("，"),s("code",[t._v("-webkit-min-device-pixel-ratio")]),t._v("和 "),s("code",[t._v("-webkit-max-device-pixel-ratio")]),t._v("进行媒体查询，对不同 dpr 的设备，做一些样式适配(这里只针对 webkit 内核的浏览器和 webview)。")]),t._v(" "),s("p",[s("strong",[t._v("dip 或 dp,（device independent pixels，设备独立像素）与屏幕密度有关")]),t._v("\ndip 可以用来辅助区分视网膜设备还是非视网膜设备。缩合上述的几个概念，用一张图来解释：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6784887-3ec0f6dcdc72f6c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),t._v(" "),s("p",[t._v("众所周知，iPhone6 的设备宽度和高度为 375pt _ 667pt,可以理解为设备的独立像素；而其 dpr 为 2，根据上面公式，我们可以很轻松得知其物理像素为 750pt _ 1334pt。")]),t._v(" "),s("p",[s("strong",[t._v("http-server 的命令")])]),t._v(" "),s("p",[s("code",[t._v("-p")]),t._v("或"),s("code",[t._v("--port")]),t._v("要使用的端口（默认为 8080）")]),t._v(" "),s("p",[s("code",[t._v("-a")]),t._v(" 要使用的地址（默认为 0.0.0.0）")]),t._v(" "),s("p",[s("code",[t._v("-d")]),t._v("显示目录列表（默认为"),s("code",[t._v("true")]),t._v("）")]),t._v(" "),s("p",[s("code",[t._v("-i")]),t._v("显示 autoIndex（默认为"),s("code",[t._v("true")]),t._v("）")]),t._v(" "),s("p",[s("code",[t._v("-g")]),t._v("或者"),s("code",[t._v("--gzip")]),t._v("当启用（默认为"),s("code",[t._v("false")]),t._v("）时，它将"),s("code",[t._v("./public/some-file.js.gz")]),t._v("代替"),s("code",[t._v("./public/some-file.js")]),t._v("当文件的 gzip 压缩版本存在且请求接受 gzip 编码时。如果 brotli 也启用，它将尝试首先服务 brotli。")]),t._v(" "),s("p",[s("code",[t._v("-b")]),t._v("或者"),s("code",[t._v("--brotli")]),t._v("当启用（默认为"),s("code",[t._v("false")]),t._v("）时，它将"),s("code",[t._v("./public/some-file.js.br")]),t._v("代替"),s("code",[t._v("./public/some-file.js")]),t._v("当文件的 brotli 压缩版本存在且请求接受"),s("code",[t._v("br")]),t._v("编码时。如果 gzip 也被启用，它将首先尝试提供 brotli。")]),t._v(" "),s("p",[s("code",[t._v("-e")]),t._v("或者"),s("code",[t._v("--ext")]),t._v("如果没有提供默认文件扩展名（默认为"),s("code",[t._v("html")]),t._v("）")]),t._v(" "),s("p",[s("code",[t._v("-s")]),t._v("或者"),s("code",[t._v("--silent")]),t._v("从输出中抑制日志消息")]),t._v(" "),s("p",[s("code",[t._v("--cors")]),t._v("通过"),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("标头启用 CORS")]),t._v(" "),s("p",[s("code",[t._v("-o [path]")]),t._v("启动服务器后打开浏览器窗口。（可选）提供要打开的 URL 路径。例如：-o / other / dir /")]),t._v(" "),s("p",[s("code",[t._v("-c")]),t._v("设置缓存控制 max-age 标头的缓存时间（以秒为单位），例如"),s("code",[t._v("-c10")]),t._v("10 秒（默认为"),s("code",[t._v("3600")]),t._v("）。要禁用缓存，请使用"),s("code",[t._v("-c-1")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("-U")]),t._v("或"),s("code",[t._v("--utc")]),t._v("在日志消息中使用 UTC 时间格式。")]),t._v(" "),s("p",[s("code",[t._v("--log-ip")]),t._v("启用客户端 IP 地址的记录（默认值:) "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("-P")]),t._v("或者将"),s("code",[t._v("--proxy")]),t._v("所有无法在本地解析的请求代理到给定的 URL。例如：-P "),s("a",{attrs:{href:"http://someurl.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://someurl.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("--username")]),t._v(" 基本身份验证的用户名[无]")]),t._v(" "),s("p",[s("code",[t._v("--password")]),t._v(" 基本身份验证密码[无]")]),t._v(" "),s("p",[s("code",[t._v("-S")]),t._v("或"),s("code",[t._v("--ssl")]),t._v("启用 https。")]),t._v(" "),s("p",[s("code",[t._v("-C")]),t._v("或"),s("code",[t._v("--cert")]),t._v("ssl cert 文件的路径（默认值:) "),s("code",[t._v("cert.pem")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("-K")]),t._v("或"),s("code",[t._v("--key")]),t._v("ssl 密钥文件的路径（默认值:) "),s("code",[t._v("key.pem")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("-r")]),t._v("或"),s("code",[t._v("--robots")]),t._v("提供/robots.txt（其内容默认为"),s("code",[t._v("User-agent: *\\nDisallow: /")]),t._v("）")]),t._v(" "),s("p",[s("code",[t._v("-h")]),t._v("或"),s("code",[t._v("--help")]),t._v("打印此列表并退出。")]),t._v(" "),s("p",[s("strong",[t._v("可以监听本地文件变更的方式：")])]),t._v(" "),s("p",[t._v("npm install -g live-server "),s("a",{attrs:{href:"https://github.com/tapio/live-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情请看"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("打开服务窗口执行命令： live-server")]),t._v(" "),s("p",[t._v("这将自动启动默认浏览器。当您对任何文件进行更改时，浏览器将重新加载页面 - 除非它是一个 CSS 文件，在这种情况下应用更改而不重新加载。")]),t._v(" "),s("p",[t._v("命令行参数：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--port=NUMBER")]),t._v(" - 选择要使用的端口，默认值：PORT env var 或 8080")]),t._v(" "),s("li",[s("code",[t._v("--host=ADDRESS")]),t._v(" - 选择要绑定的主机地址，默认值：IP env var 或 0.0.0.0（“任何地址”）")]),t._v(" "),s("li",[s("code",[t._v("--no-browser")]),t._v(" - 禁止自动 Web 浏览器启动")]),t._v(" "),s("li",[s("code",[t._v("--browser=BROWSER")]),t._v(" - 指定要使用的浏览器而不是系统默认值")]),t._v(" "),s("li",[s("code",[t._v("--quiet | -q")]),t._v(" - 抑制记录")]),t._v(" "),s("li",[s("code",[t._v("--verbose | -V")]),t._v(" - 更多日志记录（记录所有请求，显示所有侦听 IPv4 接口等）")]),t._v(" "),s("li",[s("code",[t._v("--open=PATH")]),t._v(" - 启动浏览器到 PATH 而不是服务器根目录")]),t._v(" "),s("li",[s("code",[t._v("--watch=PATH")]),t._v(" - 以逗号分隔的路径串，专门监视更改（默认：监视所有内容）")]),t._v(" "),s("li",[s("code",[t._v("--ignore=PATH")]),t._v("- 要忽略的逗号分隔的路径字符串（"),s("a",{attrs:{href:"https://github.com/es128/anymatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("任意匹配的"),s("OutboundLink")],1),t._v("定义）")]),t._v(" "),s("li",[s("code",[t._v("--ignorePattern=RGXP")]),t._v("- 正则表达要忽略的文件（即"),s("code",[t._v(".*\\.jade")]),t._v("）（"),s("strong",[t._v("弃用")]),t._v("赞成"),s("code",[t._v("--ignore")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("--no-css-inject")]),t._v(" - 重新加载 CSS 更改页面，而不是注入更改的 CSS")]),t._v(" "),s("li",[s("code",[t._v("--middleware=PATH")]),t._v(" - 导出要添加的中间件函数的.js 文件的路径; 可以是没有路径的名称，也不是扩展名来引用"),s("code",[t._v("middleware")]),t._v("文件夹中的捆绑中间件")]),t._v(" "),s("li",[s("code",[t._v("--entry-file=PATH")]),t._v(" - 提供此文件（服务器根相对）代替丢失的文件（对单页应用程序很有用）")]),t._v(" "),s("li",[s("code",[t._v("--mount=ROUTE:PATH")]),t._v(" - 在定义的路径下提供路径内容（可能有多个定义）")]),t._v(" "),s("li",[s("code",[t._v("--spa")]),t._v(" - 将来自/ abc 的请求转换为/＃/ abc（方便单页应用）")]),t._v(" "),s("li",[s("code",[t._v("--wait=MILLISECONDS")]),t._v(" - （默认为 100 毫秒）在重新加载之前等待所有更改")]),t._v(" "),s("li",[s("code",[t._v("--htpasswd=PATH")]),t._v(" - 启用 http-auth 期望位于 PATH 的 htpasswd 文件")]),t._v(" "),s("li",[s("code",[t._v("--cors")]),t._v(" - 为任何来源启用 CORS（反映请求来源，支持带凭证的请求）")]),t._v(" "),s("li",[s("code",[t._v("--https=PATH")]),t._v(" - PATH 到 HTTPS 配置模块")]),t._v(" "),s("li",[s("code",[t._v("--https-module=MODULE_NAME")]),t._v("- 自定义 HTTPS 模块（例如"),s("code",[t._v("spdy")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("--proxy=ROUTE:URL")]),t._v(" - 将所有 ROUTE 请求代理到 URL")]),t._v(" "),s("li",[s("code",[t._v("--help | -h")]),t._v(" - 显示简洁用法提示并退出")]),t._v(" "),s("li",[s("code",[t._v("--version | -v")]),t._v(" - 显示版本并退出")])]),t._v(" "),s("p",[t._v("默认选项：")]),t._v(" "),s("p",[t._v("如果文件"),s("code",[t._v("~/.live-server.json")]),t._v("存在，它将被加载并在命令行中用作 live-server 的默认选项。有关选项名称，请参阅“节点用法”。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8181")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置服务器端口。默认为8080.")]),t._v("\n\thost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置要绑定的地址。默认为0.0.0.0或process.env.IP。")]),t._v("\n\troot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置正在服务的根目录。默认为cwd。")]),t._v("\n\topen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果为false，则默认情况下不会加载浏览器。")]),t._v("\n\tignore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scss,my/templates"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//逗号分隔的字符串，用于忽略")]),t._v("\n\tfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置后，为每个404（对单页应用程序有用）提供此文件（服务器根目录）")]),t._v("\n\twait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在重新加载之前等待所有更改。默认为0秒。")]),t._v("\n\tmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/components"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./node_modules"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将目录挂载到路由。")]),t._v("\n\tlogLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 = errors only, 1 = some, 2 = lots")]),t._v("\n\tmiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//采用一系列与Connect兼容的中间件注入服务器中间件堆栈")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nliveServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);