$(document).ready(function () {
	$("input[name='phone']").mask(" +7 (999) 999-99-99");

	var trainerSlider = $('.trainer');

	trainerSlider.on('setPosition', function () {
		$(this).find('.trainer-item').height('auto');
		var slickTrackHeight = $(this).find('.slick-track').height();
		$(this).find('.trainer-item').css('height', slickTrackHeight + 'px');
	});

	$('.advantages__wrapper').on('setPosition', function () {
		$(this).find('.advantage-card').height('auto');
		var slickTrackHeight = $(this).find('.slick-track').height();
		$(this).find('.advantage-card').css('height', slickTrackHeight + 'px');
	});

	trainerSlider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="trainer-arrow trainer-arrow--prev" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 46.02 46.02"><path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/></svg></button>',
		nextArrow: '<button class="trainer-arrow trainer-arrow--next" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 46.02 46.02"><path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.gallery-item').fancybox({
		thumbs: {
			autoStart: true,
			width: 50,
			height: 50,
			axis: 'x'
		}
	});

	if (window.matchMedia('(max-width: 1023px)').matches) {
		$('.advantages__wrapper').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '80px',
			arrows: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						centerPadding: '100px'
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						centerPadding: '80px'
					}
				}
			]
		});
	}

	$('.program__picture').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: "custom-dots",
		customPaging: function() {
			return '<button class="custom-dot"></button>';
		},
	});

	$.each($('.table--schedule tbody tr'), function () {
		var title = $(this).parent('tbody').find('tr:first-child td');
		$.each($(this).find('td'), function (index) {
			$(this).attr('aria-label', title.eq(index).text());
		});
	});

	$.each($('.table--price tbody tr'), function () {
		var title = $(this).parent('tbody').siblings('thead').find('th');
		$.each($(this).find('td'), function (index) {
			$(this).attr('aria-label', title.eq(index).text());
		});
	});

	function anchorScroll(e) {
		e.click(function () {
			link = $(this).attr('href');
			to = $(link).offset().top;
			$('body, html').animate({
				scrollTop: to
			}, 800);
		});
	}

	anchorScroll($('.anchor'));

	ymaps.ready(init);

	function init() {
		var map = new ymaps.Map("map", {
			center: [55.719511, 37.551647],
			zoom: 17,
			controls: ["zoomControl"]
		});

		map.geoObjects.add(new ymaps.Placemark([55.719511, 37.551647], {
			iconCaption: 'Лужники'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/marker.png',
			iconImageSize: [55, 75],
			iconImageOffset: [-25, -70]
		}))
	}
});
