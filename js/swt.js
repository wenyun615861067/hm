// //引用商务通
//
// document.writeln("<script type=\"text/javascript\" src=\"http://vip6-kf9.kuaishang.cn/bs/ks.j?cI=838804&fI=63573\" charset=\"utf-8\"><\/script>");
//
// var onKST = function (text) {
//
//     //请替换成"生成代码 - 链接地址" 中的链接地址,不要去其他地方复制
//
//     ksChatLink = 'http://vip6-kf9.kuaishang.cn/bs/im.htm?cas=55096___838804&fi=63573&ism=1';
//
//     /**
//
//      * 若强行打开新窗口,则放开设置,不设置则手机不打开新窗口,pc打开新窗口,此设置只对当前自定义事件有效
//
//      * 若想全局生效,包括快商通默认的打开聊天窗口事件,则将此变量ksUserDefinedOpenNewChatWin定义在ks.js前即可
//
//      */
//
//     //var ksUserDefinedOpenNewChatWin=true;
//
//
//     //验证参数是否存在
//
//     function checkQueryString(params, name) {
//
//         if (!params)return false;
//
//         return new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i").test(params);
//
//     }
//
//     //获取URL参数值
//
//     function getQueryString(url, name) {
//
//         var index = url.indexOf('?');
//
//         if (index == -1)return '';
//
//         url = url.substr(index + 1, url.length);
//
//         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//
//         var r = url.match(reg);
//
//         if (r != null) return unescape(r[2]);
//
//         return '';
//
//     }
//
//     var openNewChatWin;
//
//     var localArr = ksChatLink.split("?");
//
//     localArr.push("");
//
//     if (typeof ksUserDefinedOpenNewChatWin != 'undefined' && ksUserDefinedOpenNewChatWin == true) {
//
//         openNewChatWin = true;
//
//     } else if (checkQueryString(localArr[1], 'ism')) {
//
//         openNewChatWin = false;
//
//     } else {
//
//         openNewChatWin = true;
//
//     }
//
//     //打开快商通聊天窗口链接
//
//     function ksOpenLink() {
//
//         var appendTailUrl = '';
//
//         try {
//
//             var cas = getQueryString(ksChatLink, 'cas');
//
//             if (cas) {
//
//                 var vi = '';
//
//                 var dc = document.cookie.match(new RegExp('(^| )' + cas + '_KS_' + cas + '=([^;]*)(;|$)'));
//
//                 if (dc != null) {
//
//                     vi = unescape(dc[2]);
//
//                 }
//
//                 if (vi) {
//
//                     appendTailUrl += '&vi=' + vi;
//
//                 }
//
//             }
//
//         } catch (e) {
//         }
//
//         var ref = "";
//
//         try {
//             if (opener.document.referrer.length > 0) {
//                 ref = opener.document.referrer;
//             }
//         } catch (e) {
//             ref = document.referrer;
//         }
//
//         if (!ref || ref.length == 0) {
//             ref = document.referrer;
//         }
//
//         //对话网址
//
//         appendTailUrl += '&dp=' + encodeURIComponent(window.location.href);
//
//         //访客来源
//
//         if (ref)appendTailUrl += '&ref=' + encodeURIComponent(ref);
//
//         //对话标识
//
//         if (text)appendTailUrl += '&sText=' + encodeURIComponent(text);
//
//         if (ksChatLink.indexOf('?') == -1) {
//             appendTailUrl = appendTailUrl.substring(1) + '?';
//         }
//
//         ksChatLink += appendTailUrl;
//
//         //根据openNewChatWin设置打开聊天窗口
//
//         if (!openNewChatWin) {
//
//             window.location.href = ksChatLink;
//
//         } else {
//
//             var ksWin = window.open(ksChatLink, '_blank');
//
//             if (ksWin) {
//
//                 try {
//                     ksWin.focus();
//                 } catch (e) {
//                 } //将焦点定位到聊天窗口
//
//             }
//
//         }
//
//     }
//
//     //如果快商通代码有加载完成,则使用快商通默认的打开聊天窗口事件,否则使用自定义的打开事件
//
//     if (typeof KS != 'undefined') {
//
//         var p = {};
//
//         if (text)p['sText'] = text;
//
//         if (openNewChatWin)p['oTarget'] = '_blank';
//
//         try {
//
//             if (typeof KS.openChatWin == 'function') {
//
//                 KS.openChatWin(p);
//
//             } else if (typeof KS.openChatLink == 'function') {
//
//                 KS.openChatLink(p);
//
//             } else {
//
//                 ksOpenLink();
//
//             }
//
//         } catch (e) {
//
//             ksOpenLink();
//
//         }
//
//     } else {
//
//         ksOpenLink();
//
//     }
//
// };
//
// function openZoosUrl() {
//
//     return onKST();
//
// }

