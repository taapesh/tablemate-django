$(document).ready(function(){
	"use strict";

	/*
	var iScrollPos = 0;
 	$(window).scroll(function () {
 		
 		if($(window).scrollTop() >= 250) {
 			$('.main-logo').addClass('main-logo-alt');
 			$('.menu-btn').addClass('menu-btn-alt');
 			//$('.top-bar').addClass('main-sticky-nav');
 		} else {
 			$('.main-logo').removeClass('main-logo-alt');
 			$('.menu-btn').removeClass('menu-btn-alt');
 			$('.top-bar').removeClass('main-sticky-nav');
 		}
 		
    	var iCurScrollPos = $(this).scrollTop();
    	var threshold = 25;
		if (iCurScrollPos > iScrollPos) {
    		//Scrolling Down
    		if($(window).scrollTop() >= threshold) {
    			$('.top-bar').fadeOut();
    		}
		} else {
   			//Scrolling Up
   			$('.top-bar').fadeIn();
   			if($(window).scrollTop() >= threshold) {
   				$('.top-bar').addClass('alt-nav');
   				$('.menu-btn').addClass('black-alt');
   				$('.main-logo').addClass('black-alt');
   			} else {
   				$('.top-bar').removeClass('alt-nav');
   				$('.menu-btn').removeClass('black-alt');
   				$('.main-logo').removeClass('black-alt');
   			}
   			$('.top-bar').fadeIn();
		}
    	iScrollPos = iCurScrollPos;
	});
	*/

	// Offscreen Nav
	$('.offscreen-toggle').click(function(){
		$('.main-container').toggleClass('reveal-nav');
		$('.offscreen-container').toggleClass('reveal-nav');
		$('.offscreen-menu .container').toggleClass('reveal-nav');
	});
	
	$('.main-container').click(function(){
		if($(this).hasClass('reveal-nav')){
			$('.main-container').toggleClass('reveal-nav');
			$('.offscreen-container').toggleClass('reveal-nav');
			$('.offscreen-menu .container').toggleClass('reveal-nav');
		}
	});
	
	// Detect logo dimensions and add correct class
	
	var logoImage = $('.top-bar .logo:first-of-type');
	
	var theImage = new Image();
	theImage.src = logoImage.attr("src");
	
	var logoWidth = theImage.width;
	var logoHeight = theImage.height;
	var logoRatio = logoWidth / logoHeight;
	
	if(logoRatio > 2.8){
		$('.top-bar .logo').addClass('logo-wide');
	}
	
	if(logoRatio < 2){
		$('.top-bar .logo').addClass('logo-square');
	}
	
	// Smooth scroll
	$('.inner-link').smoothScroll({offset: -96, speed: 800});
	
	// Mobile Toggle
	
	$('.mobile-toggle').click(function(){
		$('nav').toggleClass('open-nav');
	});
	
	// Fullscreen nav toggle
	
	$('.fullscreen-nav-toggle').click(function(){
		if(!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')){
			$('.fullscreen-nav-container').addClass('show-fullscreen-nav');
			setTimeout(function(){
				$('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
			},100);
			$(this).addClass('toggle-icon');
		}else{
			$(this).removeClass('toggle-icon');
				$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
			setTimeout(function(){
				
				$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
			},500);
		}
	});	
	
	$('.fullscreen-nav-container .menu li a').click(function(){
		$('.fullscreen-nav-toggle').removeClass('toggle-icon');
			$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
		setTimeout(function(){
			$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
		},500);
	});
	
	// Margin first section for top bar
	
	if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
		$('.main-container').first().css('margin-top', $('nav').outerHeight());
	}
	
	$(window).resize(function(){
		if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
			$('.main-container').first().css('margin-top', $('nav').outerHeight());
		}
	});
	
	// Pad first section for overlay bar
	
	if($('nav').hasClass('overlay-bar') || $('nav').hasClass('contained-bar') ){
		var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
		var newPad = currentPad + $('nav').outerHeight() - 48;
		if(currentPad > 0){
			$('.main-container').children(':first').css('padding-top', newPad);
		}else if($('.main-container').find(':first').hasClass('hero-slider')){
			var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
			var newHeight = height + $('nav').outerHeight();
			$('.hero-slider .slides li').css('height', newHeight);
		}
	}
	
	
	// Fullwidth Subnavs
	
	// Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.container').width());
			var offset = $(this).closest('.has-dropdown').offset();
			offset = offset.left;
			var containerOffset = $(window).width() - $('.container').outerWidth();
			containerOffset = containerOffset /2;
			offset = offset - containerOffset - 15;
			$(this).css('left', -offset);
        });
    });

	// Slider Initializations
	$('.fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});

    $(window).resize(function() {
        $('.fullscreen-element').each(function(){
            $(this).css('height', $(window).height());
        });
    });

	// Feature Selector
    var okSwitch = 0;
	$('.selector-1').click(function(){
        $('.selector-2').removeClass('active-selector');
        $('.selector-3').removeClass('active-selector');
        $('.selector-1').addClass('active-selector');

        $('.circle-1').addClass('fa-circle');
        $('.circle-1').removeClass('fa-circle-thin');

        $('.circle-2').removeClass('fa-circle');
        $('.circle-3').removeClass('fa-circle');
        $('.circle-2').addClass('fa-circle-thin');
        $('.circle-3').addClass('fa-circle-thin');

        $('.feature-2').hide();
        $('.feature-3').hide();
        $('.feature-1').fadeIn();

        okSwitch++;
        setTimeout(myFunction, 4500);
    });
    $('.selector-2').click(function(){
        $('.selector-1').removeClass('active-selector');
        $('.selector-3').removeClass('active-selector');
        $('.selector-2').addClass('active-selector');

        $('.circle-2').addClass('fa-circle');
        $('.circle-2').removeClass('fa-circle-thin');

        $('.circle-1').removeClass('fa-circle');
        $('.circle-3').removeClass('fa-circle');
        $('.circle-1').addClass('fa-circle-thin');
        $('.circle-3').addClass('fa-circle-thin');

        $('.feature-1').hide();
        $('.feature-3').hide();
        $('.feature-2').fadeIn();
        
        okSwitch++;
        setTimeout(myFunction, 4500);
    });
    $('.selector-3').click(function(){
        $('.selector-1').removeClass('active-selector');
        $('.selector-2').removeClass('active-selector');
        $('.selector-3').addClass('active-selector');

        $('.circle-3').addClass('fa-circle');
        $('.circle-3').removeClass('fa-circle-thin');

        $('.circle-1').removeClass('fa-circle');
        $('.circle-2').removeClass('fa-circle');
        $('.circle-1').addClass('fa-circle-thin');
        $('.circle-2').addClass('fa-circle-thin');

        $('.feature-1').hide();
        $('.feature-2').hide();
        $('.feature-3').fadeIn();
        
        okSwitch++;
        setTimeout(myFunction, 4500);
    });

    $('.selector-1').hover(
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-1').addClass('fa-circle-o');
            $('.circle-1').removeClass('fa-circle-thin');
        },
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-1').addClass('fa-circle-thin');
            $('.circle-1').removeClass('fa-circle-o');
        }
    );
    $('.selector-2').hover(
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-2').addClass('fa-circle-o');
            $('.circle-2').removeClass('fa-circle-thin');
        },
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-2').addClass('fa-circle-thin');
            $('.circle-2').removeClass('fa-circle-o');
        }
    );
    $('.selector-3').hover(
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-3').addClass('fa-circle-o');
            $('.circle-3').removeClass('fa-circle-thin');
        },
        function(){
            if($(this).hasClass('active-selector')) return;
            $('.circle-3').addClass('fa-circle-thin');
            $('.circle-3').removeClass('fa-circle-o');
        }
    );

	function myFunction() {
        okSwitch--;
    }
    window.setInterval(function(){
        if(okSwitch != 0) return;

        if ($('.selector-1').hasClass('active-selector')) {
            $('.selector-1').removeClass('active-selector');
            $('.selector-3').removeClass('active-selector');
            $('.selector-2').addClass('active-selector');

            $('.circle-2').addClass('fa-circle');
            $('.circle-2').removeClass('fa-circle-thin');

            $('.circle-1').removeClass('fa-circle');
            $('.circle-3').removeClass('fa-circle');
            $('.circle-1').addClass('fa-circle-thin');
            $('.circle-3').addClass('fa-circle-thin');

            $('.feature-1').hide();
            $('.feature-3').hide();
            $('.feature-2').fadeIn();
        } else if ($('.selector-2').hasClass('active-selector')) {
            $('.selector-1').removeClass('active-selector');
            $('.selector-2').removeClass('active-selector');
            $('.selector-3').addClass('active-selector');

            $('.circle-3').addClass('fa-circle');
            $('.circle-3').removeClass('fa-circle-thin');

            $('.circle-1').removeClass('fa-circle');
            $('.circle-2').removeClass('fa-circle');
            $('.circle-1').addClass('fa-circle-thin');
            $('.circle-2').addClass('fa-circle-thin');

            $('.feature-1').hide();
            $('.feature-2').hide();
            $('.feature-3').fadeIn();
        } else {
            $('.selector-2').removeClass('active-selector');
            $('.selector-3').removeClass('active-selector');
            $('.selector-1').addClass('active-selector');

            $('.circle-1').addClass('fa-circle');
            $('.circle-1').removeClass('fa-circle-thin');

            $('.circle-2').removeClass('fa-circle');
            $('.circle-3').removeClass('fa-circle');
            $('.circle-2').addClass('fa-circle-thin');
            $('.circle-3').addClass('fa-circle-thin');

            $('.feature-2').hide();
            $('.feature-3').hide();
            $('.feature-1').fadeIn();
        }
    }, 4500);

	// Append .background-image-holder <img>'s as CSS backgrounds
	
	$('.background-image-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background', 'url("' + imgSrc + '")');
    	$(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
	});
	
	// Accordion
	
	$('.accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});
	
	/************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.main-container section:first-child').addClass('first-child');

    $('.parallax-background').each(function () {

        if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
            $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');

        } else {

            $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
            $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');

        }

    });
    
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
        
        // Multi Layer Parallax
    
		$('.hover-background').each(function(){
			$(this).mousemove(function( event ) {
				$(this).find('.background-image-holder').css('transform', 'translate(' + -event.pageX /30 + 'px,' + -event.pageY /45+ 'px)');
				$(this).find('.layer-1').css('transform', 'translate(' + -event.pageX /50 + 'px,' + -event.pageY /50+ 'px)');
				$(this).find('.layer-2').css('transform', 'translate(' + -event.pageX /60 + 'px,' + -event.pageY /60+ 'px)');
			});
		});
    }
    
    // Contact form code

    $('form.email-form').submit(function (e) {
		// return false so form submits through jQuery rather than reloading page.
		if(e.preventDefault) e.preventDefault(); 
		else e.returnValue = false;
		
		var thisForm 		= $(this).closest('.email-form'),
			error 			= 0,
			originalError 	= thisForm.attr('original-error'),
			loadingSpinner;
			
		if (typeof originalError !== typeof undefined && originalError !== false) {
			thisForm.find('.form-error').text(originalError); 
		}
				

		$(thisForm).find('.validate-required').each(function(){
			if($(this).val() === ''){
				$(this).addClass('field-error');
				error = 1;
			}else{
				$(this).removeClass('field-error');
			}
		});
		
		$(thisForm).find('.validate-email').each(function(){
			if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
				$(this).addClass('field-error');
				error = 1;
			}else{
				$(this).removeClass('field-error');
			}
		});
		

        if (error === 1){
            $(this).closest('.email-form').find('.form-error').fadeIn(200);
        }else {
			// Hide the error if one was shown
			$(this).closest('.email-form').find('.form-error').fadeOut(200);
			// Create a new loading spinner while hiding the submit button.
			loadingSpinner = $('<div />').addClass('form-loading').insertAfter($(thisForm).find('input[type="submit"]'));
			$(thisForm).find('input[type="submit"]').hide();
            
            jQuery.ajax({
                type: "POST",
                url: "mail/mail.php",
                data: thisForm.serialize(),
                success: function (response) {
                	// Swiftmailer always sends back a number representing numner of emails sent.
					// If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
					$(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
					if($.isNumeric(response)){
						if(parseInt(response) > 0){
							thisForm.find('.form-success').fadeIn(1000);
							thisForm.find('.form-error').fadeOut(1000);
							setTimeout(function(){ thisForm.find('.form-success').fadeOut(500); }, 5000);
						}
					}
					// If error text was returned, put the text in the .form-error div and show it.
					else{
						// Keep the current error text in a data attribute on the form
						thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
						// Show the error with the returned error text.
						thisForm.find('.form-error').text(response).fadeIn(1000);
						thisForm.find('.form-success').fadeOut(1000);
					}
                },
                error: function (errorObject, errorText, errorHTTP) {
                	// Keep the current error text in a data attribute on the form
					thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
					// Show the error with the returned error text.
					thisForm.find('.form-error').text(errorHTTP).fadeIn(1000);
					thisForm.find('.form-success').fadeOut(1000);
                	$(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
                }
            });
        }
		return false;
    });
	
	
	// Expanding Lists (updated in Pivot 1.4.0)
	
	$('.expanding-ul li').click(function(){
		$('.expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});

});

$(window).load(function(){

  "use strict";
  	
  
	// Align Elements Vertically
	
	alignVertical();
	alignBottom();
	
	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});
    
    // Remove Loader
    
    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);
    
	// Mailchimp/Campaign Monitor Mail List Form Scripts
	$('form.mail-list-signup').on('submit', function(){
		
		var iFrame = $(this).closest('section, header').find('iframe.mail-list-form'),
		thisForm 		= $(this).closest('.mail-list-signup'),
		userEmail 		= $(this).find('.signup-email-field').val(),
		userFullName 	= $(this).find('.signup-name-field').val(),
		userFirstName 	= $(this).find('.signup-first-name-field').val(),
		userLastName 	= $(this).find('.signup-last-name-field').val(),
		error			= 0;
		
		$(thisForm).find('.validate-required').each(function(){
			if($(this).val() === ''){
				$(this).addClass('field-error');
				error = 1;
			}
			else{
				$(this).removeClass('field-error');
			}
		});
		
		$(thisForm).find('.validate-email').each(function(){
			if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
				$(this).addClass('field-error');
				error = 1;
			}
			else{
				$(this).removeClass('field-error');
			}
		});
		
		if(error === 0){
			iFrame.contents().find('#mce-EMAIL, #fieldEmail').val(userEmail);
			iFrame.contents().find('#mce-LNAME, #fieldLastName').val(userLastName);
			iFrame.contents().find('#mce-FNAME, #fieldFirstName').val(userFirstName);
			iFrame.contents().find('#mce-FNAME, #fieldName').val(userFullName);		
			iFrame.contents().find('form').attr('target', '_blank').submit();
		}
		return false;
	});

});

function alignVertical(){

		$('.align-vertical').each(function(){
			var that = $(this);
			var height = that.height();
			var parentHeight = that.parent().height();
			var padAmount = (parentHeight / 2) - (height/2);
			that.css('padding-top', padAmount);
		});
	
}

function alignBottom(){
	$('.align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}
