$(document).ready(function(){
  //轮播图自动播放
  $('#myCarousel').carousel({
    //设置时间为4秒
    interval:4000,
  });
  $(".article").mouseover(function(){
			$(this).css({"box-shadow":'5px 5px 20px #6C6969'});
		});
	$(".article").mouseout(function(){
			$(this).css({'box-shadow':"5px 5px 20px #A7A3A3"});
    });
  $(".list-group-item").mouseover(function(){
    $(this).css({'font-size':"18px"});
    });
    $(".list-group-item").mouseout(function(){
      $(this).css({'font-size':"15px"});
      });
  $(document).ready(function(){
    	$("#intro-text").fadeToggle();
      $("#intro-text").fadeToggle("slow");
    	$("#intro-text").fadeToggle(3000);
  	});
   $(window).scroll(function() {
        if ($(window).scrollTop() > 1000)
            $('div.go-top').show();
        else
            $('div.go-top').hide();
    });
    $('div.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});
