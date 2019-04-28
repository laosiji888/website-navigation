/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

define("script/router",["require"],function(t){"use strict";var c={container:"#page-content",defaultHashPage:CONF.defaultPage,baseUrl:"page/",init:function(){this.checkURL(),$(document).on("click",'a.router[href="#"]',function(t){t.preventDefault()}),$(window).on("hashchange",function(){c.checkURL()})},checkURL:function(){var t=this,c=location.href,n=c.split("#"),o="";n.length>1&&(o=n[1].split("?")[0]),""!==o?t.loadURL(o):t.loadURL(t.defaultHashPage)},loadURL:function(t){var c=this,n=this.baseUrl+t+".html";$(c.container).html(""),$("#loading").show(),$.get(n,function(t,o){"success"==o?($(c.container).html(t),requirejs([n.split(".")[0]],function(t){t&&t(),$("#loading").hide()})):$(c.container).html("<div class='error-construction'><h4>很抱歉！无法加载到您要的资源...</h4></div>")},c.cache)},getPageParam:function(){var t=this,c=$(t.container).data("data");if(c)return c;var n=location.href.split("?"),o=n.length>1&&n[1],i={};if(o){var e=o.split("&");if(e)for(var a=0;a<e.length;a++){var s=e[a],r=s.split("=");2==r.length&&(i[r[0]]=r[1])}}return i}};return c}),define("text",["module"],function(t){"use strict";function c(t,c){return void 0===t||""===t?c:t}function n(t,n,o,i){if(n===i)return!0;if(t===o){if("http"===t)return c(n,"80")===c(i,"80");if("https"===t)return c(n,"443")===c(i,"443")}return!1}var o,i,e,a,s,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],w=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,m=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,p="undefined"!=typeof location&&location.href,u=p&&location.protocol&&location.protocol.replace(/\:/,""),l=p&&location.hostname,h=p&&(location.port||void 0),d={},f=t.config&&t.config()||{};return o={version:"2.0.15",strip:function(t){if(t){t=t.replace(w,"");var c=t.match(m);c&&(t=c[1])}else t="";return t},jsEscape:function(t){return t.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var t,c,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(c=0;c<3;c+=1){n=r[c];try{t=new ActiveXObject(n)}catch(t){}if(t){r=[n];break}}return t},parseName:function(t){var c,n,o,i=!1,e=t.lastIndexOf("."),a=0===t.indexOf("./")||0===t.indexOf("../");return-1!==e&&(!a||e>1)?(c=t.substring(0,e),n=t.substring(e+1)):c=t,o=n||c,e=o.indexOf("!"),-1!==e&&(i="strip"===o.substring(e+1),o=o.substring(0,e),n?n=o:c=o),{moduleName:c,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(t,c,i,e){var a,s,r,w=o.xdRegExp.exec(t);return!w||(a=w[2],s=w[3],s=s.split(":"),r=s[1],s=s[0],(!a||a===c)&&(!s||s.toLowerCase()===i.toLowerCase())&&(!r&&!s||n(a,r,c,e)))},finishLoad:function(t,c,n,i){n=c?o.strip(n):n,f.isBuild&&(d[t]=n),i(n)},load:function(t,c,n,i){if(i&&i.isBuild&&!i.inlineText)return void n();f.isBuild=i&&i.isBuild;var e=o.parseName(t),a=e.moduleName+(e.ext?"."+e.ext:""),s=c.toUrl(a),r=f.useXhr||o.useXhr;if(0===s.indexOf("empty:"))return void n();!p||r(s,u,l,h)?o.get(s,function(c){o.finishLoad(t,e.strip,c,n)},function(t){n.error&&n.error(t)}):c([a],function(t){o.finishLoad(e.moduleName+"."+e.ext,e.strip,t,n)})},write:function(t,c,n,i){if(d.hasOwnProperty(c)){var e=o.jsEscape(d[c]);n.asModule(t+"!"+c,"define(function () { return '"+e+"';});\n")}},writeFile:function(t,c,n,i,e){var a=o.parseName(c),s=a.ext?"."+a.ext:"",r=a.moduleName+s,w=n.toUrl(a.moduleName+s)+".js";o.load(r,n,function(c){var n=function(t){return i(w,t)};n.asModule=function(t,c){return i.asModule(t,w,c)},o.write(t,r,n,e)},e)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(i=require.nodeRequire("fs"),o.get=function(t,c,n){try{var o=i.readFileSync(t,"utf8");"\ufeff"===o[0]&&(o=o.substring(1)),c(o)}catch(t){n&&n(t)}}):"xhr"===f.env||!f.env&&o.createXhr()?o.get=function(t,c,n,i){var e,a=o.createXhr();if(a.open("GET",t,!0),i)for(e in i)i.hasOwnProperty(e)&&a.setRequestHeader(e.toLowerCase(),i[e]);f.onXhr&&f.onXhr(a,t),a.onreadystatechange=function(o){var i,e;4===a.readyState&&(i=a.status||0,i>399&&i<600?(e=new Error(t+" HTTP status: "+i),e.xhr=a,n&&n(e)):c(a.responseText),f.onXhrComplete&&f.onXhrComplete(a,t))},a.send(null)}:"rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?o.get=function(t,c){var n,o,i=new java.io.File(t),e=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),"utf-8")),s="";try{for(n=new java.lang.StringBuffer,o=a.readLine(),o&&o.length()&&65279===o.charAt(0)&&(o=o.substring(1)),null!==o&&n.append(o);null!==(o=a.readLine());)n.append(e),n.append(o);s=String(n.toString())}finally{a.close()}c(s)}:("xpconnect"===f.env||!f.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(e=Components.classes,a=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in e,o.get=function(t,c){var n,o,i,r={};s&&(t=t.replace(/\//g,"\\")),i=new FileUtils.File(t);try{n=e["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream),n.init(i,1,0,!1),o=e["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream),o.init(n,"utf-8",n.available(),a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),r),o.close(),n.close(),c(r.value)}catch(t){throw new Error((i&&i.path||"")+": "+t)}}),o}),define("text!template/menu.tpl",[],function(){return'{{#each this}}\r\n<div id="menu-item-{{id}}" class="item">\r\n  <a href="{{hashUrl}}" class="item-text zh">\r\n    <span class="item-icon">\r\n      <i class="iconfont {{icon}}"></i>\r\n    </span>\r\n    <span>{{title}}</span>\r\n  </a>\r\n  {{#if sub}}\r\n  <div class="item-subs">\r\n    <div class="item-subs-wrapper">\r\n      <div class="positioner">\r\n        <div class="nonius" style="top:0px;"></div>\r\n      </div>\r\n      {{#each sub}}\r\n      <div class="sub-item">\r\n        <div class="sub-item-text">{{title}}</div>\r\n      </div>\r\n      {{/each}}\r\n    </div>\r\n  </div>\r\n  {{/if}}\r\n</div>\r\n{{/each}}'}),define("data/film",["require"],function(t,c){"use strict";return[{title:"综合",icon:"icon-yingshi",item:[{url:"http://www.wuhaozhan.net",icon:"http://www.wuhaozhan.net/favicon.ico",name:"电影5号站",desc:"影视搜索引擎"},{url:"https://neets.cc/",icon:"https://neets.cc/favicon.ico",name:"Neets影视",desc:"一站式搜索互联网上相关的视频内容"},{url:"http://www.2tu.cc/",icon:"img/icon/迅播影院.png",name:"迅播影院",desc:"提供最新最快电影资讯，迅雷看看电影点播以及迅雷电影下载，同时提供,西瓜,先锋,吉吉,百度影音高速观看！"},{url:"https://www.wayoutv.com/",icon:"https://www.wayoutv.com/favicon.ico",name:"哇有视频",desc:"哇有视频提供全网最新最快的影视在线播放"},{url:"http://v.778qs.com/",icon:"http://v.778qs.com/favicon.ico",name:"暖光影视",desc:"腐剧,腐剧网,暖光腐剧网,耽美剧,上瘾,天府泰剧 - 暖光影视"},{url:"http://www.vultr1.com/",icon:"http://www.vultr1.com/template/stui_tpl_A004/statics/img/favicon.ico",name:"狗带TV",desc:"为您提供最新好看的电影，在线播放"},{url:"http://ttyyy.vip/index.html",icon:"http://ttyyy.vip/favicon.ico",name:"天天云影",desc:"天天云影原云影院,天天看影为您提供手机电脑免插件软件即可在线点2018最新的高清电影,高清电视请记住我们的网址(www.TTYYY.vip)"},{url:"http://www.kkkkmao.com/",icon:"http://www.kkkkmao.com/favicon.ico",name:"4K屋",desc:"提供最全的最新电视剧，2019最新电影，韩国电视剧、香港TVB电视剧、日本动漫、日剧、美剧、综艺的在线观看和剧集交流场所"},{url:"https://www.d6080.com/",icon:"https://www.d6080.com/favicon.ico",name:"骑士影院",desc:"提供全网视频支持电脑和手机在线观看。"},{url:"https://www.007ts.co/",icon:"https://ae01.alicdn.com/kf/HTB15Y9eX2vsK1Rjy0Fi762wtXXaa.png",name:"零零七影视",desc:"免VIP抢先观看最新好看的电影和电视剧"},{url:"https://www.halihali.tv/",icon:"https://www.halihali.tv/favicon.ico",name:"哈哩哈哩(H站)",desc:"哈哩哈哩爱不离手的视频放映厅，二次元暖暖的综合视频站，拥有最新最全的电影,电视剧,综艺,动漫资源视频,全站无广告播放,完美支持电脑手机观看，赶快加入哈哩哈哩。"},{url:"http://www.77dvds.com/",icon:"http://www.77dvds.com/favicon.ico",name:"琪琪影院",desc:"2018最新电影,最新电视剧,韩国伦理电影"},{url:"https://www.yeziyy.com/",icon:"https://www.yeziyy.com/favicon.ico",name:"椰子影院",desc:"免VIP看全网最新最全视频！"},{url:"http://www.moonbt.com/",icon:"http://www.moonbt.com/favicon.ico",name:"月影点播网",desc:"电影|剧集|综艺|月影动漫在线看"},{url:"https://www.gqyys.com/",icon:"http://gaoqing.la/wp-content/themes/Loostrive/images/favicon.ico",name:"高清云影视",desc:"天天云影院,高清云影视,左手吃斋影视"},{url:"http://www.beiwo888.com/",icon:"http://www.beiwo888.com/favicon.ico",name:"被窝电影",desc:"被窝电影网 被窝电影 beiwody--好电影就在被窝电影网"}]},{title:"动漫",icon:"icon-yingshi",item:[{url:"http://www.nicotv.me/",icon:"http://img.kingsnug.cn/favicon.ico",name:"妮可",desc:"宅男腐女们最喜爱的动漫交流互动平台"},{url:"http://www.kisssub.org/",icon:"http://www.kisssub.org/favicon.ico",name:"爱恋动漫BT下载",desc:"爱恋BT分享站，动画～漫画～游戏～动漫音乐～片源（RAW）～各类ACG资源聚集地"},{url:"http://www.acfun.cn/",icon:"http://www.acfun.cn/favicon.ico",name:"A站",desc:"AcFun是一家弹幕视频网站，致力于为每一个人带来欢乐"},{url:"https://www.bilibili.com/",icon:"https://www.bilibili.com/favicon.ico",name:"B站",desc:"bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围。"},{url:"http://www.dilidili.name/",icon:"http://www.dilidili.name/favicon.ico",name:"D站",desc:"嘀哩嘀哩会筛选经典作品并将新作经典轮番推荐，为您带来一场美妙的动漫盛宴"},{url:"https://www.missevan.com/",icon:"https://www.missevan.com/images/index/favicon.ico",name:"M站",desc:"M站(猫耳FM)是第一家弹幕音图站,同时也是中国声优基地,在这里可以听电台,音乐,翻唱,小说和广播剧,用二次元声音连接三次元."},{url:"https://mikanani.me/",icon:"https://mikanani.me/Images/favicon.ico?v=2",name:"蜜柑计划",desc:"新一代的动漫下载站"},{url:"https://www.36dm.com/",icon:"https://www.36dm.com/favicon.ico?v=2",name:"简单动漫",desc:"BT下载|动漫下载|动画|漫画"},{url:"http://bt.acg.gg/",icon:"http://bt.acg.gg/favicon.ico?v=2",name:"ACG狗狗",desc:"动漫资源分享 - 动漫下载|BT|漫画|动画|游戏"},{url:"http://www.ikanfan.com/",icon:"http://www.ikanfan.com/favicon.ico",name:"爱看番",desc:"小而美的动漫追番网站"},{url:"https://www.5ddm.com/",icon:"https://www.5ddm.com/5d_favicon.ico",name:"5D动漫(5站)",desc:"无广告免费的动漫网站"}]},{title:"国外",icon:"icon-yingshi",item:[{url:"http://kmeiju7.com/",icon:"http://kmeiju7.com/favicon.ico",name:"AG美剧",desc:"在线免费观看高清美剧的中文美剧网，播放速度快，热门美剧第一时间更新，美剧迷们最喜欢的中文字幕在线免费观看美剧网站。"},{url:"https://www.taijula.com/",icon:"https://www.taijula.com/favicon.ico",name:"泰剧啦",desc:"泰剧啦 - 最新热门泰剧泰国电影免费在线观看"},{url:"http://www.ttmeiju.me/",icon:"http://www.ttmeiju.me/favicon.ico",name:"天天美剧",desc:"您的高清美剧下载中心,美剧爱好者的天堂"},{url:"https://www.meijutt.com/",icon:"https://www.meijutt.com/favicon.ico",name:"美剧天堂",desc:"好看的美剧,美剧下载,美剧在线观看,美剧网"},{url:"https://fantopia.club/",icon:"https://fantopia.club/wp-content/uploads/2018/05/cropped-fan-icon-192x192.png",name:"翻托邦字幕组",desc:"各种冷番高分剧独家制作。我们不求最快最好，但一定做到问心无愧！"},{url:"https://www.icezmz.com/",icon:"https://www.icezmz.com/favicon.ico",name:"冰冰字幕组",desc:"最新英剧下载 英剧字幕 英剧在线观看"},{url:"http://sskzmz.com/",icon:"http://sskzmz.com/favicon.ico",name:"SSK字幕组",desc:"SSK字幕组是最好的字幕组之一"},{url:"http://dbfansub.com/",icon:"http://dbfansub.com/uploads/2012/12/favicon.ico",name:"电波字幕组",desc:"诚心诚译，带给您最优质的英文影视字幕。"},{url:"http://www.orangesub.com/",icon:"http://www.orangesub.com/static/img/Orange-logo%40300.png",name:"Orange字幕组",desc:"中文电影字幕下载网站"},{url:"http://oabt004.com/",icon:"http://oabt004.com/favicon.ico",name:"磁力下载站",desc:"最新美剧下载,日剧下载,电影下载,韩剧下载"},{url:"http://www.zimuxia.cn/",icon:"http://www.zimuxia.cn/wp-content/uploads/2016/03/cropped-logo2-32x32.png",name:"FIX字幕侠",desc:"做国内最好的字幕组"},{url:"https://www.hanfan.cc/hanju/",icon:"https://www.hanfan.cc/favicon.ico",name:"韩饭网",desc:"提供最新韩剧下载，韩剧排行榜，热门韩剧资讯，剧情介绍，幕后花絮等精彩内容。"},{url:"http://www.hanju.cc/",icon:"http://www.hanju.cc/favicon.ico",name:"韩剧网",desc:"H9T韩剧网是最大的韩剧资料馆"},{url:"http://hxly9.com/forum.php",icon:"http://hxly9.com/favicon.ico",name:"幻想乐园字幕组",desc:"幻想乐园字幕组是为大家免费提供韩国综艺,韩剧,电影的中文字幕,原创翻译最新的韩国娱乐新闻"},{url:"http://www.zzrbl.com/",icon:"http://www.zzrbl.com/favicon.ico",name:"猪猪日部落",desc:"日剧综合站"},{url:"http://www.hideystudio.com/drama/",icon:"http://www.hideystudio.com/favicon.ico",name:"隐社",desc:"日剧综合站"},{url:"http://www.wwmulu.com/",icon:"http://www.wwmulu.com/favicon.ico",name:"91日剧",desc:"高清日剧下载|日剧排行榜|日剧推荐"},{url:"http://www.tokyonothot.com/portal.php",icon:"http://www.tokyonothot.com/favicon.ico",name:"东京不够热",desc:"日剧字幕组"}]},{title:"下载",icon:"icon-yingshi",item:[{url:"https://www.dytt8.net/",icon:"https://www.dytt8.net/favicon.ico",name:"电影天堂",desc:"免费电影下载,电影下载,最新电影"},{url:"http://gaoqing.la/",icon:"http://gaoqing.la/favicon.ico",name:"中国高清网",desc:"每天关注提供720p高清、1080p高清、蓝光原盘高清、高清3d高清、高清mv最新热门bt种子磁力链迅雷下载网站，是下载了解高清电影天堂！"},{url:"https://www.xiaohx.org/",icon:"https://www.xiaohx.org/static/img/favicon.ico",name:"小浣熊 · 下载站",desc:"小浣熊,小浣熊下载站,电影下载,电视剧下载,动漫下载,游戏下载,音乐下载,PDF图书下载"},{url:"http://www.gscq.me/",icon:"http://www.gscq.me/view/img/favicon.ico",name:"乐赏 GSCQ.ME",desc:"国内原创BT影视动漫以及游戏资源社区。"},{url:"https://www.ygdy8.com/",icon:"https://www.ygdy8.com/favicon.ico",name:"阳光电影",desc:"免费电影下载,电影下载,最新电影。"},{url:"http://www.languang.co/",icon:"http://www.languang.co/wp-content/uploads/2017/05/caf5e0ffa8ae62.ico",name:"蓝光网",desc:"分享高清，给爱电影的人！"},{url:"http://www.yyets.com/",icon:"http://www.yyets.com/favicon.ico",name:"人人影视",desc:"美剧下载,字幕下载,日剧下载,高清电影下载,韩剧下载,美剧时间表,字幕组"},{url:"http://zhuixinfan.com/main.php",icon:"http://zhuixinfan.com/favicon.ico",name:"追新番日剧站",desc:"美剧下载,字幕下载,日剧下载,高清电影下载,韩剧下载,美剧时间表,字幕组"}]},{title:"其他",icon:"icon-yingshi",item:[{url:"http://www.mvcat.com/",icon:"http://www.mvcat.com/img/logo_appicon.png",name:"电影推荐 · MVCAT",desc:"电影推荐,经典电影,好看电影,好电影,必看电影,电影网,影猫,影音猫"},{url:"http://bddn.cn/zb.htm",icon:"http://bddn.cn/favicon.ico",name:"全国电视直播",desc:"全国电视直播"},{url:"http://www.qmaile.com/",icon:"http://www.qmaile.com/favicon.ico",name:"全民解析",desc:"vip视频在线解析 方便广大用户VIP视频服务，最新电影最新电视剧在线免费观看"},{url:"http://www.administrator5.com/",icon:"http://www.administrator5.com/favicon.ico",name:"无名小站",desc:"★【全能会员视频解析_视频云解析平台_视频解析云平台_无名小站解析网站】"}]}]}),define("data/life",["require"],function(t){"use strict";return[{title:"新闻资讯",icon:"icon-router",item:[{tag:"科技",url:"https://www.huxiu.com/",icon:"https://www.huxiu.com/favicon.ico",name:"虎嗅",desc:"科技资讯,商业评论,明星公司,动态,宏观,趋势,创业,精选,有料,干货,有用,细节,内幕"},{tag:"互联网",url:"https://readhub.cn/topics",icon:"https://readhub.cn/favicon.ico",name:"Readhub",desc:"每天三分钟的科技新闻聚合阅读"},{tag:"科技",url:"https://awtmt.com/",icon:"https://awtmt.com/favicon.ico",name:"全天候科技",desc:"原创科技新媒体，致力于为用户提供专业、快速、完整的科技商业资讯，帮助投资者理解科技。"},{url:"https://weibo.com/u/3816118370/home?topnav=1&wvr=6",icon:"https://weibo.com/favicon.ico",name:"微博",desc:"随时随地发现新鲜事"},{tag:"财经",url:"https://wallstreetcn.com/",icon:"https://wallstreetcn.com/favicon.ico",name:"华尔街见闻",desc:"中国领先的商业和金融信息提供商，首创商业和金融信息“实时”模式，重要信息秒级推送。7*24小时全年不间断为用户提供资讯、数据、行情、研究和社区等服务"},{tag:"财经",url:"http://www.caixin.com/",icon:"http://www.caixin.com/favicon.ico",name:"财新网-原创财经新媒体",desc:"财经,财经新闻,金融,商业,产经,政经,基金,改制,改革，财经网站"},{tag:"财经",url:"https://www.cls.cn/telegraph",icon:"https://www.cls.cn/favicon.ico",name:"财联社",desc:"提供快速、准确、权威、专业的财经资讯"},{tag:"财经",url:"https://xueqiu.com/",icon:"https://xueqiu.com/favicon.ico",name:"雪球",desc:"提供沪深港美股票实时行情、实战交流、实盘交易。"},{tag:"财经",url:"https://www.jiemian.com/",icon:"https://www.jiemian.com/favicon.ico",name:"界面新闻-只服务于独立思考的人群",desc:"中国具有影响力的原创财经新媒体，以财经、商业新闻为核心"},{tag:"财经",url:"http://www.ftchinese.com/",icon:"http://www.ftchinese.com/favicon.ico",name:"FT中文网 － 全球财经精粹",desc:"英国《金融时报》唯一的非英语网站，致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场、管理和科技新闻"}]},{title:"购物优惠",icon:"icon-router",item:[{url:"https://www.smzdm.com/",icon:"https://www.smzdm.com/favicon.ico",name:"什么值得买",desc:"购物先上值得买_购物门户"},{url:"https://2.taobao.com/",icon:"https://2.taobao.com/favicon.ico",name:"闲鱼",desc:"淘宝二手 - 轻松卖闲置，放心淘二手"},{url:"http://you.163.com/",icon:"http://you.163.com/favicon.ico",name:"严选",desc:"为中国消费者甄选天下优品"}]},{title:"生活工具",icon:"icon-router",item:[{url:"https://zh.wikihow.com/",icon:"https://zh.wikihow.com/favicon.ico",name:"wikiHow - 生活手册",desc:"生活百科 最高质量的指导手册。无论您想做什么，我们的多语种指导手册都可以为您提供免费的逐步指导。"},{url:"http://www.xiachufang.com/",icon:"http://www.xiachufang.com/favicon.ico",name:"下厨房",desc:"菜谱,美食,烹饪,下厨房"},{url:"https://www.kuaidi100.com/",icon:"https://www.kuaidi100.com/favicon.ico",name:"快递查询",desc:"快递100-查快递,寄快递,上快递100"}]}]}),define("data/tools",["require"],function(t){"use strict";return[{title:"网盘搜索",icon:"icon-router",item:[{url:"http://www.kengso.com/",icon:"http://www.kengso.com/favicon.ico",name:"坑搜网",desc:"百度云搜索引擎"},{url:"https://www.xiaobd.net/",icon:"https://www.xiaobd.net/favicon.ico",name:"小不点搜索",desc:"专注于百度云网盘、微盘、文库、在线视频网站的资源嗅探和搜索"},{url:"http://www.panduoduo.net/",icon:"http://www.panduoduo.net/favicon.ico",name:"盘多多",desc:"我们不生产资源，只做资源的搬运工。找资源，上盘多多！"},{url:"http://www.baidu8.art/",icon:"http://www.baidu8.art/favicon.ico",name:"麦库搜索",desc:"源：百度网盘，新浪微盘等"},{url:"https://wangpan007.com/",icon:"https://wangpan007.com/favicon.ico",name:"网盘007",desc:"网盘搜索服务"},{url:"https://www.quzhuanpan.com/",icon:"https://www.quzhuanpan.com/media/image/logo/favicon.ico",name:"去转盘-我嚓哩-(Q站)",desc:"网盘搜索引擎，资源问答平台"},{url:"https://www.panc.cc/",icon:"https://www.panc.cc/static/css/pancss/img/favicon.ico?v=20170226",name:"Panc.cc-胖次网盘搜索",desc:"网盘搜索 - 胖次分享社区"},{url:"http://www.tuoniao.me/",icon:"http://www.tuoniao.me/assets/images/favicon.ico",name:"鸵鸟搜索",desc:"资源搜索与推荐平台，网盘资源分享搜索神器"},{url:"http://www.sobaidupan.com/",icon:"http://www.sobaidupan.com/favicon.ico",name:"搜百度盘",desc:"是基于百度云搜索，最大的百度云盘资源搜索中心"},{url:"http://www.tebaidu.com/",icon:"http://www.tebaidu.com/favicon.ico",name:"特白度",desc:"白度网盘资源搜索和白度网盘资源下载的网站"},{url:"http://www.xilinjie.com/",icon:"http://www.xilinjie.com/favicon.ico",name:"西林街搜索（X 站）",desc:"全网资源垂直搜索引擎，搜索资源更快、更专业"},{url:"http://pansou.com/",icon:"http://pansou.com/favicon.ico",name:"盘搜",desc:"百度网盘就搜到-国内优秀百度网盘搜索引擎站"},{url:"http://tansuo233.com/",icon:"http://tansuo233.com/favicon.ico",name:"探索搜",desc:"需要登录"},{url:"https://pan.09l.me/",icon:"https://pan.09l.me/favicon.ico",name:"云盘恶魔",desc:"免费聚合类百度云网盘搜索站"},{url:"https://www.xiaobaipan.com/",icon:"https://www.xiaobaipan.com/favicon.ico",name:"小白盘",desc:"小白盘百度网盘搜索"}]},{title:"BT搜索",icon:"icon-router",item:[{url:"https://www.bturl.pw/",icon:"https://www.bturl.pw/favicon.ico",name:"BT磁力链",desc:"磁力链接搜索引擎"},{url:"https://www.cilimao.cc/",icon:"https://www.cilimao.cc/favicon.ico",name:"磁力猫",desc:"懂你的磁力链接搜索引擎"},{url:"http://www.btba.cc/",icon:"http://www.btba.cc/z204.png",name:"BT吧",desc:"收集全网所有电影电视剧-请大家收藏BT吧"},{url:"http://www.acgsou.com/",icon:"http://www.acgsou.com/favicon.ico",name:"ACG搜",desc:"ACG資源|動漫種子|動漫BT下載"},{url:"http://mybtkitty.cc/",icon:"http://mybtkitty.cc/favicon.ico",name:"btkitty",desc:"磁力链接搜索"},{url:"https://www.clb8.net/",icon:"https://www.clb8.net/favicon.ico",name:"磁力吧",desc:"磁力搜索|种子搜索"},{url:"http://godiggbts.ws/",icon:"http://godiggbts.ws/favicon.ico",name:"DiggBT",desc:"磁力搜索|种子搜索"}]},{title:"软件/插件",icon:"icon-router",item:[{url:"https://www.appinn.com/",icon:"https://www.appinn.com/favicon.ico",name:"小众软件",desc:"分享免费、小巧、实用、有趣、绿色的软件"},{url:"http://www.cnplugins.com/",icon:"http://www.cnplugins.com/favicon.ico",name:"Chrome插件",desc:"解决Chrome应用商店谷歌商店打不开的问题，无需翻墙直接下载Chrome插件"},{url:"https://greasyfork.org/zh-CN",icon:"https://greasyfork.org/assets/blacklogo16-bc64b9f7afdc9be4cbfa58bdd5fc2e5c098ad4bca3ad513a27b15602083fd5bc.png",name:"油猴脚本",desc:"这里是一个提供用户脚本的网站"},{url:"https://getitfree.cn/",icon:"https://getitfree.cn/wp-content/uploads/favicon.ico",name:"正版中国 | 正版软件限时免费",desc:"提供正版软件限时免费信息为途径,引导用户养成使用正版软件的习惯,以此促进国内版权氛围的改进。"}]},{title:"在线工具",icon:"icon-router",item:[{url:"https://tool.lu/",icon:"https://tool.lu/favicon.ico",name:"在线工具",desc:"程序员的工具箱"},{url:"https://www.toolfk.com/",icon:"https://www.toolfk.com/tools/images/icon.png",name:"ToolFk程序员在线开发工具",desc:"在线开发工具,Linux在线命令,在线脑图,JSON代码格式化,PHP混淆/加密/解密工具,在线并发,在线JS/CSS/HTML格式化/压缩。 ,程序猿的在线工具箱"},{url:"https://smallpdf.com/",icon:"https://smallpdf.com/favicon.ico",name:"PDF文件转换",desc:"A Free Solution to all your PDF Problems"},{url:"https://www.hipdf.cn/",icon:"https://www.hipdf.cn/favicon.ico",name:"Hipdf",desc:"一站式在线PDF解决方案"},{url:"https://www.pexels.com/",icon:"https://www.pexels.com/favicon.ico",name:"Pexels",desc:"在线搜图-英文"},{url:"https://tinyjpg.com/",icon:"https://tinyjpg.com/favicon.ico",name:"图片压缩",desc:"图片压缩"},{url:"http://www.nicetool.net/",icon:"http://www.nicetool.net/static/favicon.ico",name:"NICETOOL",desc:"好工具网致力于收集打造各种简单易用在线工具，网友无需注册和下载安装即可使用。"},{url:"https://www.apowersoft.cn/free-online-screen-recorder",icon:"https://cdn.aoscdn.com/img/online-screen-recorder/logo.png?de85",name:"Apowersoft在线录屏",desc:"Apowersoft在线录屏 - 免费高清录屏工具，无水印，无需下载"},{url:"https://exif.tuchong.com/",icon:"https://exif.tuchong.com/favicon.ico",name:"图虫EXIF查看器",desc:"无需下载安装任何软件，直接上传图片即可查看EXIF"},{url:"https://uzer.me/",icon:"https://uzer.me/favicon.ico",name:"UZER.ME--云端超级应用空间",desc:"UZER.ME云端超级应用空间！带给您全新的软件应用方式，提供的全部软件免安装！"},{url:"https://carbon.now.sh/",icon:"https://carbon.now.sh/static/favicon.ico",name:"carbon--代码图片生成",desc:"代码图片生成"},{url:"http://coolaf.com/tool/port",icon:"http://coolaf.com/favicon.ico",name:"postjson--端口检测",desc:"在线端口检测,端口扫描,端口开放检查-在线工具-postjson"},{url:"https://www.yougetsignal.com/tools/open-ports/",icon:"https://www.yougetsignal.com/favicon.ico",name:"国外端口扫描",desc:"国外端口检测"},{url:"https://cn.office-converter.com/",icon:"https://cn.office-converter.com/images/favicon.ico",name:"免费在线文件转换器",desc:"免费在线转换视频,在线音频转换,在线图形转换,在线文档转换和在线压缩格式."}]},{title:"打字练习",icon:"icon-router",item:[{url:"https://zty.pe/",icon:"https://zty.pe/media/favicon.png",name:"z-type",desc:"在线打字游戏"},{url:"https://www.typingclub.com/",icon:"https://www.typingclub.com/m/corp2/img/favicon.png",name:"打字练习",desc:"打字练习"},{url:"https://linci.co/sp/",icon:"https://linci.co/sp/favicon.ico",name:"双拼练习",desc:"双拼练习"},{url:"https://api.ihint.me/shuang/",icon:"https://api.ihint.me/shuang/favicon.ico",name:"双拼练习",desc:"双拼练习"}]}]}),define("data/study",["require"],function(t){"use strict";return[{title:"社区",icon:"icon-router",item:[{url:"https://segmentfault.com/",icon:"https://segmentfault.com/favicon.ico",name:"SegmentFault思否",desc:"SegmentFault 思否 为开发者提供问答、学习与交流编程知识的平台，创造属于开发者的时代！"},{url:"https://juejin.im/timeline",icon:"https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico",name:"掘金",desc:"前端社区"},{url:"http://www.daqianduan.com/",icon:"http://www.daqianduan.com/favicon.ico",name:"大前端-关注前端开发",desc:"大前端是一个关注前端开发、用户体验设计、HTML5、CSS3、Javascript的前端开发独立博客。"}]},{title:"前端",icon:"icon-router",item:[{tag:"教程",url:"https://standardjs.com/rules-zhcn.html#javascript-standard-style",icon:"https://standardjs.com/favicon/favicon.ico",name:"JavaScript Standard Style",desc:"JS Standard 规范"},{tag:"教程",url:"https://www.yuque.com/airing/canvas/readme",icon:"https://www.yuque.com/favicon.ico",name:"CANVAS教程",desc:"CANVAS基础教程"},{tag:"教程",url:"http://es6.ruanyifeng.com/",icon:"http://es6.ruanyifeng.com/favicon.ico",name:"ECMAScript 6 入门",desc:"《ECMAScript 6 入门》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。"},{tag:"博客",url:"https://www.zhangxinxu.com/",icon:"https://www.zhangxinxu.com/favicon.ico",name:"张鑫旭的个人主页",desc:"张鑫旭的个人博客首页，张鑫旭的技术作品，张鑫旭的生活成长"},{tag:"文章",url:"http://taobaofed.org/",icon:"http://taobaofed.org/favicon.ico",name:"Taobao FED | 淘宝前端团队",desc:"用技术为体验提供无限可能"},{tag:"教程",url:"https://wangdoc.com/javascript/",icon:"https://wangdoc.com/favicon.ico",name:"JavaScript 教程",desc:"本教程全面介绍 JavaScript 核心语法，从最简单的讲起，循序渐进、由浅入深，力求清晰易懂。所有章节都带有大量的代码实例，便于理解和模仿，可以用到实际项目中，即学即用。"},{tag:"社区",url:"http://www.jobbole.com/",icon:"http://www.jobbole.com/wp-content/uploads/2015/06/d02a42d9cb3dec9320e5f550278911c7.png",name:"伯乐在线",desc:"专业的IT互联网职业社区。"},{tag:"文章",url:"https://weekly.75team.com/",icon:"https://weekly.75team.com/favicon.ico",name:"奇舞周刊",desc:"我们收集每周前端精华文章，集结成册，每周五推送到微信公众号和知乎专栏。"},{tag:"英文 文章",url:"https://www.notion.so/0ba81e1707ae479b8c2b9ec79fe3a3ce",icon:"https://weekly.75team.com/favicon.ico",name:"前端英文网站汇总",desc:"前端英文网站汇总"},{tag:"CSS",url:"http://caibaojian.com/30-seconds-of-css/",icon:"http://caibaojian.com/30-seconds-of-css/a8de561a148aec60dd3697311c540b29.png",name:"30秒 CSS 代码片段精选",desc:"您可以在30秒或更短时间内理解的有用CSS片段的精选。从基本元素(如clearfix )到渐变文本颜色和渐变光标跟踪，再到CSS缓动等等。"},{tag:"框架资源",url:"https://www.awesomes.cn/",icon:"https://www.awesomes.cn/images/logo.png",name:"Awesomes",desc:"Web前端开发资源库"},{tag:"模拟 联系",url:"https://codepen.io/pens/",icon:"https://static.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg",name:"Explore Pens on CodePen",desc:"CodePen.io是一个浏览器内编码环境,专为学习编码和快速原型创作而设计,最大限度地减少麻烦。"},{tag:"工具",url:"https://caniuse.com/#home",icon:"https://caniuse.com/img/favicon-128.png",name:"Can I use...",desc:"查看技术兼容性"},{tag:"教程",url:"https://learn.freecodecamp.org/",icon:"https://learn.freecodecamp.org/assets/favicon-32x32.png",name:"freeCodeCamp",desc:"数以千计的编码课程来帮助您提高技能。"},{tag:"题库",url:"https://www.codewars.com/dashboard",icon:"https://www.codewars.com/favicon.png",name:"Codewars",desc:"代码解题的社区(支持多种编程语言),根据用户编码水平设置编程段位"},{tag:"题库",url:"https://leetcode-cn.com/",icon:"https://leetcode-cn.com/favicon.png",name:"力扣 LeetCode",desc:"备战技术面试？力扣提供海量技术面试资源，帮助你高效提升编程技能，轻松拿下世界 IT 名企 Dream Offer。"},{tag:"题库",url:"http://scriptoj.mangojuice.top/",icon:"http://scriptoj.mangojuice.top/favicon.ico",name:"ScriptOJ",desc:"Web前端实战代码、面试题目测试"},{url:"http://f2ex.cn/",icon:"http://f2ex.cn/favicon.ico",name:"F2EX",desc:"F2EX – web前端开发|web前端资源库",tag:"题库"},{url:"https://www.html.cn/",icon:"https://www.html.cn/favicon.ico",name:"html中文网",desc:"从html、css到 js，WEB前端开发在线学习视频教程 - html中文网",tag:"文章 教程"}]},{title:"设计",icon:"icon-router",item:[{url:"https://weibo.com/u/3816118370/home?topnav=1&wvr=6",icon:"https://weibo.com/favicon.ico",name:"微博",desc:"随时随地发现新鲜事"}]},{title:"系统",icon:"icon-router",item:[{url:"https://xinqiu.gitbooks.io/linux-insides-cn/content/index.html6",icon:"https://xinqiu.gitbooks.io/linux-insides-cn/content/gitbook/images/favicon.ico",name:"Linux内核揭秘",desc:"一系列关于 Linux 内核和其内在机理的帖子。"}]},{title:"其他",icon:"icon-router",item:[{url:"https://weibo.com/u/3816118370/home?topnav=1&wvr=6",icon:"https://weibo.com/favicon.ico",name:"微博",desc:"随时随地发现新鲜事"}]}]}),define("script/data",["require","data/film","data/life","data/tools","data/study"],function(t,c,n,o,i){"use strict";return[{title:"首页",icon:"icon-shouye-",id:"home",hashUrl:"#",sub:[]},{title:"影视",icon:"icon-yingshi",id:"nav",hashUrl:"#nav?class=1",sub:c},{title:"学习",icon:"icon-xuexi1",id:"nav",hashUrl:"#nav?class=2",sub:i},{title:"生活",icon:"icon-yingshi",id:"nav",hashUrl:"#nav?class=3",sub:n},{title:"工具",icon:"icon-Tools",id:"nav",hashUrl:"#nav?class=4",sub:o}]}),define("script/menu",["require","script/router","text!template/menu.tpl","script/data"],function(t,c,n,o){"use strict";var i=window.CONF.isMobile,e={menuClick:function(){$("#menu").on("click",".item",function(){$(this).addClass("active").siblings().removeClass("active");var t=$(this).find(".item-text .iconfont"),c=$(this).find(".item-text>span")[1].innerHTML;$("#header-title").find("h1").html(c),$("#header-title").find(".iconfont").removeClass().addClass(t.attr("class")),i()&&$(".side").toggleClass("active")})},subMenuClick:function(){$("#menu").on("click",".sub-item",function(){$(this).addClass("active").siblings().removeClass("active");var t=$(this).find(".sub-item-text").text();if($('[data-title="'+t+'"').length){var c=$('[data-title="'+t+'"')[0].offsetTop;$("html, body").animate({scrollTop:c},"500")}var n=$(this).position().top;$(this).siblings().find(".nonius").css("top",n),i()&&$(".side").toggleClass("active")})},toogleMenu:function(){$(".btn-menu").on("click",function(){$(".side").toggleClass("active")})}},a={menuList:function(){var t=Handlebars.compile(n),c=t(o);$("#menu").html(c)}};return function(){e.menuClick(),e.subMenuClick(),i&&e.toogleMenu(),a.menuList()}}),define("script/index",["require","script/router","script/menu"],function(t,c,n){"use strict";n(),c.init()});