document.writeln("<link href=\"css/swt_style.css\" rel=\"stylesheet\"/>");

document.writeln("<div class=\"swtRirhgt translateY\"> <a href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"  target=\"_self\" class=\"commonIcon swtLink\"><em>5</em></a>");

document.writeln("  <div class=\"freeTell\">");

document.writeln("    <div class=\"container clearfix\"> <a href=\"javascript:void(0)\" class=\"commonIcon1 tellIcon fl\"></a>");

document.writeln("      <div class=\"tellForm fl\">");

document.writeln("      	<div class=\"inner clearfix\">");
document.writeln('     	<form name="f" id="f" method="post" action="http://tel.kuaishang.cn/calld.php" target="aa">');
document.writeln('      	<input type="hidden" name="fromurl" id="call_fromurl" value="" />');
document.writeln('      	<input type="hidden" name="sid" value="2017261853" />');
document.writeln('      	<input type="hidden" name="did" value="1011976" />');
document.writeln("        <input type=\"text\" name=\"tel\" id=\"tel\" class=\"tellNumberTxt fl\" onblur=\"if(!value)value=defaultValue\" onfocus=\"value=\'\'\" value=\"请输入您的电话号码\"/>");

document.writeln("        <a href=\"javascript:void(0)\" class=\"tellNumberBtn fl\" title=\"免费回电\">免费回电</a></form> </div>");
document.writeln('<iframe name="aa" id="aa" frameborder="0" width="0" height="0"></iframe>');
document.writeln("        </div>");

document.writeln("    </div>");

document.writeln("  </div>");

document.writeln("  <a href=\"http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDAyNTMwN18yMjUzN184MDAwMjUzMDdfMl8\" class=\"commonIcon qqLink\" target=\"_blank\"></a>");

document.writeln("  <a href=\"/zt/wx/\" target=\"_blank\" class=\"commonIcon wxLink\"><div></div></a>");
document.writeln("  <a href=\"javascript:void(0)\" class=\"commonIcon scrollTop\"></a>");

document.writeln("</div>");

document.writeln("");


document.writeln("<div class=\"KSTwinBox animated1 \">");

document.writeln("    	<div class=\"KSTCloseBtn absolute\"><img src=\"images/swtCenterCloseBtn.png\" width=\"22\" height=\"22\"/></div>");

document.writeln("    	<div class=\"KSTlogo clearfix\">");

document.writeln("<i class=\"HMlogo fl\">嗨~我是华小美，有问题可以咨询我哦~<b>V</b></i>");

document.writeln("<!--/*            <i class=\"DIDIlogo fl\"><img src=\"images/didi.png\" width=\"106\" height=\"35\"/></i>*/-->");

document.writeln("        </div>");

document.writeln("        <div class=\"KSTimg relative\">");

document.writeln("        	<img src=\"images/KSTimg.jpg\" width=\"500\" height=\"238\"/>");

