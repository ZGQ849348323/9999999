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
