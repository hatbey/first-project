let currentSlide = 0;

function changeSlide(newSlide) {
 const slides = document.getElementsByClassName('slide');
 slides[currentSlide].style.transform = 'translateX(-100%)';
 slides[newSlide].style.transform = 'translateX(0%)';
 currentSlide = newSlide;
}

setInterval(() => {
 changeSlide((currentSlide + 1) % 3);
}, 3000);


var windowW, windowH, clickCondition=0, slidesLength,IndexNext, currentSlide,currentParent, tempCheck=true;
$(document).ready(function() {
	carousel();
	windowW= $(window).width();
	$(".leftNavSpec").click(function(){
		var currentElement= $(this);
		leftCarouselNav(currentElement);
	});
	$(".RightNavSpec").click(function(){
		var currentElement= $(this);
		rightCarouselNav(currentElement);
	});
	$(".bulletsNavSpec ul li").click(function(){
		var currentElement= $(this);
		navBullets(currentElement);
	});
});
$(window).resize(function(){
	getSliderHeight();
});
$(window).load(function(){
	getSliderHeight();
	carousel();
});
function getSliderHeight()
{
	windowW= $(window).width();
	var expectedHeight= parseInt($(".SpecDataSlides").eq(0).find("img").height());
	if (windowW>760) {
		$(".SpecDataWrap").css("min-height",(expectedHeight - 100) + "px");
	}
	else
	{
		expectedHeight= expectedHeight + parseInt($(".SpecDataSlides").eq(0).find(".SpecDesc").outerHeight()) + 40;
		$(".SpecDataWrap").css("min-height",expectedHeight + "px");
	}
}
function carousel()
{
	$(".SpecDataSlides").css("left","100%");
	$(".SpecDataWrap").each(function(){
		$(this).find(".SpecDataSlides").eq(0).css("left","0%");
	});
}
function leftCarouselNav(currentElement)
{
	if(clickCondition==0)
	{
		clickCondition=1;
		slidesLength=currentElement.parent(".SpecSlideNavigation").siblings(".SpecDataSlides").length;
		slidesLength=slidesLength-1;
		currentParent=currentElement.parent(".SpecSlideNavigation");
		currentSlide=currentParent.siblings(".activeNavSlide").index();
		currentParent.siblings(".InActiveNavSlide").css("left","-100%");
		if (currentSlide!=0) {
			IndexNext = currentParent.siblings(".activeNavSlide").index() - 1;
		}
		else
		{
			IndexNext=slidesLength;
		}
		currentParent.siblings(".activeNavSlide").animate({left:"100%"},1000,function(){
			$(this).removeClass("activeNavSlide").addClass("InActiveNavSlide");
			$(this).css("left","100%");
			clickCondition=0;
		});
		currentParent.siblings(".SpecDataSlides").eq(IndexNext).animate({left:"0%"},1000,function(){
			$(this).removeClass("InActiveNavSlide").addClass("activeNavSlide");
			currentElement.siblings(".bulletsNavSpec").find("ul li").removeClass("activeImage").addClass("InActiveImage");
			currentElement.siblings(".bulletsNavSpec").find("ul li").eq(IndexNext).removeClass("InActiveImage").addClass("activeImage");
			clickCondition=0;
		});
	}
}
function rightCarouselNav(currentElement)
{
	if(clickCondition==0)
	{
		clickCondition=1;
		slidesLength=currentElement.parent(".SpecSlideNavigation").siblings(".SpecDataSlides").length;
		slidesLength=slidesLength-1;
		currentParent=currentElement.parent(".SpecSlideNavigation");
		currentSlide=currentParent.siblings(".activeNavSlide").index();
		currentParent.siblings(".InActiveNavSlide").css("left","100%");
		if (currentSlide!=slidesLength) {
			IndexNext = currentParent.siblings(".activeNavSlide").index() + 1;
		}
		else
		{
			IndexNext=0;
		}
		
		currentParent.siblings(".activeNavSlide").animate({left:"-100%"},1000,function(){
			$(this).removeClass("activeNavSlide").addClass("InActiveNavSlide");
			$(this).css("left","100%");
			clickCondition=0;
		});
		currentParent.siblings(".SpecDataSlides").eq(IndexNext).animate({left:"0%"},1000,function(){
			$(this).removeClass("InActiveNavSlide").addClass("activeNavSlide");
			currentElement.siblings(".bulletsNavSpec").find("ul li").removeClass("activeImage").addClass("InActiveImage");
			currentElement.siblings(".bulletsNavSpec").find("ul li").eq(IndexNext).removeClass("InActiveImage").addClass("activeImage");
			clickCondition=0;
		});
	}
}
function navBullets(currentElement)
{
	if(clickCondition==0)
	{
		clickCondition=1;
		slidesLength=currentElement.parent(".SpecSlideNavigation").siblings(".SpecDataSlides").length;
		slidesLength=slidesLength-1;
		currentParent=currentElement.parents(".SpecSlideNavigation");
		currentParent.siblings(".InActiveNavSlide").css("left","100%");
		IndexNext= currentElement.index();
		if(currentElement.hasClass("InActiveImage"))
		{
			currentParent.siblings(".activeNavSlide").animate({left:"-100%"},1000,function(){
				$(this).removeClass("activeNavSlide").addClass("InActiveNavSlide");
				$(this).css("left","100%");
				clickCondition=0;
			});
			currentParent.siblings(".SpecDataSlides").eq(IndexNext).animate({left:"0%"},1000,function(){
				$(this).removeClass("InActiveNavSlide").addClass("activeNavSlide");
				currentElement.siblings("li").removeClass("activeImage").addClass("InActiveImage");
				currentElement.removeClass("InActiveImage").addClass("activeImage");
				clickCondition=0;
			});
		}
		else
		{
			clickCondition=0;
		}
	}
}



$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
   
        "singleItem:true" is a shortcut for:
        items : 1, 
         itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false
   
    });
   
  });