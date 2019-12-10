(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{359:function(v,e,_){"use strict";_.r(e);var t=_(2),c=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"移动端事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动端事件"}},[v._v("#")]),v._v(" 移动端事件")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("touch")]),v._v(" 只有移动端才有"),_("code",[v._v("touch")]),v._v("事件")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("touchstart：")]),v._v("当手指触碰屏幕时候发生。不管当前有多少只手指")]),v._v(" "),_("li",[_("code",[v._v("touchmove：")]),v._v("当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用 "),_("code",[v._v("event.preventDefault()")]),v._v(" 阻止默认情况的发生：阻止页面滚动")]),v._v(" "),_("li",[_("code",[v._v("touchend：")]),v._v("当手指离开屏幕时触发")]),v._v(" "),_("li",[_("code",[v._v("touchcancel：")]),v._v("系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面 alert()一个提示框，此时会触发该事件，这个事件比较少用")])]),v._v(" "),_("p",[v._v("触摸事件的响应顺序:\n"),_("code",[v._v("ontouchstart > ontouchmove > ontouchend > onclick 300ms延时")])]),v._v(" "),_("p",[_("code",[v._v("Click")]),v._v(" 事件在手机端会出现大概 300ms 的延迟，实际的执行延迟要比这个大，因为浏览器的内核运行也需要消耗时间。延迟执行的原因是苹果最早在手机上做了一个事件，当双击页面的时候，页面放大。也就是说，在点击之后的 300ms 之内，如果没有再次出发点击，则认为是单击事件，如果再次触发则认为 是双击事件。")]),v._v(" "),_("p",[v._v("但目前，一般在手机 web 中，不允许缩放，也就没有双击事件，但是 click 延迟执行会影响用户体验")]),v._v(" "),_("p",[_("em",[v._v("谷歌判断点击的条件是: 长按压"),_("code",[v._v("long press")]),v._v("的时间阈值为 700ms, 超过 700ms 就不再触发"),_("code",[v._v("click")]),v._v("事件")])]),v._v(" "),_("p",[v._v("去除延迟: 有文档里面提到在 2014 年的 Chrome 32 版本已经把这个延迟去掉了，如果有一个 meta 标签：")]),v._v(" "),_("p",[_("code",[v._v('<meta name="viewport" content="width=device-width">')])]),v._v(" "),_("p",[v._v("即把 viewport 设置成设备的实际像素，那么就不会有这 300ms 的延迟，并且这个举动受到了 IE/Firefox/Safari(IOS 9.3)的支持，也就是说现在的移动端开发可以不用顾虑 click 会比较迟钝的问题")]),v._v(" "),_("p",[v._v("如果设置 initial-scale=1.0，在 chrome 上是可以生效，但是 Safari 不会：")]),v._v(" "),_("p",[_("code",[v._v('<meta name="viewport" content="initial-scale=1.0">')])]),v._v(" "),_("p",[v._v("还有第三种办法就是设置 CSS:")]),v._v(" "),_("p",[_("code",[v._v("html{touch-action: manipulation;}")])]),v._v(" "),_("h2",{attrs:{id:"touch事件对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#touch事件对象"}},[v._v("#")]),v._v(" "),_("code",[v._v("touch")]),v._v("事件对象")]),v._v(" "),_("p",[v._v("每个 "),_("code",[v._v("touch")]),v._v(" 事件对象包含的属性如下:")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("clientX：")]),v._v(" 触摸目标在视口中的 x 坐标")]),v._v(" "),_("li",[_("code",[v._v("clientY：")]),v._v(" 触摸目标在视口中的 y 坐标")]),v._v(" "),_("li",[_("code",[v._v("identifier：")]),v._v(" 标识触摸的唯一 ID")]),v._v(" "),_("li",[_("code",[v._v("pageX：")]),v._v(" 触摸目标在页面中的 x 坐标")]),v._v(" "),_("li",[_("code",[v._v("pageY：")]),v._v(" 触摸目标在页面中的 y 坐标")]),v._v(" "),_("li",[_("code",[v._v("screenX：")]),v._v(" 触摸目标在屏幕中的 x 坐标")]),v._v(" "),_("li",[_("code",[v._v("screenY：")]),v._v(" 触摸目标在屏幕中的 y 坐标")]),v._v(" "),_("li",[_("code",[v._v("target：")]),v._v(" 触摸的 DOM 节点目标")]),v._v(" "),_("li",[_("code",[v._v("touches：")]),v._v(" 当前位于屏幕上的所有手指的信息列表")]),v._v(" "),_("li",[_("code",[v._v("targetTouches：")]),v._v(" 位于当前 DOM 元素上手指的信息列表")]),v._v(" "),_("li",[_("code",[v._v("changedTouches：")]),v._v(" 涉及当前事件手指的列表")])])])}),[],!1,null,null,null);e.default=c.exports}}]);