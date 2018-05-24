
	// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(121.537241,31.2453);
    map.centerAndZoom(poi, 28);
    map.enableScrollWheelZoom();
	map.disableScrollWheelZoom();
	// 覆盖区域图层测试
	map.addTileLayer(new BMap.PanoramaCoverageLayer());

	var stCtrl = new BMap.PanoramaControl(); //构造全景控件
	stCtrl.setOffset(new BMap.Size(20, 20));
	map.addControl(stCtrl);//添加全景控件
	// 添加带有定位的导航控件
  var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  // 添加定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map.addControl(geolocationControl);

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="http://www.shhuamei.cn/imagesV3/mapLogo.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：上海市源深路155号<br/>电话：021-58856655<br/>简介：坐落于上海浦东小陆家嘴商圈，紧邻浦东大道，交通便利，停车方便。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "上海华美医疗美容医院",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
	searchInfoWindow.open(marker);
	marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
