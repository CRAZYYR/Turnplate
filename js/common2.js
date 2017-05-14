
//弹窗
var Dialog={
	showDiv:function(Dsobj,mask){
		if(Dsobj===null || Dsobj===undefined){alert("参数未定义！");return false;}
		if(mask==true||mask==undefined){Dialog.showMask();}
		jQuery(".layerbox").hide();
		$Dsobj=jQuery("#"+Dsobj);
		$Dsobj.stop();
		var wHeight = jQuery(window).height();
		var scrollTop = jQuery(window).scrollTop();
		var oHeight = $Dsobj.css("height").replace(/px/,'')/2
		var offsetHeight = wHeight/2+scrollTop - oHeight;
		if(offsetHeight < 0) offsetHeight = 0;
		var w = $Dsobj.css("width");	
		var marginleft = w.replace(/px/,'')/2;
		$Dsobj.addClass("layerbox");
		$Dsobj.css({"position":"absolute","left": "50%","z-index":"100","margin-left":-marginleft});
		$Dsobj.css("top",offsetHeight).show()
		jQuery('.closePop').unbind();
		jQuery('.closePop').bind('click', function(){Dialog.close();})
		switch(Dsobj){
			case "layer_box_rule":
				$('#scrollbar1').tinyscrollbar({sizethumb:29});	
				break;
			case "layer_box_award":
				$('#layer_box_award').show();
			}
			var bro=$.browser;
		if(bro.msie&&bro.version==6){
			$("select").css('display','none');
		}	
		Dialog.preDsobj=Dsobj;
		return false;
	},
	showMask : function(){
		var height = jQuery(document).height();
		jQuery("body").append("<div style='background:#000; display:none; filter:alpha(opacity=60);opacity: 0.6; z-index:99;  width:100%;  		position:absolute; left:0; top:0;'  id='bgdiv'></div>");
		jQuery("#bgdiv").css("height",height);
		jQuery("#bgdiv").fadeIn();
	},
	close : function(){
		$(".layerbox").hide()
		$("#bgdiv").remove();
		
	}
}