$(document).ready(function() {
	// menu
	function openSubMenuOnHover() {
		$(".menu__item").hover(
			function() {
				$(this)
					.find(".menu__dropdown")
					.stop(true, true)
					.delay(200)
					.fadeIn();
			},
			function() {
				$(this)
					.find(".menu__dropdown")
					.stop(true, true)
					.delay(200)
					.fadeOut();
			}
		);
	}

	function openSubMenuOnClick() {
		$(".menu__open-dropdown").click(function(e) {
			e.preventDefault();
			// $(".menu__open-dropdown").removeClass("rotate");
			$(this)
				.toggleClass("rotate")
				.next(".menu__dropdown")
				.slideToggle();
		});
	}

	if ($(window).width() >= 992) {
		openSubMenuOnHover();
	}

	if ($(window).width() <= 991) {
		openSubMenuOnClick();
	}

	$(".menu__btn").on("click", function() {
		$(this).toggleClass("active");
		$(".menu").toggleClass("open");
		$(".menu__dropdown").slideUp();
		$(".menu__open-dropdown").removeClass("rotate");
	});

	$(window).resize(function() {
		if ($(window).width() >= 992) {
			openSubMenuOnHover();
		} else {
			openSubMenuOnClick();
		}
	});

	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() >= 1) {
	// 		$(".menu__btn").removeClass("active");
	// 		$(".menu").removeClass("open");
	// 	}
	// });

	$(".slider").slick({
		arrows: false,
		dots: true,
		// autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