document.writeln("            <div class=\"tellFormcen absolute\">");
document.writeln('     	<form name="f" id="f" method="post" action="http://tel.kuaishang.cn/calld.php" target="aa">');
document.writeln('      	<input type="hidden" name="fromurl" id="call_fromurl" value="" />');
document.writeln('      	<input type="hidden" name="sid" value="2017261853" />');
document.writeln('      	<input type="hidden" name="did" value="1011976" />');
document.writeln("			<input type=\"text\" onblur=\"if(!value)value=defaultValue\" onfocus=\"value=\'\'\" value=\"请输入您的电话号码\" class=\"tell_numcen\" name=\"tel\" id=\"tel\">");

document.writeln("			<a href=\"javascript:void(0)\" class=\"subCen_btn\" id=\"subCen_btn\">免费回电</a>");
document.writeln("      	</form>");
document.writeln("        </div>");

document.writeln("        </div>");

document.writeln("        <div class=\"txt clearfix\">");

document.writeln("        	<div class=\"scrollNotice fl\">");

document.writeln("            	<ul>");
/*document.writeln("                    <li><a href=\"/zt/bns/#tc\" target=\"_blank\">[微整风暴]伊婉玻尿酸 特价1280元</a></li>");*/
document.writeln("                    <li><a href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\">[到院礼]1000元购美基金限量20份</a></li>");
document.writeln("                </ul>");

document.writeln("            </div>");

document.writeln("            <div class=\"KSTnavs fl clearfix\">");

document.writeln("            	<a href=\"/\" target=\"_blank\">网站首页</a>");

document.writeln("              <a href=\"/zt/185hd\" target=\"_blank\">最新活动</a>");

document.writeln("              <a href=\"/anli_new/diary/#tc\" target=\"_blank\">手术日记</a>");

document.writeln("            </div>");

document.writeln("        </div>");

document.writeln("        <div class=\"KSTChatBox clearfix\">");

document.writeln("        	<textarea class=\'textarea\'>在此输入可直接对话,快速咨询...</textarea>");

document.writeln("            <a href=\"javascript:void(0)\" class=\"KSTsendTxtBtn fl\"><p>发送<br/><small>Enter</small></p></a>");

document.writeln("        </div>");

document.writeln("    </div>");

document.writeln("");


document.writeln("<div class=\"swtBottom\" id=\"swtBottom\">");

document.writeln("	<div class=\"titleBox\">");

document.writeln("    	<span>预约平台</span>");

document.writeln("        <a href=\"javascript:void(0)\" class=\"closeBtn\"></a>");

document.writeln("    </div>");

document.writeln("    <div class=\"chatBox\">");

document.writeln("    	<div class=\"welcomeWord\">无创美容周，史上最低价，仅此1周。");

document.writeln("</div>");

document.writeln("    </div>");

document.writeln("    <div class=\"chatTxt clearfix\">");

document.writeln("    	<div class=\"txt fl\"><textarea class=\"textarea\" id=\"myInput\"  >在此输入可直接对话,快速咨询...</textarea></div>");

document.writeln("        <a href=\"javascript:void(0)\"  class=\"txtSubmit fl\" target=\"_self\"><span>发送</span><span>Enter</span></a>");

document.writeln("    </div>");

document.writeln("</div>");

