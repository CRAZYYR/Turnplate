
function gotopage(e,i) {
	 var t = e; 
     var information = i;
	
		var odd_or_even  = e % 2;
	
		if (odd_or_even == 0) 
		{ 
			//判断如果没有中奖则吧恭喜您变成运气太差了
		var gongxinin = document.getElementById('layer_box_award');
		var gongxininV = gongxinin.getElementsByClassName('bold')[0];
		gongxininV.innerHTML = '您的运气太差了';
		} 
		
    
	 (t == 2|| t == 4|| t==6 ||t==8) && $('#award_name').html(information)&&$('.bold').html() && Dialog.showDiv('layer_box_award'),
     (t == 1) && $('#award_name').html(i) && Dialog.showDiv('layer_box_award') ,
     (t == 3) && $('#award_name').html(i) && Dialog.showDiv('layer_box_award') ,
     (t == 7) && $('#award_name').html(i) && Dialog.showDiv('layer_box_award') ,
     (t == 5) && $('#award_name').html(i) && Dialog.showDiv('layer_box_award') 
}
var isok = !0;
$.fn.block = function(e) {
    var t = $.extend({},
    $.fn.block.defaults, e);
    return this.each(function(e) {
        function a() {
            o = setInterval(function() {
                clearInterval(i),
                s = setInterval(c, 200)
            },
            t.loop * 1e3)
        }
        function f() {
            i = setInterval(l, parseInt(1e3 / (t.grade * 2))),
            a()
        }
        function l() {
            r.children("li.play[pr=" + n + "]").addClass("ov").siblings(".ov").removeClass("ov"),
            n < t.grade - 1 ? n++:n = 0
        }
        function c() {
            n > t.grade - 1 ? n = 0: n++,
            t.step == n && (clearInterval(o), clearInterval(s), isok = !0, t.callback.call()),
            r.children("li.play[pr=" + (n - 1) + "]").addClass("ov").siblings(".ov").removeClass("ov")
        }
        var n;
        n == "undefined" ? n = 0: n = $(this).find(".ov").index();
        var r = $(this),
        i,
        s,
        o,
        u = parseInt(t.step);
        if (!isok) return ! 1;
        isok = !1,
        f()
    })
},
$.fn.block.defaults = {
    grade: 8,
    step: 3,
    loop: 3,
    callback: null
};
var pr = 7;
$.fn.extend({
    picScroll: function() {
        function r() {
            $(".pc_only").css({
                width: e * (t + 1) + "px"
            }).find("ul:first").clone().appendTo(".pc_only"),
            $(".pc_only").animate({
                left: -e + "px"
            },
            1500, 
            function() {
                $(".pc_only").find("ul:first").remove(),
                $(".pc_only").css({
                    left: "0px",
                    width: e * t + "px"
                })
            })
        }
        var e = $(".pc_only").find("ul").width(),
        t = $(".pc_only").find("ul").length;
        $(".pc_only").css("width", e * t + "px");
        var n = setInterval(r, 3e3);
        $(".pc_only").live("mouseenter", 
        function() {
            clearInterval(n)
        }).live("mouseleave", 
        function() {
            n = setInterval(r, 3e3)
        })
    }
});