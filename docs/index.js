!function(e){function t(t){for(var o,c,a=t[0],n=t[1],s=0,d=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);for(l&&l(t);d.length;)d.shift()()}var o={},i={0:0};function c(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,c){o=i[e]=[t,c]}));t.push(o[2]=a);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var l=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(d);var o=i[e];if(0!==o){if(o){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,o[1](l)}i[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(o,i,function(t){return e[t]}.bind(null,i));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],n=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=n;c(c.s=3)}([function(e,t,o){var i,c;i=[o,o(9),o(10),o(11),o(12),o(2)],void 0===(c=function(e,t,o,i,c,a){"use strict";let n=[{title:"首页",icon:"icon-shouye",id:"home",hashUrl:"#",sub:[]},{title:"影视",icon:"icon-dianying",id:"nav",hashUrl:"#nav?class=1",sub:t},{title:"学习",icon:"icon-xuexizhongxin",id:"nav",hashUrl:"#nav?class=2",sub:c},{title:"生活",icon:"icon-tubiaozhizuomobanyihuifu-",id:"nav",hashUrl:"#nav?class=3",sub:o},{title:"工具",icon:"icon-tool",id:"nav",hashUrl:"#nav?class=4",sub:i}],s=[],l={};let d=function(){let e=new Map,t=a.getLocal();for(const o in n){const i=n[o].sub;let c=n[o].title;const a=t[c];"首页"!==c&&(s.push(c),l[c]=[]);for(let t=0;t<i.length;t++){const o=i[t].item;a&&a[i[t].title]&&o.push(...a[i[t].title]);for(let t=0;t<o.length;t++){const i=o[t];let c="";Object.keys(i).forEach(e=>{i.hasOwnProperty(e)&&(c+=" "+i[e])}),e.set(i,c)}l[c].push(i[t].title)}}return e}();return console.log(n),{navData:n,index:d,subTypeList:l,typeList:s}}.apply(t,i))||(e.exports=c)},function(e,t,o){var i;void 0===(i=function(e){"use strict";var t={container:"#page-content",defaultHashPage:CONF.defaultPage,baseUrl:"page/",init(){NProgress.configure({parent:"#page-content"}),this.checkURL(),$(document).on("click",'a.router[href="#"]',(function(e){e.preventDefault()})),$(window).on("hashchange",(function(){t.checkURL()}))},checkURL:function(){var e=location.href.split("#"),t="";e.length>1&&(t=e[1].split("?")[0]),""!==t?this.loadURL(t):this.loadURL(this.defaultHashPage)},loadURL:function(e){var t=this;this.baseUrl;NProgress.start(),$(t.container).html(""),o(5)(`./${e}.html`).then(i=>{$(t.container).html(i.default),o(6)(`./${e}.js`).then(e=>{!e.default||e.default(),NProgress.done()})})},getPageParam(){var e=$(this.container).data("data");if(e)return e;var t=location.href.split("?"),o=t.length>1&&t[1],i={};if(o){var c=o.split("&");if(c)for(var a=0;a<c.length;a++){var n=c[a].split("=");2==n.length&&(i[n[0]]=n[1])}}return i}};return t}.apply(t,[o]))||(e.exports=i)},function(e,t,o){var i;void 0===(i=function(e){"use strict";return{getLocal(){let e=localStorage.getItem("nav-data"),t=JSON.parse(localStorage.getItem("nav-data"));return this.data=t,e?t:{}},setLocal(e){localStorage.setItem("nav-data",e)},clearLocal(){localStorage.clear()}}}.apply(t,[o]))||(e.exports=i)},function(e,t,o){var i,c;i=[o,o(4),o(1),o(7),o(2),o(0)],void 0===(c=function(e,t,o,i,c,a){"use strict";$.fn.serializeObject=function(){var e=this.serializeArray(),t={};return $.each(e,(function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""})),t};let n=t.browseVersion();n.ie&&n.ie<11&&alert("请使用其他浏览器打开或者更高版本的IE浏览器打开。建议使用Chrome浏览器"),i(),o.init(),$("#setting").click((function(e){$(".setting").toggleClass("closed")})),$("#saveLocal").click(()=>{let e=c.getLocal(),t=$("#addForm").serializeObject();t.custom="isCustom";let o=t.subType,i=t.type;e[i]?e[i][o]||(e[i][o]=[]):(e[i]={},e[i][o]=[]),e[i][o].push(t),c.setLocal(JSON.stringify(e)),$("#addForm").find("select,input,textarea").val(""),alert("添加成功"),window.location.reload()});let{typeList:s,subTypeList:l}=a,d="";for(let e=0;e<s.length;e++){d+=`<option>${s[e]}</option>`}$("#type").html(d),$("#type").change(e=>{let t=$("#type").val(),o=l[t],i="";for(let e=0;e<o.length;e++){i+=`<option>${o[e]}</option>`}$("#subtype").html(i)}),$("#type").change()}.apply(t,i))||(e.exports=c)},function(e,t,o){var i;void 0===(i=function(e){return console.log(123),window.CONF={requireBase:["/src/","/website-navigation/"],defaultPage:"home",getEnv:function(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0?0:1},isMobile:function(){return document.body.clientWidth<=613},getWebsiteIcon(e){let t=$(e).parents("a")[0].href;e.src.indexOf("https://ico.mikelin.cn/")>=0?e.src="img/404-1.png":e.src="https://ico.mikelin.cn/"+t},browseVersion(){var e=navigator.userAgent,t={},o=e.match(/WebKit\/([\d.]+)/),i=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),c=e.match(/MSIE\s([\d\.]+)/)||e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),a=e.match(/Firefox\/([\d.]+)/),n=e.match(/Safari\/([\d.]+)/),s=e.match(/OPR\/([\d.]+)/);return o&&(t.webkit=parseFloat(o[1])),i&&(t.chrome=parseFloat(i[1])),c&&(t.ie=parseFloat(c[1])),a&&(t.firefox=parseFloat(a[1])),n&&(t.safari=parseFloat(n[1])),s&&(t.opera=parseFloat(s[1])),t}},window.CONF}.apply(t,[o]))||(e.exports=i)},function(e,t,o){var i={"./home.html":[13,3],"./nav.html":[14,4]};function c(e){if(!o.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return o.e(t[1]).then((function(){return o.t(c,7)}))}c.keys=function(){return Object.keys(i)},c.id=5,e.exports=c},function(e,t,o){var i={"./home.js":[15,1],"./nav.js":[16,2]};function c(e){if(!o.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return o.e(t[1]).then((function(){return o.t(c,7)}))}c.keys=function(){return Object.keys(i)},c.id=6,e.exports=c},function(e,t,o){var i,c;i=[o,o(1),o(8),o(0)],void 0===(c=function(e,t,o,i){"use strict";var c=window.CONF.isMobile,a={menuClick(){$("menu").on("click",".item",(function(e){$(this).addClass("active").siblings().removeClass("active");let t=$(this).find(".item-text .iconfont"),o=$(this).find(".item-text>span")[1].innerHTML;$("#header-title").find("h1").html(o),$("#header-title").find(".iconfont").removeClass().addClass(t.attr("class")),c()&&$("menu").toggleClass("active")}))},subMenuClick(){$("#menu").on("click",".sub-item",(function(){$(this).addClass("active").siblings().removeClass("active");let e=$(this).find(".sub-item-text").text();if($('[data-title="'+e+'"').length){let t=$('[data-title="'+e+'"')[0].offsetTop;$("html, body").animate({scrollTop:t},"500")}let t=$(this).position().top;$(this).siblings().find(".nonius").css("top",t),c()&&$("menu").toggleClass("active")}))},toogleMenu(){$(".btn-menu").on("click",(function(){$("menu").toggleClass("active")})),$(".side-mask").on("click",(function(){$("menu").removeClass("active")}))}},n={menuList(){let e=Handlebars.compile(o)(i.navData);$("#menu").html(e)}};return function(){a.menuClick(),a.subMenuClick(),c&&a.toogleMenu(),n.menuList()}}.apply(t,i))||(e.exports=c)},function(e,t){e.exports='{{#each this}}\n<div id="menu-item-{{id}}" class="item">\n  <a href="{{hashUrl}}" class="item-text zh">\n    <span class="item-icon">\n      <i class="iconfont {{icon}}"></i>\n    </span>\n    <span>{{title}}</span>\n  </a>\n  {{#if sub}}\n  <div class="item-subs">\n    <div class="item-subs-wrapper">\n      <div class="positioner">\n        <div class="nonius" style="top:0px;"></div>\n      </div>\n      {{#each sub}}\n      <div class="sub-item">\n        <div class="sub-item-text">{{title}}</div>\n      </div>\n      {{/each}}\n    </div>\n  </div>\n  {{/if}}\n</div>\n{{/each}}'},function(e){e.exports=JSON.parse('[{"title":"综合","icon":"icon-yingshi","item":[{"url":"http://www.wuhaozhan.net","icon":"http://www.wuhaozhan.net/favicon.ico","name":"电影5号站","desc":"影视搜索引擎","disabled":false},{"url":"https://neets.cc/","icon":"https://neets.cc/favicon.ico","name":"Neets影视","desc":"一站式搜索互联网上相关的视频内容","disabled":false},{"url":"http://www.22tu.cc/","icon":"http://www.22tu.cc/favicon.ico","name":"迅播影院","desc":"提供最新最快电影资讯，迅雷看看电影点播以及迅雷电影下载，同时提供,西瓜,先锋,吉吉,百度影音高速观看！","disabled":false},{"url":"http://www.tntdy3.vip/","icon":"http://www.tntdy3.vip/favicon.ico","name":"TNT影视","desc":"TNT影视-高清电影,电视剧,动漫,综艺等视频在线观看","disabled":false},{"url":"https://www.wayoutv.com/","icon":"https://www.wayoutv.com/favicon.ico","name":"哇有视频","desc":"哇有视频提供全网最新最快的影视在线播放","disabled":false},{"url":"http://v.778qs.com/","icon":"http://v.778qs.com/favicon.ico","name":"暖光影视","desc":"腐剧,腐剧网,暖光腐剧网,耽美剧,上瘾,天府泰剧 - 暖光影视","disabled":true},{"url":"https://www.dydog.org/","icon":"https://www.dydog.org/template/stui_tpl_A004/statics/img/favicon.ico","name":"狗带TV","desc":"为您提供最新好看的电影，在线播放","disabled":false},{"url":"http://ttyyy.vip/index.html","icon":"http://ttyyy.vip/favicon.ico","name":"天天云影","desc":"天天云影原云影院,天天看影为您提供手机电脑免插件软件即可在线点2018最新的高清电影,高清电视请记住我们的网址(www.TTYYY.vip)","disabled":false},{"url":"http://www.kkkkmao.com/","icon":"http://www.kkkkmao.com/favicon.ico","name":"4K屋","desc":"提供最全的最新电视剧，2019最新电影，韩国电视剧、香港TVB电视剧、日本动漫、日剧、美剧、综艺的在线观看和剧集交流场所","disabled":true},{"url":"http://www.qishidy.net/","icon":"http://www.qishidy.net/favicon.ico","name":"骑士影院","desc":"提供全网视频支持电脑和手机在线观看。","disabled":false},{"url":"https://www.007ts.co/","icon":"https://ae01.alicdn.com/kf/HTB15Y9eX2vsK1Rjy0Fi762wtXXaa.png","name":"零零七影视","desc":"免VIP抢先观看最新好看的电影和电视剧","disabled":false},{"url":"https://www.halihali.vip/","icon":"https://www.halihali.vip/favicon.ico","name":"哈哩哈哩(H站)","desc":"哈哩哈哩爱不离手的视频放映厅，二次元暖暖的综合视频站，拥有最新最全的电影,电视剧,综艺,动漫资源视频,全站无广告播放,完美支持电脑手机观看，赶快加入哈哩哈哩。","disabled":false},{"url":"https://www.yeziyy.com/","icon":"https://www.yeziyy.com/favicon.ico","name":"椰子影院","desc":"免VIP看全网最新最全视频！","disabled":true},{"url":"http://www.moonbt.com/","icon":"http://www.moonbt.com/favicon.ico","name":"月影点播网","desc":"电影|剧集|综艺|月影动漫在线看","disabled":true},{"url":"https://www.gqyys.com/","icon":"http://gaoqing.la/wp-content/themes/Loostrive/images/favicon.ico","name":"高清云影视","desc":"天天云影院,高清云影视,左手吃斋影视","disabled":true},{"url":"https://www.187k.cn/","icon":"https://www.187k.cn/statics/img/favicon.ico","name":"看片网","desc":"骑士电影-YY4480高清影院-苏格影院-天龙高清影院-看片网","disabled":true},{"url":"http://www.beiwo888.com/","icon":"http://www.beiwo888.com/favicon.ico","name":"被窝电影","desc":"被窝电影网 被窝电影 beiwody--好电影就在被窝电影网","disabled":false}]},{"title":"动漫","icon":"icon-yingshi","item":[{"url":"http://www.nicotv.me/","icon":"http://img.kingsnug.cn/favicon.ico","name":"妮可","desc":"宅男腐女们最喜爱的动漫交流互动平台","disabled":false},{"url":"http://www.kisssub.org/","icon":"http://www.kisssub.org/favicon.ico","name":"爱恋动漫BT下载","desc":"爱恋BT分享站，动画～漫画～游戏～动漫音乐～片源（RAW）～各类ACG资源聚集地","disabled":false},{"url":"http://www.acfun.cn/","icon":"http://www.acfun.cn/favicon.ico","name":"A站","desc":"AcFun是一家弹幕视频网站，致力于为每一个人带来欢乐","disabled":false},{"url":"https://www.bilibili.com/","icon":"https://www.bilibili.com/favicon.ico","name":"B站","desc":"bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围。","disabled":false},{"url":"http://www.dilidili.name/","icon":"http://www.dilidili.name/favicon.ico","name":"D站","desc":"嘀哩嘀哩会筛选经典作品并将新作经典轮番推荐，为您带来一场美妙的动漫盛宴","disabled":true},{"url":"https://www.missevan.com/","icon":"https://www.missevan.com/images/index/favicon.ico","name":"M站","desc":"M站(猫耳FM)是第一家弹幕音图站,同时也是中国声优基地,在这里可以听电台,音乐,翻唱,小说和广播剧,用二次元声音连接三次元.","disabled":false},{"url":"https://mikanani.me/","icon":"https://mikanani.me/Images/favicon.ico?v=2","name":"蜜柑计划","desc":"新一代的动漫下载站","disabled":false},{"url":"https://www.36dm.com/","icon":"https://www.36dm.com/favicon.ico?v=2","name":"简单动漫","desc":"BT下载|动漫下载|动画|漫画","disabled":false},{"url":"http://www.ikanfan.com/","icon":"http://www.ikanfan.com/favicon.ico","name":"爱看番","desc":"小而美的动漫追番网站","disabled":false}]},{"title":"国外","icon":"icon-yingshi","item":[{"url":"http://kmeiju7.com/","icon":"http://kmeiju7.com/favicon.ico","name":"AG美剧","desc":"在线免费观看高清美剧的中文美剧网，播放速度快，热门美剧第一时间更新，美剧迷们最喜欢的中文字幕在线免费观看美剧网站。","disabled":false},{"url":"http://www.ttmeiju.me/","icon":"http://www.ttmeiju.me/favicon.ico","name":"天天美剧","desc":"您的高清美剧下载中心,美剧爱好者的天堂","disabled":false},{"url":"https://www.meijutt.com/","icon":"https://www.meijutt.com/favicon.ico","name":"美剧天堂","desc":"好看的美剧,美剧下载,美剧在线观看,美剧网","disabled":true},{"url":"https://fantopia.club/","icon":"https://fantopia.club/wp-content/uploads/2018/05/cropped-fan-icon-192x192.png","name":"翻托邦字幕组","desc":"各种冷番高分剧独家制作。我们不求最快最好，但一定做到问心无愧！","disabled":false},{"url":"https://www.icezmz.com/","icon":"https://www.icezmz.com/favicon.ico","name":"冰冰字幕组","desc":"最新英剧下载 英剧字幕 英剧在线观看","disabled":true},{"url":"http://sskzmz.com/","icon":"http://sskzmz.com/favicon.ico","name":"SSK字幕组","desc":"SSK字幕组是最好的字幕组之一","disabled":true},{"url":"http://dbfansub.com/","icon":"http://dbfansub.com/uploads/2012/12/favicon.ico","name":"电波字幕组","desc":"诚心诚译，带给您最优质的英文影视字幕。","disabled":false},{"url":"http://www.orangesub.com/","icon":"http://www.orangesub.com/static/img/Orange-logo%40300.png","name":"Orange字幕组","desc":"中文电影字幕下载网站","disabled":false},{"url":"http://oabt004.com/","icon":"http://oabt004.com/favicon.ico","name":"磁力下载站","desc":"最新美剧下载,日剧下载,电影下载,韩剧下载","disabled":false},{"url":"http://www.zimuxia.cn/","icon":"http://www.zimuxia.cn/wp-content/uploads/2016/03/cropped-logo2-32x32.png","name":"FIX字幕侠","desc":"做国内最好的字幕组","disabled":false},{"url":"https://www.hanfan.cc/hanju/","icon":"https://www.hanfan.cc/favicon.ico","name":"韩饭网","desc":"提供最新韩剧下载，韩剧排行榜，热门韩剧资讯，剧情介绍，幕后花絮等精彩内容。","disabled":false},{"url":"http://www.hanju.cc/","icon":"http://www.hanju.cc/favicon.ico","name":"韩剧网","desc":"H9T韩剧网是最大的韩剧资料馆","disabled":false},{"url":"http://hxly9.com/forum.php","icon":"http://hxly9.com/favicon.ico","name":"幻想乐园字幕组","desc":"幻想乐园字幕组是为大家免费提供韩国综艺,韩剧,电影的中文字幕,原创翻译最新的韩国娱乐新闻","disabled":false},{"url":"http://www.zzrbl.com/","icon":"http://www.zzrbl.com/favicon.ico","name":"猪猪日部落","desc":"日剧综合站","disabled":false},{"url":"http://www.hideystudio.com/drama/","icon":"http://www.hideystudio.com/favicon.ico","name":"隐社","desc":"日剧综合站","disabled":false},{"url":"http://www.wwmulu.com/","icon":"http://www.wwmulu.com/favicon.ico","name":"91日剧","desc":"高清日剧下载|日剧排行榜|日剧推荐","disabled":false},{"url":"http://www.tokyonothot.com/portal.php","icon":"http://www.tokyonothot.com/favicon.ico","name":"东京不够热","desc":"日剧字幕组","disabled":true}]},{"title":"下载","icon":"icon-yingshi","item":[{"url":"https://www.dytt8.net/","icon":"https://www.dytt8.net/favicon.ico","name":"电影天堂","desc":"免费电影下载,电影下载,最新电影","disabled":false},{"url":"http://gaoqing.la/","icon":"http://gaoqing.la/favicon.ico","name":"中国高清网","desc":"每天关注提供720p高清、1080p高清、蓝光原盘高清、高清3d高清、高清mv最新热门bt种子磁力链迅雷下载网站，是下载了解高清电影天堂！","disabled":false},{"url":"https://www.xiaohx.org/","icon":"https://www.xiaohx.org/static/img/favicon.ico","name":"小浣熊 · 下载站","desc":"小浣熊,小浣熊下载站,电影下载,电视剧下载,动漫下载,游戏下载,音乐下载,PDF图书下载","disabled":false},{"url":"http://www.gscq.me/","icon":"http://www.gscq.me/view/img/favicon.ico","name":"乐赏 GSCQ.ME","desc":"国内原创BT影视动漫以及游戏资源社区。","disabled":false},{"url":"https://www.ygdy8.com/","icon":"https://www.ygdy8.com/favicon.ico","name":"阳光电影","desc":"免费电影下载,电影下载,最新电影。","disabled":true},{"url":"http://www.languang.co/","icon":"http://www.languang.co/wp-content/uploads/2017/05/caf5e0ffa8ae62.ico","name":"蓝光网","desc":"分享高清，给爱电影的人！","disabled":false},{"url":"http://www.yyets.com/","icon":"http://www.yyets.com/favicon.ico","name":"人人影视","desc":"美剧下载,字幕下载,日剧下载,高清电影下载,韩剧下载,美剧时间表,字幕组","disabled":false},{"url":"http://zhuixinfan.com/main.php","icon":"http://zhuixinfan.com/favicon.ico","name":"追新番日剧站","desc":"美剧下载,字幕下载,日剧下载,高清电影下载,韩剧下载,美剧时间表,字幕组","disabled":false}]},{"title":"其他","icon":"icon-yingshi","item":[{"url":"http://www.mvcat.com/","icon":"http://www.mvcat.com/img/logo_appicon.png","name":"电影推荐 · MVCAT","desc":"电影推荐,经典电影,好看电影,好电影,必看电影,电影网,影猫,影音猫","disabled":false},{"url":"http://nettv.live/","icon":"http://nettv.live/favicon.ico","name":"NetTV.Live全球网络电视在线直播","desc":"NetTV.Live全球网络电视直播网是一个可以在线收看来自全球200多个国家和地区的电视直播服务平台，帮助异乡的朋友随时了解家乡的变化！致力于打造全网最全的网络电视直播服务平台。","disabled":false},{"url":"http://www.qmaile.com/","icon":"http://www.qmaile.com/favicon.ico","name":"全民解析","desc":"vip视频在线解析 方便广大用户VIP视频服务，最新电影最新电视剧在线免费观看","disabled":false},{"url":"http://www.administrator5.com/","icon":"http://www.administrator5.com/favicon.ico","name":"无名小站","desc":"★【全能会员视频解析_视频云解析平台_视频解析云平台_无名小站解析网站】","disabled":false}]}]')},function(e){e.exports=JSON.parse('[{"title":"新闻资讯","icon":"icon-router","item":[{"tag":"科技","url":"https://www.huxiu.com/","icon":"https://www.huxiu.com/favicon.ico","name":"虎嗅","desc":"科技资讯,商业评论,明星公司,动态,宏观,趋势,创业,精选,有料,干货,有用,细节,内幕","disabled":false},{"tag":"互联网","url":"https://readhub.cn/topics","icon":"https://cdn.readhub.cn/static/assets/png/readhub_logo.95007f61.png","name":"Readhub","desc":"每天三分钟的科技新闻聚合阅读","disabled":false},{"tag":"科技","url":"https://awtmt.com/","icon":"https://awtmt.com/favicon.ico","name":"全天候科技","desc":"原创科技新媒体，致力于为用户提供专业、快速、完整的科技商业资讯，帮助投资者理解科技。","disabled":false},{"url":"https://weibo.com/u/3816118370/home?topnav=1&wvr=6","icon":"https://weibo.com/favicon.ico","name":"微博","desc":"随时随地发现新鲜事","disabled":false},{"tag":"财经","url":"http://www.caixin.com/","icon":"http://www.caixin.com/favicon.ico","name":"财新网-原创财经新媒体","desc":"财经,财经新闻,金融,商业,产经,政经,基金,改制,改革，财经网站","disabled":false},{"tag":"财经","url":"https://www.cls.cn/telegraph","icon":"https://www.cls.cn/favicon.ico","name":"财联社","desc":"提供快速、准确、权威、专业的财经资讯","disabled":false},{"tag":"财经","url":"https://xueqiu.com/","icon":"https://xueqiu.com/favicon.ico","name":"雪球","desc":"提供沪深港美股票实时行情、实战交流、实盘交易。","disabled":false},{"tag":"财经","url":"https://www.jiemian.com/","icon":"https://www.jiemian.com/favicon.ico","name":"界面新闻-只服务于独立思考的人群","desc":"中国具有影响力的原创财经新媒体，以财经、商业新闻为核心","disabled":false},{"tag":"财经","url":"http://www.ftchinese.com/","icon":"http://www.ftchinese.com/favicon.ico","name":"FT中文网 － 全球财经精粹","desc":"英国《金融时报》唯一的非英语网站，致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场、管理和科技新闻","disabled":false},{"tag":"资讯","url":"https://tophub.today/","icon":"https://tophub.today/favicon.ico","name":"今日热榜","desc":"今日热榜提供各站热点聚合：微信、今日头条、百度、知乎、V2EX、微博、贴吧、豆瓣、天涯、虎扑、Github、华尔街见闻...全网新闻热点排行榜服务。","disabled":false},{"tag":"资讯","url":"https://www.anyknew.com/#/","icon":"https://www.anyknew.com/favicon.ico","name":"anyknew","desc":"AnyKnew - 效率资讯 - 高效读新闻, 5分钟遍历全网热点","disabled":false}]},{"title":"购物优惠","icon":"icon-router","item":[{"url":"https://www.smzdm.com/","icon":"https://www.smzdm.com/favicon.ico","name":"什么值得买","desc":"购物先上值得买_购物门户","disabled":false},{"url":"https://2.taobao.com/","icon":"https://2.taobao.com/favicon.ico","name":"闲鱼","desc":"淘宝二手 - 轻松卖闲置，放心淘二手","disabled":false},{"url":"http://you.163.com/","icon":"http://you.163.com/favicon.ico","name":"严选","desc":"为中国消费者甄选天下优品","disabled":false}]},{"title":"生活工具","icon":"icon-router","item":[{"url":"https://zh.wikihow.com/","icon":"https://zh.wikihow.com/favicon.ico","name":"wikiHow - 生活手册","desc":"生活百科 最高质量的指导手册。无论您想做什么，我们的多语种指导手册都可以为您提供免费的逐步指导。","disabled":false},{"url":"http://www.xiachufang.com/","icon":"http://www.xiachufang.com/favicon.ico","name":"下厨房","desc":"菜谱,美食,烹饪,下厨房","disabled":false},{"url":"https://www.kuaidi100.com/","icon":"https://www.kuaidi100.com/favicon.ico","name":"快递查询","desc":"快递100-查快递,寄快递,上快递100","disabled":false},{"url":"http://www.mvyxws.com/","icon":"http://www.mvyxws.com/favicon.ico","name":"医学微视","desc":"医学微视-中国医学科普微视频百科全书","disabled":false},{"url":"http://www.5h.com/","icon":"http://www.5h.com/favicon.ico","name":"5号网-养生美容亲子-为健康美丽播种","desc":"5号网-养生美容亲子-为健康美丽播种","disabled":false}]}]')},function(e){e.exports=JSON.parse('[{"title":"网盘搜索","icon":"icon-router","item":[{"url":"http://www.kengso.com/","icon":"http://www.kengso.com/favicon.ico","name":"坑搜网","desc":"百度云搜索引擎","disabled":false},{"url":"https://www.xiaoso.net/","icon":"https://www.xiaoso.net/favicon.ico","name":"小不点搜索","desc":"专注于百度云网盘、微盘、文库、在线视频网站的资源嗅探和搜索","disabled":false},{"url":"http://www.panduoduo.net/","icon":"http://www.panduoduo.net/favicon.ico","name":"盘多多","desc":"我们不生产资源，只做资源的搬运工。找资源，上盘多多！","disabled":false},{"url":"https://wangpan007.com/","icon":"https://wangpan007.com/favicon.ico","name":"网盘007","desc":"网盘搜索服务","disabled":true},{"url":"https://www.quzhuanpan.com/","icon":"https://www.quzhuanpan.com/media/image/logo/favicon.ico","name":"去转盘-我嚓哩-(Q站)","desc":"网盘搜索引擎，资源问答平台","disabled":false},{"url":"https://www.panc.cc/","icon":"https://www.panc.cc/static/css/pancss/img/favicon.ico?v=20170226","name":"Panc.cc-胖次网盘搜索","desc":"网盘搜索 - 胖次分享社区","disabled":false},{"url":"http://www.sobaidupan.com/","icon":"http://www.sobaidupan.com/favicon.ico","name":"搜百度盘","desc":"是基于百度云搜索，最大的百度云盘资源搜索中心","disabled":false},{"url":"http://www.tebaidu.com/","icon":"http://www.tebaidu.com/favicon.ico","name":"特白度","desc":"白度网盘资源搜索和白度网盘资源下载的网站","disabled":false},{"url":"http://www.xilinjie.com/","icon":"http://www.xilinjie.com/favicon.ico","name":"西林街搜索（X 站）","desc":"全网资源垂直搜索引擎，搜索资源更快、更专业","disabled":false},{"url":"http://www.pansou.com/","icon":"http://www.pansou.com/favicon.ico","name":"盘搜","desc":"百度网盘就搜到-国内优秀百度网盘搜索引擎站","disabled":false},{"url":"http://tansuo233.com/","icon":"http://tansuo233.com/favicon.ico","name":"探索搜","desc":"需要登录","disabled":true},{"url":"https://pan.09l.me/","icon":"https://pan.09l.me/favicon.ico","name":"云盘恶魔","desc":"免费聚合类百度云网盘搜索站","disabled":false},{"url":"https://www.xiaobaipan.com/","icon":"https://www.xiaobaipan.com/favicon.ico","name":"小白盘","desc":"小白盘百度网盘搜索","disabled":false}]},{"title":"BT搜索","icon":"icon-router","item":[{"url":"http://www.btba.cc/","icon":"http://www.btba.cc/z204.png","name":"BT吧","desc":"收集全网所有电影电视剧-请大家收藏BT吧","disabled":false},{"url":"http://www.acgsou.com/","icon":"http://www.acgsou.com/favicon.ico","name":"ACG搜","desc":"ACG資源|動漫種子|動漫BT下載","disabled":false}]},{"title":"软件/插件","icon":"icon-router","item":[{"url":"https://www.appinn.com/","icon":"https://www.appinn.com/favicon.ico","name":"小众软件","desc":"分享免费、小巧、实用、有趣、绿色的软件","disabled":false},{"url":"http://www.cnplugins.com/","icon":"http://www.cnplugins.com/favicon.ico","name":"Chrome插件","desc":"解决Chrome应用商店谷歌商店打不开的问题，无需翻墙直接下载Chrome插件","disabled":false},{"url":"https://greasyfork.org/zh-CN","icon":"https://greasyfork.org/assets/blacklogo16-bc64b9f7afdc9be4cbfa58bdd5fc2e5c098ad4bca3ad513a27b15602083fd5bc.png","name":"油猴脚本","desc":"这里是一个提供用户脚本的网站","disabled":false},{"url":"https://getitfree.cn/","icon":"https://getitfree.cn/wp-content/uploads/favicon.ico","name":"正版中国 | 正版软件限时免费","desc":"提供正版软件限时免费信息为途径,引导用户养成使用正版软件的习惯,以此促进国内版权氛围的改进。","disabled":false},{"url":"https://www.fosshub.com/","icon":"https://www.fosshub.com/favicon.ico","name":"FossHUB--Download Open Source and Free Software. ","desc":"下载开源与免费软件。No adware, no spyware, no bundles, no malware, fast downloads, free services and a single ad.","disabled":false}]},{"title":"导航","icon":"icon-router","item":[{"url":"https://navisec.it/","icon":"https://navisec.it/favicon.ico","name":"纳威安全导航","desc":"网络安全人员的上网导航","disabled":false},{"url":"http://www.xsldh.vip/","icon":"http://www.xsldh.vip/favicon.ico","name":"小森林导航","desc":"收录600多实用网站，整合200多个搜索引擎，包括了电影资源，电视剧资源，音乐，阅读，模板素材，软件工具，知识文库等各大分类。页面清爽，酷炫，无广告，是一个类目齐全，功能强大，非常实用的导航网站","disabled":false},{"url":"http://ilxdh.com/","icon":"http://ilxdh.com/favicon.ico","name":"龙轩导航","desc":"龙轩导航提供最快捷的资源平台，让你迅速找到想要的资源，准确又方便快捷","disabled":false},{"url":"http://www.alloyteam.com/nav/","icon":"http://www.alloyteam.com/favicon.ico","name":"Web前端导航","desc":"Web前端导航","disabled":false},{"url":"http://www.gkbang.cn/link/","icon":"http://www.gkbang.cn/favicon.ico","name":"果壳任意门","desc":"发现你最爱的网站","disabled":false},{"url":"http://www.qkankan.com/index.html","icon":"http://www.qkankan.com/favicon.ico","name":"国外网站大全","desc":"提供实用且人性化的国外网址服务","disabled":false},{"url":"http://www.1nami.com/","icon":"http://www.1nami.com/favicon.ico","name":"1纳米学习网站导航","desc":"学习网站，学习网站导航，1纳米","disabled":false},{"url":"http://guozhivip.com/nav/","icon":"http://guozhivip.com/favicon.ico","name":"果汁导航","desc":"果汁导航","disabled":false},{"url":"http://hao.199it.com/","icon":"http://hao.199it.com/favicon.ico","name":"大数据导航","desc":"，以大数据产业为主，大数据工具为辅，给用户提供一个更加快速找到大数据相关的工具","disabled":false},{"url":"https://dh.woshipm.com/","icon":"https://dh.woshipm.com/favicon.ico","name":"阿猫阿狗导航","desc":"产品经理导航|运营导航|设计师导航-阿猫阿狗导航","disabled":false},{"url":"http://www.world68.com/","icon":"http://www.world68.com/favicon.ico","name":"国外网站大全 - 世界各国网址大全,世界的,你我的!","desc":"国外网站大全即世界各国网址大全，国外网站大全收录100多个国家知名网站，包括美国、中国(含香港台湾)、英国、法国、德国、日本、韩国、泰国、印度、俄罗斯、澳大利亚等。","disabled":false}]},{"title":"在线工具","icon":"icon-router","item":[{"url":"https://www.photopea.com/","icon":"https://www.photopea.com/promo/thumb256.png","name":"在线photoshop","desc":"Open and edit PSD, XCF, Sketch (Photoshop, Gimp and Sketch) or any other image files. Inspect PSD and Sketch files. Convert Sketch to PSD. Apply photo effects and filters. A perfect alternative to Photoshop or Gimp.","disabled":false},{"url":"https://tool.lu/","icon":"https://tool.lu/favicon.ico","name":"在线工具","desc":"程序员的工具箱","disabled":false},{"url":"https://www.toolfk.com/","icon":"https://www.toolfk.com/tools/images/icon.png","name":"ToolFk程序员在线开发工具","desc":"在线开发工具,Linux在线命令,在线脑图,JSON代码格式化,PHP混淆/加密/解密工具,在线并发,在线JS/CSS/HTML格式化/压缩。 ,程序猿的在线工具箱","disabled":false},{"url":"http://tool.c7sky.com/","icon":"http://tool.c7sky.com//favicon.ico","name":"Toolbox","desc":"小影的工具箱","disabled":false},{"url":"https://smallpdf.com/","icon":"https://smallpdf.com/favicon.ico","name":"PDF文件转换","desc":"A Free Solution to all your PDF Problems","disabled":false},{"url":"https://www.hipdf.cn/","icon":"https://www.hipdf.cn/favicon.ico","name":"Hipdf","desc":"一站式在线PDF解决方案","disabled":false},{"url":"https://www.pexels.com/","icon":"https://www.pexels.com/favicon.ico","name":"Pexels","desc":"在线搜图-英文","disabled":false},{"url":"https://tinyjpg.com/","icon":"https://tinyjpg.com/favicon.ico","name":"图片压缩","desc":"图片压缩","disabled":false},{"url":"http://www.nicetool.net/","icon":"http://www.nicetool.net/static/favicon.ico","name":"NICETOOL","desc":"好工具网致力于收集打造各种简单易用在线工具，网友无需注册和下载安装即可使用。","disabled":true},{"url":"https://www.apowersoft.cn/free-online-screen-recorder","icon":"https://cdn.aoscdn.com/img/online-screen-recorder/logo.png?de85","name":"Apowersoft在线录屏","desc":"Apowersoft在线录屏 - 免费高清录屏工具，无水印，无需下载","disabled":false},{"url":"https://exif.tuchong.com/","icon":"https://exif.tuchong.com/favicon.ico","name":"图虫EXIF查看器","desc":"无需下载安装任何软件，直接上传图片即可查看EXIF","disabled":false},{"url":"https://uzer.me/","icon":"https://uzer.me/favicon.ico","name":"UZER.ME--云端超级应用空间","desc":"UZER.ME云端超级应用空间！带给您全新的软件应用方式，提供的全部软件免安装！","disabled":false},{"url":"https://carbon.now.sh/","icon":"https://carbon.now.sh/static/favicon.ico","name":"carbon--代码图片生成","desc":"代码图片生成","disabled":false},{"url":"http://coolaf.com/tool/port","icon":"http://coolaf.com/favicon.ico","name":"postjson--端口检测","desc":"在线端口检测,端口扫描,端口开放检查-在线工具-postjson","disabled":false},{"url":"https://www.yougetsignal.com/tools/open-ports/","icon":"https://www.yougetsignal.com/favicon.ico","name":"国外端口扫描","desc":"国外端口检测","disabled":false},{"url":"https://cn.office-converter.com/","icon":"https://cn.office-converter.com/images/favicon.ico","name":"免费在线文件转换器","desc":"免费在线转换视频,在线音频转换,在线图形转换,在线文档转换和在线压缩格式.","disabled":false},{"url":"https://screendump.techulus.com/","icon":"https://screendump.techulus.com/favicon.ico","name":"在线网页截屏","desc":"输入url，即可截取网页图片，支持各种屏幕尺寸的截屏","disabled":false}]},{"title":"打字练习","icon":"icon-router","item":[{"url":"https://zty.pe/","icon":"https://zty.pe/media/favicon.png","name":"z-type","desc":"在线打字游戏","disabled":false},{"url":"https://www.typingclub.com/","icon":"https://www.typingclub.com/m/corp2/img/favicon.png","name":"打字练习","desc":"打字练习","disabled":false},{"url":"https://sp.linci.co/","icon":"https://sp.linci.co/favicon.ico","name":"双拼练习","desc":"双拼练习","disabled":false},{"url":"https://api.ihint.me/shuang/","icon":"https://api.ihint.me/shuang/favicon.ico","name":"双拼练习","desc":"双拼练习","disabled":false}]},{"title":"其他工具","icon":"icon-router","item":[{"url":"http://receivefreesms.com/","icon":"http://receivefreesms.com/favicon.ico","name":"Receive FREE SMS online","desc":"Receive FREE SMS online 国外手机号免费接收短信","disabled":false},{"url":"https://www.pdflibr.com/","icon":"https://www.pdflibr.com/favicon.ico","name":"在线短信接收","desc":"在线短信接收-国内+国外","disabled":false},{"url":"https://www.asklib.com/","icon":"https://www.asklib.com/favicon.ico","name":"问答库_做最有用的题库问答学习平台","desc":"考试题库,题库,尔雅通识课,尔雅通识课题库,尔雅,中级职称,职业资格考试,公务员考试,超星,慕课,机器人问答库,问答库","disabled":false},{"url":"http://ictclas.nlpir.org/nlpir/","icon":"http://ictclas.nlpir.org/nlpir/favicon.ico","name":"语义分析系统","desc":"语义分析系统","disabled":true}]}]')},function(e){e.exports=JSON.parse('[{"title":"社区","icon":"icon-router","item":[{"url":"https://segmentfault.com/","icon":"https://segmentfault.com/favicon.ico","name":"SegmentFault思否","desc":"SegmentFault 思否 为开发者提供问答、学习与交流编程知识的平台，创造属于开发者的时代！","disabled":false},{"url":"https://juejin.im/timeline","icon":"https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico","name":"掘金","desc":"前端社区","disabled":false},{"url":"http://www.daqianduan.com/","icon":"http://www.daqianduan.com/favicon.ico","name":"大前端-关注前端开发","desc":"大前端是一个关注前端开发、用户体验设计、HTML5、CSS3、Javascript的前端开发独立博客。","disabled":true},{"tag":"","url":"https://www.ibm.com/developerworks/cn/","icon":"https://www.ibm.com/favicon.ico","name":"IBM Developer 中国","desc":"学习资源，开发工具，和技术社区","disabled":false}]},{"title":"前端","icon":"icon-router","item":[{"tag":"教程","url":"https://standardjs.com/rules-zhcn.html#javascript-standard-style","icon":"https://standardjs.com/favicon/favicon.ico","name":"JavaScript Standard Style","desc":"JS Standard 规范","disabled":false},{"tag":"教程","url":"https://www.yuque.com/airing/canvas/readme","icon":"https://www.yuque.com/favicon.ico","name":"CANVAS教程","desc":"CANVAS基础教程","disabled":false},{"tag":"教程","url":"http://es6.ruanyifeng.com/","icon":"http://es6.ruanyifeng.com/favicon.ico","name":"ECMAScript 6 入门","desc":"《ECMAScript 6 入门》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。","disabled":false},{"tag":"博客","url":"https://www.zhangxinxu.com/","icon":"https://www.zhangxinxu.com/favicon.ico","name":"张鑫旭的个人主页","desc":"张鑫旭的个人博客首页，张鑫旭的技术作品，张鑫旭的生活成长","disabled":false},{"tag":"文章","url":"http://taobaofed.org/","icon":"http://taobaofed.org/favicon.ico","name":"Taobao FED | 淘宝前端团队","desc":"用技术为体验提供无限可能","disabled":false},{"tag":"教程","url":"https://wangdoc.com/javascript/","icon":"https://wangdoc.com/favicon.ico","name":"JavaScript 教程","desc":"本教程全面介绍 JavaScript 核心语法，从最简单的讲起，循序渐进、由浅入深，力求清晰易懂。所有章节都带有大量的代码实例，便于理解和模仿，可以用到实际项目中，即学即用。","disabled":false},{"tag":"社区","url":"http://www.jobbole.com/","icon":"http://www.jobbole.com/wp-content/uploads/2015/06/d02a42d9cb3dec9320e5f550278911c7.png","name":"伯乐在线","desc":"专业的IT互联网职业社区。","disabled":false},{"tag":"文章","url":"https://weekly.75team.com/","icon":"https://weekly.75team.com/favicon.ico","name":"奇舞周刊","desc":"我们收集每周前端精华文章，集结成册，每周五推送到微信公众号和知乎专栏。","disabled":false},{"tag":"英文 文章","url":"https://www.notion.so/0ba81e1707ae479b8c2b9ec79fe3a3ce","icon":"https://weekly.75team.com/favicon.ico","name":"前端英文网站汇总","desc":"前端英文网站汇总","disabled":false},{"tag":"CSS","url":"http://caibaojian.com/30-seconds-of-css/","icon":"http://caibaojian.com/30-seconds-of-css/a8de561a148aec60dd3697311c540b29.png","name":"30秒 CSS 代码片段精选","desc":"您可以在30秒或更短时间内理解的有用CSS片段的精选。从基本元素(如clearfix )到渐变文本颜色和渐变光标跟踪，再到CSS缓动等等。","disabled":false},{"tag":"框架资源","url":"https://www.awesomes.cn/","icon":"https://www.awesomes.cn/images/logo.png","name":"Awesomes","desc":"Web前端开发资源库","disabled":false},{"tag":"模拟 联系","url":"https://codepen.io/pens/","icon":"https://static.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg","name":"Explore Pens on CodePen","desc":"CodePen.io是一个浏览器内编码环境,专为学习编码和快速原型创作而设计,最大限度地减少麻烦。","disabled":false},{"tag":"工具","url":"https://caniuse.com/#home","icon":"https://caniuse.com/img/favicon-128.png","name":"Can I use...","desc":"查看技术兼容性","disabled":false},{"tag":"教程","url":"https://learn.freecodecamp.org/","icon":"https://learn.freecodecamp.org/assets/favicon-32x32.png","name":"freeCodeCamp","desc":"数以千计的编码课程来帮助您提高技能。","disabled":false},{"tag":"题库","url":"https://www.codewars.com/dashboard","icon":"https://www.codewars.com/favicon.png","name":"Codewars","desc":"代码解题的社区(支持多种编程语言),根据用户编码水平设置编程段位","disabled":false},{"tag":"题库","url":"https://leetcode-cn.com/","icon":"https://leetcode-cn.com/favicon.png","name":"力扣 LeetCode","desc":"备战技术面试？力扣提供海量技术面试资源，帮助你高效提升编程技能，轻松拿下世界 IT 名企 Dream Offer。","disabled":false},{"tag":"题库","url":"http://scriptoj.mangojuice.top/","icon":"http://scriptoj.mangojuice.top/favicon.ico","name":"ScriptOJ","desc":"Web前端实战代码、面试题目测试","disabled":false},{"url":"http://f2ex.cn/","icon":"http://f2ex.cn/favicon.ico","name":"F2EX","desc":"F2EX – web前端开发|web前端资源库","tag":"题库","disabled":false},{"url":"https://www.html.cn/","icon":"https://www.html.cn/favicon.ico","name":"html中文网","desc":"从html、css到 js，WEB前端开发在线学习视频教程 - html中文网","tag":"文章 教程","disabled":false},{"url":"https://yuchengkai.cn/","name":"前端进阶之道","desc":"内容涵盖计算机通识，前端等知识。完善你的知识体系，让你的面试如虎添翼！","tag":"面试","disabled":false},{"url":"https://www.cxymsg.com/","name":"前端面试指南","desc":"追求重点和难点,剔除陈旧的知识！","tag":"面试","disabled":false},{"url":"https://www.pianduan.fun/","name":"片段","desc":"代码片段,代码分享,Node.js教程,Flutter教程,代码托管","tag":"代码","disabled":false}]},{"title":"设计","icon":"icon-router","item":[{"tag":"导航","url":"https://www.seeseed.com/","icon":"https://www.seeseed.com/favicon.png","name":"seeseed","desc":"设计导航","disabled":true},{"tag":"导航","url":"http://hao.shejidaren.com/","icon":"http://hao.shejidaren.com/favicon.png","name":"设计导航","desc":"设计导航","disabled":false},{"tag":"导航","url":"https://hao.uisdc.com/","icon":"https://hao.uisdc.com/favicon.png","name":"优设导航 - 学设计从这里开始！","desc":"设计导航","disabled":false},{"tag":"导航","url":"https://idesign.qq.com/#!index/feed","icon":"https://idesign.qq.com/favicon.png","name":"设计订阅 - 腾讯设计导航","desc":"腾讯设计导航云集高质量设计网站的内容，云集大量设计素材，随时随地访问收藏为设计灵感保驾护航。每天定时更新，网罗全网高逼格的设计站点，是最优秀的设计资讯网站。","disabled":false},{"tag":"图标","url":"https://www.iconfont.cn/","icon":"https://www.iconfont.cn/favicon.ico","name":"iconfont 阿里图标库","desc":"阿里图标库","disabled":false},{"tag":"图标","url":"https://iconsvg.xyz/","icon":"https://iconsvg.xyz/favicon-32.png","name":"svg图标","desc":"Simple tool to find, customize and generate common SVG icons for your project","disabled":false},{"tag":"图标","url":"https://iconscout.com/unicons","icon":"https://iconscout.com/favicon-96x96.png","name":"Unicons","desc":"1000+ Pixel-perfect vector icons and Iconfont for your next project.--在线图标库","disabled":false},{"tag":"图标","url":"https://www.flaticon.com/","icon":"https://www.flaticon.com/media/img/favicon.ico","name":"flaticon","desc":"最大的免费图标库（ PNG, SVG, EPS, PSD and BASE 64 formats）","disabled":false},{"tag":"图标","url":"https://thenounproject.com/","icon":"https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png","name":"Icons for everything","desc":"超过200万的图标（免费下载原图，自定义收费）","disabled":false},{"tag":"配色","url":"http://www.peise.net/","icon":"http://www.peise.net/favicon.ico","name":"配色软件园","desc":"色彩搭配,安卓软件,颜色搭配,配色软件园","disabled":false},{"tag":"配色","url":"https://flatuicolors.com/","icon":"https://flatuicolors.com/static/favicon.ico","name":"flatuicolors","desc":"扁平化色彩配色方案","disabled":false},{"tag":"配色","url":"https://webgradients.com/","icon":"https://webgradients.com/favicons/favicon-32x32.png","name":"webgradients","desc":"收藏了180种渐变色","disabled":false},{"tag":"配色","url":"http://color.uisdc.com/","icon":"http://color.uisdc.com/favicon.ico","name":"中国传统色彩","desc":"中国传统色彩","disabled":false},{"tag":"配色","url":"http://tool.c7sky.com/webcolor/","icon":"http://tool.c7sky.com/favicon.ico","name":"配色表","desc":"网页设计常用色彩搭配表","disabled":false},{"tag":"平台","url":"https://www.uisdc.com/","icon":"http://color.uisdc.com/favicon.ico","name":"优设网 - UISDC","desc":"设计师交流学习平台 - 看设计文章，学软件教程，找灵感素材，尽在优设网！","disabled":false},{"tag":"配色","url":"https://coolbackgrounds.io/","icon":"https://coolbackgrounds.io/favicon.ico","name":"渐变色背景生成","desc":"渐变色背景生成","disabled":false}]},{"title":"系统","icon":"icon-router","item":[{"url":"https://xinqiu.gitbooks.io/linux-insides-cn/content/","icon":"https://xinqiu.gitbooks.io/linux-insides-cn/content/gitbook/images/favicon.ico","name":"Linux内核揭秘","desc":"一系列关于 Linux 内核和其内在机理的帖子。","disabled":false},{"url":"http://linux.vbird.org/","icon":"http://linux.vbird.org/favicon.ico","name":"鳥哥的 Linux 私房菜","desc":"鳥哥的 Linux 私房菜","disabled":false}]},{"title":"其他","icon":"icon-router","item":[{"tag":"书籍","url":"http://www.ruanyifeng.com/survivor/collapse/index.html","icon":"http://www.ruanyifeng.com/favicon.ico","name":"未来世界的幸存者","desc":"未来世界的幸存者--阮一峰","disabled":true},{"url":"https://mp.weixin.qq.com/s?__biz=MjM5NjAxOTU4MA==&mid=3009206495&idx=1&sn=baff9e3b99ac1dba95cdb5ff324e0370&chksm=9047d4cca7305dda34408955807ed666c4bcc3552d9122063e045b25d59e813c961dc64e7f56&mpshare=1&scene=21#wechat_redirect","icon":"https://mp.weixin.qq.com/favicon.ico","name":"听熟100首古典名曲，让孩子迷上音乐","desc":"精选100首适合孩子的古典名曲，帮孩子爱上古典音乐","disabled":false},{"tag":"书籍","url":"http://mbmlbook.com/toc.html","icon":"http://mbmlbook.com/images/favicon.ico","name":"Model-Based Machine Learning (Early Access)","desc":"基于模型的机器学习（英文电子书）","disabled":false},{"tag":"书籍","url":"https://book.systemsapproach.org/","icon":"https://book.systemsapproach.org/gitbook/images/favicon.ico","name":"计算机网络","desc":"计算机网络相关（英文电子书）","disabled":false},{"tag":"书籍","url":"https://www.yuque.com/ham/base","icon":"https://www.yuque.com/favicon.ico","name":"无线电基础","desc":"无线电基础","disabled":false},{"tag":"数学","url":"https://www.shuxuele.com/index.html","icon":"https://www.shuxuele.com/favicon.ico","name":"数学乐","desc":"数学基础可视化教程","disabled":false},{"tag":"教程","url":"http://www.08nm.com/","icon":"http://www.08nm.com/favicon.ico","name":"柠檬大学-伴我成长","desc":"包含大学专业课程的各个视频","disabled":false},{"tag":"科普","url":"http://open.163.com/special/opencourse/aspacetimeodyssey.html","icon":"http://open.163.com/favicon.ico","name":"国家地理频道纪录片：宇宙时空之旅","desc":"一部花费重金打造的科普巨制，带领观众以最宏观和最微观的角度来审视宇宙。","disabled":false},{"tag":"书籍","url":"https://nndl.github.io/","icon":"https://nndl.github.io/favicon.ico","name":"神经网络与深度学习","desc":"本课程主要介绍神经网络与深度学习中的基础知识、主要模型（前馈网络、卷积网络、循环网络等）以及在计算机视觉、自然语言处理等领域的应用。","disabled":false},{"tag":"书籍","url":"https://www.shuge.org/","name":"书格","desc":"有品格的数字古籍图书馆, 书格, 书格图书馆,古籍,善本,Shuge Library,数字图书馆,书格网,版画,典籍,小说,绘画,老照片,每个人都能自由地看到我们的文明,书格官网","disabled":false},{"tag":"科学","url":"http://open.163.com/special/opencourse/aspacetimeodyssey.html","name":"国家地理频道纪录片：宇宙时空之旅","desc":"国家地理频道纪录片：宇宙时空之旅","disabled":false}]}]')}]);