$(function () {


//活动结束

    function openSwtCenter(duration) {

        setTimeout(function () {

            $(".KSTwinBox").show().removeClass("fadeInDown1").addClass("fadeInDown1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationend animationend', function () {

                console.log("可以在此添加其他操作！")

            });

        }, duration);

    }

    //第一次打开 等待10秒钟，商务通弹窗弹出

    openSwtCenter.apply(this, [10000]);

    //生成咨询随机数

    function GetRandomNum(Min, Max) {

        var Range = Max - Min;

        var Rand = Math.random();

        return (Min - Math.round(Rand * Range));

    }

    var num = GetRandomNum(40, 70);

    $(".swtCenter i").html(num);
	$(".znqCounter").html(num);


    //搜索栏随机数

    var num1 = GetRandomNum(1, -3);

    $(".itemNum").html(num1);


    //商务通右侧   swtRirhgt执行效果

    $(".freeTell").on("mouseenter", function (e) {

        $(this).find(".container").stop().animate({left: -246 + 'px'}, 600)

    }).on("mouseleave", function () {

        $(this).find(".container").stop().animate({left: 0}, 400)

    });

    //商务通中心关闭按钮

    $(".KSTCloseBtn").on("click", function () {

        console.log("close");

        $(".KSTwinBox").removeClass("fadeInDown1").addClass("fadeOutDown1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationend animationend', function () {

            $(this).removeClass("fadeOutDown1").hide();

            $(".swtBottom").addClass("active");

        });

    });

    //去除字符串前后空格

    function trim(str) {

        return (str || "").replace(/^\s+|\s+$/g, "");

    };

    //获取用户输入框输入的文字，然后发送到快商通主对话窗口

    var defaultTxt = "在此输入可直接对话,快速咨询...";

    function getSendTxt(_this) {

        var text = _this.find(" textarea").val();

        var sendTxt = $.trim(_this.find(" textarea").val());

        if (sendTxt == defaultTxt) {

            sendTxt = "";

            _this.find(" textarea").val(defaultTxt);

        } else {

            _this.find(" textarea").val(sendTxt);

        }

        console.log(sendTxt);

        console.log(sendTxt.length);

        KS.openChatWin({cv: sendTxt, sText: '新版弹窗'});

    };


    $(".swtBottom .txtSubmit").on("click", function () {

        getSendTxt($(".swtBottom"));

    })

    //右下角

    $(".swtBottom").find(".closeBtn").on("click", function () {

        $(this).parents(".swtBottom").removeClass("active");

        openSwtCenter.apply(this, [70000]);

    });

    $(".swtBottom").find("textarea").keyup(function (e) {

        if (e.which == 13) {

            getSendTxt($(".swtBottom"));

        }

    });

    $(".textarea").on("focus", function () {

        var txt = $(this).val();

        if (txt == defaultTxt) {

            $(this).val("");

        }

    });

    $(".textarea").on("blur", function () {

        var txt = $(this).val();

        if (txt == "") {

            $(this).val(defaultTxt);

        }

    });

    function AutoScroll(obj) {

        var objHeight = $(obj).height();

        $(obj).find("ul:first").animate({

            marginTop: -objHeight + "px"

        }, 500, function () {

            $(this).css({

                marginTop: "0px"

            }).find("li:first").appendTo(this);

        });

    };

    setInterval(function () {

        AutoScroll(".scrollNotice")

    }, 5500);

    $(".KSTsendTxtBtn").on("click", function () {

        getSendTxt($(".KSTChatBox"));

    });

    $(".KSTChatBox").find("textarea").keyup(function (e) {

        if (e.which == 13) {

            getSendTxt($(".KSTChatBox"));

        }

    });



    // center电话回拨触发

    $("#subCen_btn").on("click", function () {

 			$(".KSTwinBox #f").submit();
    });

	$(".swtRirhgt .tellNumberBtn").on("click", function () {

 			$(".swtRirhgt #f").submit();
    });
    //电话回拨触发


    /*返回顶部*/

    function pageScroll() {

        //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）

        window.scrollBy(0, -100);

        //延时递归调用，模拟滚动向上效果速度

        scrolldelay = setTimeout(function () {
            pageScroll()
        }, 10);

        //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值

        var sTop = document.documentElement.scrollTop + document.body.scrollTop;

        //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）

        if (sTop == 0) clearTimeout(scrolldelay);

    };

    $(".swtRirhgt .scrollTop").on("click", function (e) {

        pageScroll();

    })


});

