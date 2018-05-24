
		/*判断移动平板设备横竖屏状态 动态计算缩放比例*/
		function orientationChange(){
			var oWidth = 1340;
			var scale = 0;
			var windowWidth= window.screen.width;
			var windowHeight =window.screen.height;
			var viewport = document.getElementById("viewport");
			switch(window.orientation){
				case 0://代表横屏度数
				case 180://旋转180deg  还是代表横屏
				scale = (windowWidth/oWidth).toFixed(2);
				viewport.content='width=device-width,initial-scale='+scale+',minimum-scale='+scale+', maximum-scale=1,user-scalable=yes';
				//alert("横屏 "+scale+"  "+windowWidth+"  "+windowHeight);
				break;
				case 90://代表竖屏度数
				case -90://代表竖屏度数
				scale = (windowHeight/oWidth).toFixed(2);
				viewport.content='width=device-width,initial-scale='+scale+',minimum-scale='+scale+', maximum-scale=1,user-scalable=yes';
				//alert("竖屏 "+scale+"  "+windowWidth+"  "+windowHeight);
				break;
			};
			
		};
		window.addEventListener("DOMContentLoaded",function(){
			creatMeta();
		});
		function creatMeta(){
			var metaByTagName = document.getElementsByTagName("meta")[0];
			var oParents = metaByTagName.parentNode;	
			var meta  = document.createElement("meta");
			meta.name="viewport";
			meta.id="viewport";
			meta.content="";
			oParents.insertBefore(meta,metaByTagName);
			//加载时动态获取缩放比例
			orientationChange();
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" :"resize",function(){
			orientationChange();
		});