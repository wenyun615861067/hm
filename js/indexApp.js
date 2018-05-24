// JavaScript Document
var huameiV3 = {
	init: function() {
		var _this = this;
		_this.moreItems();
		_this.slideMenu();
		_this.footerSlide();
		if ($(".stage1").length > 0) {
			_this.indexAnliSlide();
			_this.expertSlide();
		};
		_this.topSearch();
		_this.searchItems();
		/*顶部菜单延迟加载*/
		setTimeout(function() {
			$(".menu ul").addClass("active");
		}, 500);
		setTimeout(function() {
			$(".topLogo .searchBox").fadeIn(600);
		}, 5000);
		/*首页新闻滚动播放*/

		function AutoScroll(obj) {
			var objHeight = $(obj).height();
			$(obj).find("ul:first").animate({
				marginTop: -objHeight + "px"
			}, 500, function() {
				$(this).css({
					marginTop: "0px"
				}).find("li:first").appendTo(this);
			});
		};
		if ($(".newsScroll")) {
			setInterval(function() {
				AutoScroll(".newsScroll")
			}, 4500);
		}
		/*hot图标上下抖动*/
		setInterval(function(){
				$(".subMenuLinkBox a.hot,.subMenu .bside a.hot,.zhutiWripper a.hot,.stage1Title span,.stage5Title span").toggleClass("active");
			},2000)



	},
	/*更多项目js*/
	moreItems: function() {
		$(".seoMenus").slide({
			mainCell: '.seoContentBox',
			titCell: '.seoFocus a',
			effect: 'fade',
			mouseOverStop:true,
			titOnClassName: 'active'
		})
	},
	/*slideDownMenu  顶部下拉菜单*/
	slideMenu: function() {
		$(".banner .menu ul").slide({
			type: "menu",
			titCell: '.subNav',
			targetCell: '.subMenu',
			effect: 'slideDown',
			titOnClassName: 'active',
			delayTime:200, triggerTime:100
		});
		$(".banner .menu ul li").each(function(index, element) {
			var left = $(".banner .menu ul li").width() * index;
			$(".banner .menu ul li").eq(index).find(".subMenu").css({
				left: -left + 'px'
			});
			$(this).mouseleave(function(e) {
				e.preventDefault();
				$(this).removeClass("active").find(".subMenu").removeClass("active");
			});
		});
	},
	/*监管单位、授权合作等项目切换js*/
	footerSlide: function() {
		$(".footerSlides").slide({
			mainCell: '.slideBox',
			titCell: '.slideFocus span',
			effect: 'fade',
			titOnClassName: 'active',
			trigger: 'click',
			endFun:function(i,c){
					var slideBox = document.getElementById("slideBox");
					slideBox.style.height = slideBox.children[i].offsetHeight+'px';
					if(i>0)slideBox.style.transition = slideBox.style.mozTransition= slideBox.style.webkitTransition="200ms";//添加动画效果
				}
		});
	},
	/*stage1 案例对比轮播 安全与服务管理   特邀专家*/
	indexAnliSlide: function() {
		/*案例对比*/
		$(".stage3_a").slide({
			mainCell: '.stage3Box',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 6000,
			delayTime:1200
		});
		$(".stage3_b").slide({
			mainCell: '.stage3Box',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 6000,
			delayTime:1200
		});
		$(".stage3_c").slide({
			mainCell: '.stage3Box',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 6000,
			delayTime:1200
		});
		$(".stage3_d").slide({
			mainCell: '.stage3Box',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 6000,
			delayTime:1200
		});
		/*安全与服务管理*/
		$(".stage1_a").slide({
			mainCell: '.stage1_anliBox',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 6000,
			delayTime:1200
		});
		/*特邀专家*/
		$(".stage1_c").slide({
			mainCell: '.slideBox',
			titCell: '.focus',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPage: '<span></span>',
			autoPlay: true,
			mouseOverStop:true,
			titOnClassName: 'active',
			interTime: 6000,
			delayTime:1200
		});

	},
	/*stage2 了解与查找专家切换*/
	expertSlide: function() {
		/*右侧专家切换*/
		/*首先对里进行分组*/
		$(".doctorsWrapper li").each(function(i) {
			$(".doctorsWrapper li").slice(i * 12, i * 12 + 12).wrapAll("<ul></ul>");
		});
		$(".doctorsBox").slide({
			mainCell: '.doctorsWrapper',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
		});
		/*右侧专家鼠标移入特效*/
		memberShow("doctorsBox");
		/*右侧专家与查找切换*/
		$(".stage2 .stage_b").slide({
			mainCell: '.slides',
			titCell: '.focus span',
			effect: 'fold',
			titOnClassName: 'active',
			startFun: function(i, c) {
				$(".stage2 .stage_b .focus .active_bg").css({
					left: i * 50 + '%'
				});
			}
		});
		/*左侧专家大图切换*/
		$(".stage2 .stage_a,.expertSlides").mouseenter(function() {
			$(".stage2 .stage_a,.expertSlides").find(".preBtn,.nextBtn").fadeIn(600);
		}).mouseleave(function() {
			$(".stage2 .stage_a,.expertSlides").find(".preBtn,.nextBtn").fadeOut(600);
		});
		$(".stage2").slide({
			mainCell: '.stage_a .slideBox',
			titCell: '.itemExperts a',
			effect: 'leftLoop',
			prevCell: '.stage_a .preBtn',
			nextCell: ' .stage_a .nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			scroll: 1,
			vis: 1,
			interTime: 6500,
			titOnClassName: 'active'
		});

	},
	/*顶部搜索框切换js*/
	topSearch: function() {
		$(".searchSwitchs").slide({
			mainCell: '.switchBox',
			titCell: '.switchBtn li',
			effect: 'fade',
			prevCell: '',
			nextCell: '',
			autoPlay: false,
			scroll: 1,
			vis: 1,
			interTime: 6500,
			titOnClassName: 'active'
		});
	},
	/*顶部搜索框下拉列表*/
	searchItems: function() {
		function itemFun() {
			this.items = {};
		};
		itemFun.prototype = {
			// body...
			add: function(id, iArray) {
				this.items[id] = iArray;
			},
			exist: function(id) {
				if (typeof(this.items[id]) == "undefined") return false;
				return true;
			}
		};
		/*初始化下拉数据*/
		var itemsObj1 = new itemFun();
		/*itemsObj1.add("0", ["面部年轻化", "眼部整形", "鼻部整形", "胸部整形","面部轮廓", "形体雕塑", "皮肤美容", "微整形", "私密整形", "口腔美容", "毛发移植"]);*/
		itemsObj1.add("0", [{
			src: "/huameipro/young/#t1",
				txt: '面部年轻化'
			}, {
				src: "/huameipro/yanbu/#t1",
				txt: '眼部'
			}, {
				src: "/huameipro/bibu/#t1",
				txt: '鼻部'
			}, {
				src: "/huameipro/xiongbu/#t1",
				txt: '胸部'
			}, {
				src: "/huameipro/mianbu/#t1",
				txt: '面部'
			}, {
				src: "/huameipro/zhifang/#t1",
				txt: '脂肪'
			}, {
				src: "/huameipro/weizhenx/#t1",
				txt: '微整形'
			}, {
				src: "/huameipro/pifu/#t1",
				txt: '皮肤'
			}, {
				src: "/huameipro/simi/#t1",
				txt: '私密整形'
			}, {
				src: "/huameipro/kouqiang/#t1",
				txt: '口腔'
			}, {
				src: "/huameipro/maofa/#t1",
				txt: '毛发'
			}]);
		//找专家搜索数据  $(".item3 ul")
		itemsObj1.add("0_11", [{
				src: "/experts/young/#t1",
				txt: '面部年轻化'
			}, {
				src: "/experts/eyezhenx/#t1",
				txt: '眼部整形'
			}, {
				src: "/experts/bzhenx/#t1",
				txt: '鼻部整形'
			}, {
				src: "/experts/xzhenx/#t1",
				txt: '胸部整形'
			}, {
				src: "/experts/zzhenx/#t1",
				txt: '脂肪塑形'
			}, {
				src: "/experts/mzhenx/#t1",
				txt: '面部整形'
			}, {
				src: "/experts/pzhenx/#t1",
				txt: '皮肤美容'
			}, {
				src: "/experts/wzhenx/#t1",
				txt: '微整形'
			}, {
				src: "/experts/szhenx/#t1",
				txt: '私密整形'
			}, {
				src: "/experts/kzhenx/#t1",
				txt: '口腔美容'
			}, {
				src: "/experts/fzhenx/#t1",
				txt: '毛发移植'
			}

		]);
		//console.log(itemsObj.items);

		var isOpen = false,
			/*默认一级菜单未加载，将不能直接出发二级下拉列表加载*/
			hasLink = false,
			/*下拉菜单是否包含链接*/
			hasNextSelect = false,
			parentActiveIndex = 0,
			tempName = "0"; /*是否还有下一级下拉列表*/
		/*parseUlLists下拉列表数据填充*/

		function parseUlLists(obj, arrIndex, itemJson,hasLink) {
			var elementsStr = "";
			var dataSoure = itemJson.items[arrIndex];
			var ininLen = dataSoure.length;
			for (var i = 0; i < ininLen; i++) {
				if (hasLink) {
					elementsStr += "<li><a target='_blank' href='" + dataSoure[i].src + "' data-src='" + dataSoure[i].src + "'>" + dataSoure[i].txt + "</a></li>";
				} else {
					elementsStr += "<li><a href='javascript:void(0)'>" + dataSoure[i] + "</a></li>";
				}

			}
			var dataDropLists = obj;
			dataDropLists.empty().append(elementsStr).css({
				position: "absolute",
				left: 0,
				top: dataDropLists.parent().height()-1 + "px",
				width: dataDropLists.parent().width() + 'px'
			});

		};
		var obj1 = $(".item1");
		parseUlLists(obj1.children("ul"), '0', itemsObj1,true);
		$(".item1 i").on("click",function(){
						obj1.children("ul").stop().slideToggle(600)
			})
		obj1.find("li").each(function(){
				$(this).click(function(e) {
					var _this = $(this).parent("ul").siblings("i");
                    _this.attr("data-src", $(this).find("a").attr("data-src"));
					_this.text($(this).text());
					obj1.children("ul").slideUp(600);
					//随机数消失
					obj1.find(".itemNum").fadeOut();

                });
			});

			$(".keywordSelect i").on("click",function(){
				$(".stage_b").css("overflow",'visible');
				var _self = $(this);
				var hasLink = true;
				var obj = $(this).siblings("ul");
				parseUlLists(obj, '0_11', itemsObj1,hasLink);
				obj.stop().slideToggle(600);
				obj.find("li").each(function(index, element) {
				$(this).click(function(e) {
					if(hasLink){
							_self.attr("data-src", $(this).find("a").attr("data-src"));
						}
					_self.text($(this).text());
					obj.stop().slideUp(600);
				});
			});
			});
		$(".switch1 .bt").on("click", function() {
			if($(".item1 i").attr("data-src")!= ""){
						$(this).attr({
					"href": $(".item1 i").attr("data-src"),
					"target": "_blank"
				});
			}else{
					alert("选择您想要改变的部位!")
				}
		});
		$(".keywordSelect .bt").on("click", function() {
			if($(".keywordSelect i").attr("data-src")!=""){
			$(this).attr({
				"href": $(".keywordSelect i").attr("data-src"),
				"target": "_blank"
			});}else{
					alert("选择您想要改变的部位!")
			}
		});
		$(".keywordSelect ul,.item1 ul ").mouseleave(function(e) {
                $(this).slideUp(600);
            });
	},
	/*followNav js*/
	followNav: function() {
		var sTop = $(document).scrollTop();
		var followTop = 0;
		if ($(".popBox")) {
			if ($(".popBox").hasClass("popOpen")) {
				followTop += $(".popBox").height();
			}
		};
		followTop = followTop + $(".header").height() + $(".banner").height();
		if (sTop >= followTop) {
			$(".followNav").addClass("active");
		} else {
			$(".followNav").removeClass("active");
		}
		//console.log(followTop)
	}

};
$(function() {
	huameiV3.init();
	$(".bannerSlide").mouseenter(function(e) {
        $(this).find(".bt").fadeIn()
    }).mouseleave(function(e) {
         $(this).find(".bt").fadeOut()
    });


	//banner轮播
	if ($(".bannerSlide li").length >1) {
			$(".banner").slide({
			mainCell: '.slideBox ul',
			titCell: '.focus',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPage: '<span></span>',
			autoPlay: true,
			mouseOverStop:true,
			titOnClassName: 'active',
			interTime: 9000,
			delayTime:800,
			endFun: function(i, c) {
				$(".bannerSlide .slideBox li").removeClass("active").eq(i + 1).addClass("active");
				/*if(i==2){
					$(".bannerSlide .slideBox li").removeClass("active");
					$("#banneranliVideo1")[0].play();
				}*/
				/*if(i==4){
					$(".bannerSlide .slideBox li").removeClass("active");
					$("#banneranliVideo2")[0].play();
				}*/
				//else if(i==1){
				//	$(".bannerSlide .slideBox li").removeClass("active");
				//	$("#banneranliVideo1")[0].play();
				//}else{
					//$("#banneranliVideo")[0].pause();
				//}

				// if(i==2){
				// 	$("#banneranliVideo1")[0].play();
				// }else{
				// 	$("#banneranliVideo1")[0].pause();
				// }
			}
		});}
	if($("#sideNav").length>0){
			var pathUrl = window.location.pathname ;
			var hash = window.location.hash;
			var targetUl = $("#sideNav ul ");
			var urlArr=[];
			targetUl.find("li").each(function(index, element) {
                	urlArr.push($(this).find("a").attr("href"));
            });
			if(hash!=""){
					pathUrl=pathUrl+hash;
					hash = hash.split("#")[1];
					var i = $("."+hash).index();
					$(".expertWrapper .focus span").removeClass("active").eq(i).addClass("active");
				}
			for(var i=0,j=urlArr.length;i<j;i++){
					if(pathUrl ==urlArr[i] ){
						targetUl.find("li").eq(i).find("a").addClass("active");
						}
				}

		}
		if($(".anliCon").length>0){
			var pathUrl = window.location.pathname ;
			var hash = window.location.hash;
			var targetUl = $(".anliCon .hd ul ");
			var urlArr=[];
			targetUl.find("li").each(function(index, element) {
                	urlArr.push($(this).find("a").attr("href"));
            });
			if(hash!=""){
							pathUrl=pathUrl+hash;
							hash = hash.split("#")[1];
							var i = $("."+hash).index();
							console.log(i)
							$(".anliCon .hd ul li").removeClass("on").eq(i).addClass("on");
								}
			for(var i=0,j=urlArr.length;i<j;i++){

					if(pathUrl ==urlArr[i] ){
						targetUl.find("li").removeClass("on").eq(i).addClass("on");
						}
				}
		}



})
$(window).on("load scroll DomMouseScroll", function() {
	if ($(".followNav").length>0) {
		huameiV3.followNav();
	}
})

$(function(){
        $(".stage5slide").mouseover(function(){
            $(".mask").css("display","none");
        })
		$(".stage5slide").mouseout(function(){
		    $(".mask").css("display","block");
		});
    })