window.addEventListener("load",function(){
	function getStr(_this,num){
							if(num<10){
									_this.find("span").eq(0).text("0");
									_this.find("span").eq(1).text(num);
								}else{
										var arr = num.toString().split("");
										_this.find("span").eq(0).text(arr[0]);
										_this.find("span").eq(1).text(arr[1]);
									}
	};
	function getTimer(element) {
		  var millSecond = new Date('2017/12/31 23:59:59').getTime();
		  var now = new Date().getTime();
		  setTimeout(function () {
				if (millSecond - now > 0) {
				  getTimer(element);
				} else {
				  return false;
				}
		  }, 1000 * 60);
		  var days = Math.floor((millSecond - now) / 3600 / 24 / 1000);
		  getStr(element,days);
	};
	new getTimer($(".days"));
},false);
/*引用电话JS*/

// document.write('<script type="text/javascript"  data-lxb-uid="482950" data-lxb-gid="68023" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"><\/script>');

document.writeln("<script>");

document.writeln("(function(){");

document.writeln("    var bp = document.createElement(\'script\');");

document.writeln("    var curProtocol = window.location.protocol.split(\':\')[0];");

document.writeln("    if (curProtocol === \'https\') {");

document.writeln("        bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';        ");

document.writeln("    }");

document.writeln("    else {");

document.writeln("        bp.src = \'http://push.zhanzhang.baidu.com/push.js\';");

document.writeln("    }");

document.writeln("    var s = document.getElementsByTagName(\"script\")[0];");

document.writeln("    s.parentNode.insertBefore(bp, s);");

document.writeln("})();");

document.writeln("</script>");

//document.writeln("<script src=\'/huodongJs/huodong.js\'></script>");
(function(){
	var url_no = window.location.pathname;
	if(url_no != "/zt/185hd/"){
	document.writeln("<script src=\'js/huodong.js\'></script>");
    //document.writeln("<script src=\'/huodongJs/lzyVideo.js\'></script>");
/*周年庆内专题导航*/
	/*var fixNavSize = $(".fixBar .navs a").size();
	for(var i=0;i<fixNavSize;i++){
		var navUrl = $(".fixBar .navs a").eq(i).attr("href");
		if(navUrl == url_no){
			$(".fixBar .navs a").eq(i).addClass("active")
			return false;
		}
	}*/
}
})()
/*圣诞节*/
/*document.writeln("<script src=\'/js/jquery.cookie.js\'></script>");
document.writeln("<script src=\'/christmas/js/christmas.js\'></script>");*/

function updateNavPosition(obj,childObj,className){
    obj.siblings('li').find(childObj).removeClass(className);
    obj.find(childObj).addClass(className);
}
//链接切换
var linkChange = new Swiper('.linkContent .swiper-container', {
    on:{
        slideChangeTransitionStart:function(){
            $('.linkNav ul').find('li').eq(linkChange.activeIndex).siblings('li').find('div').removeClass('linkActive');
            $('.linkNav ul').find('li').eq(linkChange.activeIndex).find('div').addClass('linkActive');
        },
    }
});

$('.linkNav ul').find('li').click(function(){
    var oLi = $(this);
    var oIndex = oLi.index();
    updateNavPosition(oLi,'div','linkActive');
    linkChange.slideTo(oIndex, 1000, false);//切换到第一个slide，速度为1秒
});

//底部专家切换
$('.footerdiv2Nav').find('li').click(function(){
    var footerNum = $(this).index();
    var len = $('.footerdiv2Nav').find('li').length;
    console.log(len);
    $(this).siblings('li').find('p').removeClass('footerActive');
    for(var i = 0; i < len; i++){
        $('.footerdiv2Nav').find('li').eq(i).find('img').attr("src","images/footer_icon"+ (i+1) + ".png");
    };
    $(this).find('img').attr("src","images/footer_icon" + (footerNum + 1) + "_active.png");
    $(this).find('p').addClass('footerActive');
    $('.footerdiv2Box').find('.footerdiv2div').hide();
    $('.footerdiv2Box').find('.footerdiv2div').eq(footerNum).show();
});
