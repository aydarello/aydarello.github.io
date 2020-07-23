$(document).ready(function() {
	con_text = $('.container-text');
	console.log(con_text.parent().width());
	sports_titles = ['football', 'basketball', 'baseball', 'soccer', 'ice hockey'];
	
	var i = 0;
	while($('.sub-text-list > .sub-text:eq(' + i + ')').val() != undefined){

		$('.sub-text-list > .sub-text:eq(' + i + ')').text(sports_titles[i]);

		i++;
	}
	var btn = $('.button-blocks  .button');
	btn.css({'border-radius' : parseInt(btn.css('height')) / 2 + 'px'});

	var btnGroup = $('.button-group');
	btnGroup.css({'width' : (btn.css('width') * 2) + 'px'});
	
	var colEl = $('img[src*="shutterstock"]');

	$('#shutterstock-section > .container-fluid > .row > .col').addClass('col-lg-6').addClass('col-sm-12');
	$('#shutterstock-section > .container-fluid > .row:odd > .col:first').addClass('order-sm-2');
	$('#shutterstock-section > .container-fluid > .row:odd > .col:last').addClass('order-lg-2');
	//$('#shutterstock-section > .container-fluid > .row > .col:odd').addClass('order-sm-1');
	if ($(window).width() < 992) {
		$('img[src*="shutterstock"]:odd').css({'right' : '0'});
		
	}
	if ($(window).width() <= 576) {
		i = 0;
		var k = 0;
		var id = ['text-carousel', 'text-carousel-another'];
		var images = ['footballer', 'basketballer'];
		console.log($(window).width());
		for(k = 0; k < 2; k++){
			i = 0;
			$('article > section:eq(' + k + ')  .abs-img:eq(0)').css({'position' : 'relative'}).remove();

			while($('article > section:eq(' + k + ')  .row:eq(' + i + ')').val() != undefined){
				if (k == 0) {
					$('article > section:eq(' + k + ') .row:eq(' + i + ') > .col:first').remove();
					$('article > section:eq(' + k + ') .row:eq(' + i + ') > .col:last > .center-block').unwrap();
				}
				if (k == 1) {
					$('article > section:eq(' + k + ') .row:eq(' + i + ') > .col:first > .center-block').unwrap();
					$('article > section:eq(' + k + ') .row:eq(' + i + ') > .col:first').removeClass('pl-110px');
					$('article > section:eq(' + k + ') .row:eq(' + i + ') > .col:last').remove();
				}
				i++;
			}
			$('article > section:eq(' + k + ')  .row:eq(0)').after('<div class="abs-img"><img src="assets/' + images[k] + '.png" style="position: relative; left: 50%; transform: translateX(-50%); width: 85%;"></div>');
			$('article > section:eq(' + k + ')  .abs-img:eq(0)').css({'position' : 'relative'});
			$('article > section:eq(' + k + ') .wrapper').removeClass('wrapper').addClass('carousel slide').attr('data-ride', 'carousel').attr('id', id[k]);
			$('article > section:eq(' + k + ') .carousel-inner-wrapper').toggleClass('carousel-inner-wrapper carousel-inner');
			$('article > section:eq(' + k + ') .carousel-inner > .row').removeClass('row').addClass('carousel-item');
			$('article > section:eq(' + k + ') .carousel-inner > .carousel-item:first').addClass('active');
			$('article > section:eq(' + k + ') .carousel-inner > .carousel-item').css({'background-color' : '#fff'});
			$('article > section:eq(' + k + ') .carousel-inner > .carousel-item:last .number-prefix').css({'border-color' : '#5e42b0'}).css({'color' : '#000'});
			$('article > section:eq(' + k + ') .carousel-inner > .carousel-item:last .number-prefix + .header-font').css({'color' : '#c1c1c1'});
			$('article > section:eq(' + k + ') .carousel-inner > .carousel-item:last .paragraph').css({'color' : '#000'});
			$('#' + id[k]).css({'height' : '300px'});
			$('.carousel-inner > .carousel-item > .center-block').css({'margin-top' : '90px'}).css({'text-align' : 'center'});
			$('#'+ id[k] +' > .carousel-inner').after('<ul class="carousel-indicators"><li class="active" data-target="#'+id[k]+'" data-slide-to="0"></li><li data-target="#'+id[k]+'" data-slide-to="1"></li><li data-target="#'+id[k]+'" data-slide-to="2"></li></ul>');
		}
		$('#shutterstock-section > .container-fluid > .row > .col').toggleClass('col-6 col-12');
		$('#shutterstock-section > .container-fluid > .row:odd > .col:first').addClass('order-2');
		$('#shutterstock-section > .container-fluid > .row:odd > .col:last').addClass('order-lg-2');

		$('.button-group').removeClass('d-inline-flex').css({'width' : $('section:last .button-group > .button').innerWidth() + 'px'});
		
		$('#changingFlex > h1 > span:first').css({'font-size' : '45px'});
		$('#changingFlex > h1 > span:last').css({'font-size' : '25px'});
		$('#changingFlex > img').removeClass('mr-5').addClass('mb-3');
		$('header .container-text > .header-font:last').css({'left' : '0'});
		$('header .container-text > .header-font:first').css({'left' : '0'});
		$('header .container-text').css({'height' : '180px'})
		$('.header-text').css({'font-size' : '75px'});
		$('header .container-text > span').css({'font-size' : '40px'});
		$('header .container-text').css({'text-align' : 'center'});
		$('img[src*="footballer"]').css({'width' : '70%'});
		$('img[src*="basketballer"]').css({'width' : '80%'});
		$('#text-carousel .paragraph').removeClass('my-2');
		$('#text-carousel-another .paragraph').removeClass('my-2');
	}
	var colElWidth;
	var widthSetting = function () {
		con_text.css({'width' : con_text.parent().width()}).css({'transition' : '1s'});
		colElWidth = colEl.parent().parent().width();
		colEl.css({'width' : (colElWidth + 15) + 'px'});
		$('img[src*="shutterstock"]:odd').css({'position' : 'relative'}).css({'right' : '15px'});
		setTimeout(widthSetting, 1000);

		//$('img[src*="basketballer"]').css({'width' : (0.8 * $('body').width()) + 'px'});
	}
	widthSetting();
	var heightSetting = function() {
		//console.log(colEl.height());
		colEl.parent().parent().css({'height' : colEl.height() + 'px'});
		
		if($(window).width() < 992){ 
			$('.viola-block').css({'top' : ($('img[src*="shutterstock"]').height() - 30) + 'px'}); 
		}
		
		setTimeout(heightSetting, 1000);
		
	}
	heightSetting();
});