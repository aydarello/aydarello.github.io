const xl_size = 1200,
 	lg_size = 992,
 	md_size = 768,
 	sm_size = 576;
$(document).ready(function() {
	
	// Setting styles because CSS doesn't want to work with some options
	
	var DECOsizepx = '24px';
	$('nav > a span:eq(0)').css({'font-size' : DECOsizepx});

	$('nav #menu > ul > li:first, nav #stack > ul > li:first').css({'border-left' : '1px solid #3c3c3c'});

	$('#featured_article > ul > li:eq(1) > h4').css({'width' : '200px'});

	// Setting images as background and sizing them

	var pngPictureVal = $('.png').val();
	var i = 0; // index
	pngPicture = $('.png:eq(' + i + ')');
	var pngPicture_text;
	while(pngPicture.val() != undefined){
		pngPicture = $('.png:eq(' + i + ')');
		pngPicture_text = pngPicture.text();
		console.log(pngPicture_text);

		pngPicture.empty();
		pngPicture.css({'background-image' : 'url(' + pngPicture_text + ')'}).css({'background-size' : 'cover'}).css({'background-repeat' : 'no-repeat'});

		i++;
	}

	// Menu

	if ($(window).width() <= 992) {
		$('#menu').addClass('w-0 d-none');
	}
	$('nav button[data-target="#menu"]').click(function() {
		$('#menu').toggleClass('w-0 d-none');
	});

	if ($(window).width() <= lg_size) {
		$('#navbrandLink').toggleClass('centring-x mr-auto').addClass('ml-3');
	}

	// Other

	index = 0;
	var video = $('.post .img-post > .embed-responsive:eq(' + index + ')');
	
	while(video.val() != undefined){
		var video = $('.post .img-post > .embed-responsive:eq(' + index + ')');
		video.parent().css({'height' : video.height() + 'px'});

		index++;
	}

	var asideMenuWidth = $('#aside-menu').width();
	var clickIndexer = 0;
	$('#aside-menu').css({'transform' : 'translate(-' + 54 + asideMenuWidth + 'px, ' + (25 + ($('#aside-menu').height() * 0.5)) + 'px)'})
	$('#stack').click(function() {
		$('#aside-menu').height($('#aside-menu > ul').height()).css({'transform' : 'translate(-' + (54 + asideMenuWidth) + 'px, ' + (25 + ($('#aside-menu').height() * 0.5)) + 'px)'});
		
		clickIndexer++;
		if (clickIndexer % 2 == 0) {
			asideMenuWidth = $('#aside-menu').width();
		}
		else{
			asideMenuWidth = 0;
		}
	});
});