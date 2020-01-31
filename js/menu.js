(function($) {
	
	"use strict";
	
	
	
//Update Header Style and Scroll to Top
	function headerStyleTwo() {
		if($('.main-header-two').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header-two');
			var fixedmenubg = $('.fixed-menu-bg');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 50) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
				fixedmenubg.slideDown(500);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
				fixedmenubg.slideUp(300);
			}
		}
	}
	
	headerStyleTwo();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header-two .navigation li.dropdown ul').length){
		$('.main-header-two .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header-two .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Dropdown Menu / Fullscreen Nav
		$('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	// toggler btn
	if($('.nav-toggler .toggler-btn').length){
		$('.nav-toggler .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');

		});
	}


	// Side Fixed Nav One
	$('.side-nav-one .navigation li.dropdown > a').on('click', function(e) {
		e.preventDefault();
	});
	$('.side-nav-one li.dropdown a').on('click', function(){
		$(this).next('.sub-menu').slideToggle(400);			
	})

	// Side Fixed Nav Two
	$('.side-nav-two .navigation li.dropdown > a').on('click', function(e) {
		e.preventDefault();
	});
	$('.side-nav-two .navigation li.dropdown > a').addClass('hide-dropdown');
	$('.side-nav-two li.dropdown a').on('click', function(){
		
		if ($(this).parent().hasClass('dropdown')) {
            if ($(this).hasClass('hide-dropdown')) {
                if ($(this).closest('.sub-menu').length) {
                    $(this).removeClass('hide-dropdown').next('.sub-menu').slideDown(400);
                    $(this).parent().siblings().find('.sub-menu').slideUp(400);
                } else {
                    $('.side-nav-two li.dropdown a').addClass('hide-dropdown').next('.sub-menu').hide(100);
                    $(this).removeClass('hide-dropdown').next('.sub-menu').slideToggle(400);
                }
            } else {
                $(this).addClass('hide-dropdown').next('.sub-menu').hide(100).find('.side-nav-two li.dropdown a').addClass('hide-drop').next('.sub-menu').hide(100);
            }
        }
			
	})



	//Open Main Menu
	if($('.popup-menu').length){
		var togglebtn = $('.nav-toggler .toggler-btn');
		$('.main-header .nav-toggler .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$('.popup-menu').fadeToggle(500);
			$('.popup-menu').toggleClass('active');
		});
		$('.popup-menu .popup-nav .navigation > li > a').on('click', function() {
			$('.popup-menu').fadeToggle(500);
			$('.popup-menu').toggleClass('active');
			togglebtn.toggleClass('active');
		});
	}
	
	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul').onePageNav();
	}
    
    
    //Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var fixedmenubg = $('.fixed-menu-bg');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
				fixedmenubg.slideDown(1500);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
				fixedmenubg.slideUp(1500);
			}
		}
	}
	
	headerStyle();
    
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Dropdown Menu / Fullscreen Nav
		$('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
    
    //Hidden Sidebar
	if ($('.hidden-bar,.fullscreen-menu').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.nav-toggler-two');
		var hiddenBarCloser = $('.hidden-bar-closer,.close-menu');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			$('body').addClass('visible-menu-bar');
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			$('body').removeClass('visible-menu-bar');
			hiddenBar.removeClass('visible-sidebar');
		});
	}	
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-angle-right fa-angle-down');

				return false;

			});
		});
	}

	hiddenBarMenuConfig();
    
    //Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-box-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}

	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
        headerStyle();
		headerStyleTwo();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		headerStyle();
	});	

})(window.jQuery);