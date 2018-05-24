document.writeln("    <style>");
document.writeln("        .acLeftXf{position:fixed;width:149px;left:-149px;top:50%;margin-top:-250px;z-index:999}");
document.writeln("        .acLeftXf>h3{position: relative;}");
document.writeln("        .acLeftXf .xfClose{position:absolute;left:107px;top:-9px}");
document.writeln("        .acLeftXf>a{display:block}");
document.writeln("        .acLeftXf>a,.acLeftXf>h3{-webkit-transition:all .2s;transition:all .2s}");
document.writeln("        .acLeftXf>a.fadeLeft,.acLeftXf>h3.fadeLeft{-webkit-transform:translateX(149px);transform:translateX(149px);opacity:1}");
document.writeln("    </style>");
document.writeln("    <div class=\'acLeftXf\'>");
document.writeln("        <h3>");
document.writeln("            <img src=\'images/185hd1.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd1.png*/ alt=\'\'>");
document.writeln("            <a href=\'javascript:void(0)\' class=\'xfClose\'>");
document.writeln("                <img src=\'images/closeN.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/closeN.png*/ alt=\'\'>");
document.writeln("            </a>");
document.writeln("        </h3>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd2.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd2.png*/ alt=\'\'></a>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd3.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd3.png*/ alt=\'\'></a>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd4.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd4.png*/ alt=\'\'></a>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd5.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd5.png*/ alt=\'\'></a>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd6.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd6.png*/ alt=\'\'></a>");
document.writeln("        <a href=\'../zt/185hd/index.htm#xf\'/*tpa=http://www.shhuamei.cn/zt/185hd/#xf*/><img src=\'images/185hd7.png\'/*tpa=http://www.shhuamei.cn/huodongJs/images/185hd7.png*/ alt=\'\'></a>");
document.writeln("    </div>");
$(function() {
        var xfConCh=$(".acLeftXf").children();
        var isTop = true;
        var length =  xfConCh.length;
        $(window).on("load scroll", function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop >= 430) {
                if (isTop) {
                     xfConCh.each(function(i, e) {
                        $(e).css({
                            '-webkit-transition-delay': "" + 0.1 * i + "s",
                            'transition-delay': "" + 0.1 * i + "s",
                        });
                        if(!$(e).hasClass('fadeLeft')){
                             $(e).addClass('fadeLeft');
                        }
                    });
                }
            } else {
                xfConCh.each(function(i, e) {
                    $(e).css({
                        '-webkit-transition-delay': "" + 0.1 * (length - i - 1) + "s",
                        'transition-delay': "" + 0.1 * (length - i - 1) + "s"
                    });
                    $(e).removeClass('fadeLeft');
                });
            }
        });
        $(".acLeftXf .xfClose").on("click", function() {
            isTop = false;
           	xfConCh.each(function(i, e) {
                    $(e).css({
                        '-webkit-transition-delay': "" + 0.1 * (length - i - 1) + "s",
                        'transition-delay': "" + 0.1 * (length - i - 1) + "s"
                    });
                    $(e).removeClass('fadeLeft');
                });
            
        });
    })