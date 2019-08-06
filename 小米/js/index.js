new Vue({
	el:"#carL",
	data:{
		car:["手机 电话卡","电视 盒子","笔记本 平板","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音响","生活 箱包"],
	}
})


$(".dongHua1").mouseover(function(){
	// var $index=$(this).index();
	// $(".show").eq($index).show()
	// $(".dongHua").mouseout(function(){
	// 	$(".show").eq($index).hide()
	// })
	$this = $(this);
	// console.log($this);
	// console.log($this.children('.mask'))
	$this.children('.mask').addClass('show');
	$(".dongHua1").mouseout(function () { 
	$this.children('.mask').removeClass('show');
		
	})

})

$(".hot-saleM").mouseover(function(){
	// $(".atn1").show();
	$this=$(this);
	$this.children(".atn1,.atn2").show();
	$(".hot-saleM").mouseout(function(){
		$this.children(".atn1,.atn2").hide();
	})
})

//切换
var n = 0;
$(".atn2").click(function(){
	if(n==2) {
		return;
	}
	n++;
	$this=$(this);
	$this.siblings('ul').css("margin-left",-296*n+"px").css("transition","margin-left 0.5s ease");
})
$(".atn1").click(function(){	
	if(n==0) {
		return;
	}
	$this=$(this);
	n--;
	$this.siblings('ul').css("margin-left",-296*n+"px").css("transition","margin-left 0.5s ease");
	
})

