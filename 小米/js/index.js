new Vue({
	el:"#carL",
	data:{
		car:["手机 电话卡","电视 盒子","笔记本 平板","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音响","生活 箱包"],
	}
})
// new Vue({
// 	el:"#tta",
// 	data:{
// 		tt:["小米手机","小米手机","电视","笔记本","家电","路由器","智能硬件","服务","社区"]
// 	}
// })

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

// var n = 0;
var nArr = [0,0,0,0];
$(".atn2").click(function(){
	$this=$(this);
	console.log(this.dataset.i)
	let i = this.dataset.i;
	if(nArr[i]==2) {
		return;
	}
	nArr[i]++;
	$this.siblings('ul').css("margin-left",-296*nArr[i]+"px").css("transition","margin-left 0.5s ease");
	$this.siblings('ul').children('li').children('ul').children(`li:nth-child(${nArr[i]})`).children('span').removeClass('lala');
	$this.siblings('ul').children('li').children('ul').children(`li:nth-child(${nArr[i]})`).next().children('span').addClass('lala');
})

$(".atn1").click(function(){	
	$this=$(this);
	let i = this.dataset.i;
	if(nArr[i]==0) {
		return;
	}
	nArr[i]--;
	$this.siblings('ul').css("margin-left",-296*nArr[i]+"px").css("transition","margin-left 0.5s ease");
	// console.log(n)
	$this.siblings('ul').children('li').children('ul').children(`li:nth-child(${nArr[i]+2})`).children('span').removeClass('lala');
	$this.siblings('ul').children('li').children('ul').children(`li:nth-child(${nArr[i]+2})`).prev().children('span').addClass('lala');
})

$(".carLeft ul li").click(function(){
	$this=$(this);
	var index=this.dataset.index;
	var show=this.dataset.style;
	// console.log(this.dataset.style)
	console.log(this.dataset.index)
	$(".category-item div").eq(index).addClass('active').siblings().removeClass('active')
	
})
