(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			//var scrollLink = $('.scroll-to-top');
			if (windowpos >= 300) {
				siteHeader.addClass('fixed-header');
				//scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				//scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	//Open Main Menu
	if($('.main-header-bar .nav-toggler .toggler-btn').length){
		$('.main-header-bar .nav-toggler .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$('.main-nav-outer').toggleClass('now-visible');
		});
	}
	
	//Main Menu Dropdown Toggle
	if($('.main-nav-box .navigation > li.dropdown > ul').length){
		
		//Show Submenu
		$('.main-nav-box .navigation > li.dropdown > a').on('click', function(e) {
			e.preventDefault();
			$(this).parent('li').addClass('open');
			$(this).parents('.navigation').addClass('subnav-visible');
		});
		
		//Hide Submenu
		$('.main-nav-box .navigation li > a[href="#menu-back"]').on('click', function(e) {
			e.preventDefault();
			$(this).parents('.navigation').removeClass('subnav-visible');
			$(this).parents('li').removeClass('open');
		});
		
	}
	
	//Submenu Dropdown Toggle
	if($('.header-style-two li.dropdown ul').length){
		$('.header-style-two li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.header-style-two li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.header-style-two .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	

	
	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}
	
	//Update Fixed Nav Position
	function fixedNavStyle() {
		if($('.fixed-top-bar').length){
			var windowHeight = $(window).height();
			var windowpos = $(window).scrollTop();
			var fixedBar = $('.fixed-top-bar');
			if (windowpos >= windowHeight) {
				$('body').addClass('banner-height-reached');
				fixedBar.addClass('now-fixed');
			} else {
				$('body').removeClass('banner-height-reached');
				fixedBar.removeClass('now-fixed');
			}
		}
	}
	
	fixedNavStyle();
	
	//Hide Bootstrap Menu On Click over Mobile View
	$('.scroll-nav li a').on('click', function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			$('.nav-outer .navbar-toggle').trigger( "click" );
		}
	});
	
	
	if ($(".banner-slider").length > 0) {

	    // Banner Slider
		var bannerSlider = new Swiper('.banner-slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			mousewheel: false,
			height: 500,
			grabCursor: true,
			loop: true,
			speed: 1400,
			autoplay: {
			    delay: 5000,
			},
			pagination: {
                el: '.banner-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.banner-slider-button-next',
                prevEl: '.banner-slider-button-prev',
            },
		});
		bannerSlider.on('slideChange', function() {
            var csli = bannerSlider.realIndex + 1,
                curnum = $('#current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10
                    });
                    curnum.html('0' + csli);
                }
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut
            });
        });
        
        var totalSlides = bannerSlider.slides.length - 2;
        $('#total').html('0' + totalSlides);
	}
	
		//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}
	
	
	//Single Item Carousel
	if ($('.priching-carousel').length) {
		$('.priching-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//Single Item Carousel
	if ($('.gilk-carousel').length) {
		$('.gilk-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 5000,
			autoplay: 5000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
	
	//Single Item Carousel
	if ($('.about-testimonials').length) {
		$('.about-testimonials').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 5000,
			autoplay: 5000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
	
	//testimonial-carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	//testimonial-03-carousel
	if ($('.testimonial-03-carousel').length) {
		$('.testimonial-03-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1200,
			autoplay: 4000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//testimonial-04-carousel
	if ($('.testimonial-04-carousel').length) {
		$('.testimonial-04-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1200,
			autoplay: 4000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//testimonial-04-carousel
	if ($('.testimonial-06-carousel').length) {
		$('.testimonial-06-carousel').owlCarousel({
			loop:true,
			mode: 'fade',
			margin:30,
			nav:true,
			smartSpeed: 1200,
			autoplay: 4000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//blog-carousel
	if ($('.blog-carousel').length) {
		$('.blog-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
	
	//clients-carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			mode: 'horizontal',
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
		//testimonial-05-carousel
	if ($('.testimonial-05-carousel').length) {
		$('.testimonial-05-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 5000,
			autoplay: 4000,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	//Single Item Carousel
	if ($('.news-06-carousel').length) {
		$('.news-06-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			center: true,
			smartSpeed: 1000,
			autoplay: onoffline,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	//testimonial-05-carousel
	if ($('.one-item-carousel').length) {
		$('.one-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 5000,
			autoplay: 4000,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	
	//Sortable Masonary with Filters
	function sortableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});

	        $container.isotope("on", "layoutComplete", function(a, b) {

                var a = b.length,
                    pcn = $(".portfolio-pagination .current");
                TweenMax.to(pcn, 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        TweenMax.to(pcn, 0.1, {
                            force3D: true,
                            y: 10
                        });
                        pcn.html(a);
                    }
                });
                TweenMax.to(pcn, 0.2, {
                    force3D: true,
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    ease: Power2.easeOut
                });
            });

            var mi = $(".masonry-item").length;
                $(".portfolio-pagination .total").html(mi);            
		}
	}
	
	sortableMasonry();
	
	
	//Hide Bootstrap Menu On Click over Mobile View
	$('.scroll-nav li a').on('click', function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			$('.nav-outer .navbar-toggle').trigger( "click" );
		}
	});
	
	
	function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).find('.form-result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
}
	

	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	

	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal',
			  transition: 'transform 15s ease-in' // vertical, horizontal  
		});
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	//LightBox / Fancybox
	function lightbox() {
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox({
				openEffect  : 'fade',
				closeEffect : 'fade',
				helpers : {
					media : {}
				}
			});
		}
	}
	lightbox();
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	//progressBarConfig
	function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 100);

	        Self.find('span.value').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 100
	        });
	      });
	    })
	  }
	}
	
	//Round Progress Bar
	if($('.height-bar').length){
		$('.height-bar').appear(function(){
			var el = $(this);
			var percent = el.data('height');
			$(el).css('height',percent+'%');
		},{accY: 0});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	

	
	function animate_text(){
	
		"use strict";

		var animateSpan			= jQuery('.text_word');

			animateSpan.typed({
				strings: ["Freelancer", "UI/UX Designer", "Web Developer"],
				loop: true,
				startDelay: 1e3,
				backDelay: 2e3
			});
	}
	
	function slider_text(){
	
		"use strict";

		var animateSpan			= jQuery('.slider_word');

			animateSpan.typed({
				strings: ["Landing Page<i>.</i>", "Mobile App<i>.</i>", "Website<i>.</i>"],
				loop: true,
				startDelay: 1e3,
				backDelay: 2e3
			});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	
	
    $(window).on ('scroll', function (){ // makes sure the whole site is loaded

        $('.about-05').each(function(){
			$(this).find('.content').addClass('active');
			$('.slider-03 ').removeClass('active');
		});

    });
	
	
    jQuery(window).on("scroll", function() {
        // 4. animate elements
        if (jQuery(this).scrollTop() > 400) {
            jQuery(".border-top").addClass("show");
            jQuery(".border-bottom").addClass("show");
            jQuery(".border-left").addClass("show");
            jQuery(".border-right").addClass("show");
			jQuery(".fixed-top-bar").addClass("now-fixed");
        } else {
            jQuery(".border-top").removeClass("show");
            jQuery(".border-bottom").removeClass("show");
            jQuery(".border-left").removeClass("show");
            jQuery(".border-right").removeClass("show");
            jQuery(".fixed-top-bar").removeClass("now-fixed");
        }
    });
    
    jQuery(window).on("scroll", function() {
        // 4. animate elements
        if (jQuery(this).scrollTop() > 1090) {
			jQuery(".fixed-right-nav").addClass("now-fixed");
        } else {
			jQuery(".fixed-right-nav").removeClass("now-fixed");
        }
    });
	
	(function($){
		$(window).enllax();
	})(jQuery);
	
	//Update Sidebar Progress Line
	function sidebarProgressLine() {
		if($('.fixed-left-column .page-progress-bar').length){
			var progressLineBar = $('.fixed-left-column .page-progress-bar .bar-inner .page-progress');
			var pageHeight = $(document).height();
			var windwoHeight = $(window).height();
			var windowPos = $(window).scrollTop();
			var progressLineBarWidth = windowPos / (pageHeight - windwoHeight) * 100;
			$(progressLineBar).css('width',(progressLineBarWidth + '%'));
		}
	}
	
	sidebarProgressLine();
    
    function scrollnav() {
        var a = jQuery(".fixed-right-nav.two .scroll-nav li").length;
        var b = jQuery(".fixed-right-nav.two .scroll-nav").width();
        jQuery(".fixed-right-nav.two .scroll-nav li").css({
            width: b / a
        });
    }
    scrollnav();
    
    function scrollnavtwo() {
        var a = jQuery(".fixed-right-nav.three li").length;
        var b = jQuery(".fixed-right-nav.three").width();
        jQuery(".fixed-right-nav.three li").css({
            width: b / a
        });
    }
    scrollnavtwo();
    
    jQuery(window).on("scroll", function() {
        // 4. animate elements
        if (jQuery(this).scrollTop() > 0) {
			jQuery(".fixed-right-nav.three").addClass("now-fixed");
        } else {
			jQuery(".fixed-right-nav.three").removeClass("now-fixed");
        }
    });
    
    jQuery(window).on("scroll", function() {
        // 4. animate elements
        if (jQuery(this).scrollTop() > 100) {
			jQuery(".slider-04").addClass("show");
        } else {
            jQuery(".slider-04").removeClass("show");
        }
    });
	
	/* 8. ScrollAnimations */
	var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
	$containers.scrollAnimations();
	
/* ==========================================================================
	When document is resize, do
   ========================================================================== */
   $(window).on('resize', function() {
		sidebarProgressLine();
        scrollnav();
        scrollnavtwo();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		sidebarProgressLine();
		fixedNavStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		sortableMasonry();
		contactFormValidation();
		progressBarConfig();
		animate_text();
		slider_text();
		sidebarProgressLine();
	});	

})(window.jQuery);