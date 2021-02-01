$(document).ready(function(){

//	$(window).load(function() {
//        $('#load').hide();
//    });


	/* Preloader */
	setTimeout(function() {
		$('.preloader').fadeOut();
	}, 500);



    /* Switch sidebar to compact */
	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
		mq.addListener(WidthChange);
		WidthChange(mq);

	}

	function WidthChange(mq) {
		var myElement = document.getElementById('simple-bar');


		if (mq.matches) {
			$('body').addClass('compact-sidebar');
			$('.site-sidebar li.with-sub').find('>ul').slideUp();
			
		} else {
			$('body').removeClass('compact-sidebar');
			sidebarIfActive();


		}
	}

	/* Fullscreen */
	$('.toggle-fullscreen').click(function() {
		$(document).toggleFullScreen();
	});

    /* Sidebar - on click */
	$('.site-sidebar li.with-sub > a').click(function() {
		if (!$('body').hasClass('compact-sidebar')) {
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(this).parent().find('>ul').slideUp();
			} else {
				if (!$(this).parent().parent().closest('.with-sub').length) {
					$('.site-sidebar li.with-sub').removeClass('active').find('>ul').slideUp();
				}
				$(this).parent().addClass('active');
				$(this).parent().find('>ul').slideDown();
			}
		}
	});

	/* Sidebar - if active */
	function sidebarIfActive(){
		$('.site-sidebar ul > li:not(.with-sub)').removeClass('active');
		var url = window.location;
	    var element = $('.site-sidebar ul > li > a').filter(function () {
	        return this.href == url || url.href.indexOf(this.href) == 0;
	    });
		element.parent().addClass('active');

		$('.site-sidebar li.with-sub').removeClass('active').find('>ul').hide();
		var url = window.location;
	    var element = $('.site-sidebar ul li ul li a').filter(function () {
	        return this.href == url || url.href.indexOf(this.href) == 0;
	    });
		 var element2 = $('.site-sidebar ul li ul li a').filter(function () {
	        return this.href == url || url.href.indexOf(this.href) != 0;
	    });
		element.parent().addClass('active');
		element.parent().parent().parent().addClass('active');

	    if(!$('body').hasClass('compact-sidebar')) {
			element.parent().parent().slideDown();
	    }
	}

	sidebarIfActive();

	/* Sidebar - show and hide */
	$('.site-header .sidebar-toggle-first').click(function() {
		if ($('body').hasClass('site-sidebar-opened')) {
			$('body').removeClass('site-sidebar-opened');
			if(jQuery.browser.mobile == false){
				$('html').css('overflow','auto');
			}
		} else {
			$('body').addClass('site-sidebar-opened');
			if(jQuery.browser.mobile == false){
				$('html').css('overflow','hidden');
			}
		}
	});

	$('.site-header .sidebar-toggle-second').click(function() {
		var compact = 'compact-sidebar';

		if($('body').hasClass(compact)) {
			$('body').removeClass(compact);
			sidebarIfActive();
		} else {
			$('body').addClass(compact);
			$('.site-sidebar li.with-sub').find('>ul').slideUp();
		}
	});



	/* Hide on outside click */
	$(document).mouseup(function (e) {
	    var container = $('.template-options, .site-sidebar-second, .toggle-button-second');

	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	        container.removeClass('opened');
			$('.template-options').show();
			$('.toggle-button-second').removeClass('active');
	    }
	});

	/*  Tooltip */
	$('[data-toggle="tooltip"]').tooltip();

	/*  Popover */
	$('[data-toggle="popover"]').popover();




});
