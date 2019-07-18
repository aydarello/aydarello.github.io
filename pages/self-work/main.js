$(document).ready(function() {
	
	// setting css borders to card elements
	$('.card-group > .card:first').css('border-top-left-radius', '5px').css('border-bottom-left-radius', '5px');
	$('.card-group > .card:last').css('border-bottom-right-radius', '5px').css('border-top-right-radius', '5px');
	
	// setting height of parent of image in card-group
	$('.card-img-indep').parent().css('height', '70px');

	// changing old catalog of images to the new one
	var val = [];
	var ix = 0; 
	var imgSrcPng_attr = 'img[src$=".png"]';

	while($(imgSrcPng_attr + ':eq(' + ix + ')').attr('src') != undefined){
		val[ix] = $(imgSrcPng_attr + ':eq(' + ix + ')');
		//console.log(val[ix].attr('src'));
		val[ix].attr('src', 'assets/' + val[ix].attr('src'));
		ix++;
	}
	// setting width to the card deck 
	var cardDeckWidth = 0; // coefficent, index
	var i = 0;

	while($('.card-deck-no-spacing > .card:eq(' + i + ')').css('width') != undefined)
	{
		cardDeckWidth += parseInt($('.card-deck-no-spacing > .card:eq(' + i + ')').css('width'));
		i++;
	}
	cardDeckWidth += 550;
	$('.card-deck-no-spacing').css({'width' : cardDeckWidth + 'px'})

	// positioning the card deck by slider
	var containerFluidWidth = parseInt($('.blog-post .container-fluid').css('width'));
console.log(containerFluidWidth);

	var widthVal = (cardDeckWidth / (cardDeckWidth + containerFluidWidth)) * 1000;
	$('.input-blog-slider').attr({'max' : widthVal - 40})
	console.log(widthVal);

	var sliderVal = document.querySelector('.input-blog-slider');
	sliderVal.addEventListener('input', function() {
		$('.card-deck-no-spacing').css({'transform':'translateX(-' + this.value/10 + '%)'})
		//console.log(this.value/10);
	});
	var blogSlider = $('.input-blog-slider');

	// creating content in card deck
	$('.unique-card').html('<div style="width: 90%; margin-top: 5%; height: 200px; position: relative; left: 50%; transform: translateX(-50%); background-color: #3f3b48;"><div style="position: absolute; background-color: #fff; height: 70px; width: 73px; border-radius: 3px; border-bottom: solid 25px #3f3b48; right: 0; bottom: -25px; border-right: solid 1px #3f3b48; border-left: solid 1px #3f3b48;"><span style="font-size: 32px; font-family: KenyanCoffeeRg; position: absolute; left: 50%; transform: translate(-50%, 0); color: #3f3b48; font-weight: bold;">29</span><span style="text-transform: uppercase; position: absolute; left: 50%; transform: translateX(-50%); bottom: -17px; color: white; font-size: 10px;">august</span></div></div><div class="card-body"> <h6 style="text-transform: uppercase; color: #fff; font-size: 12px;">by author jimmy</h6><h5 style="color: #fff; font-size: 15px;" class="my-4">This is another title header for la la la hey it is a joke and just a text that doesn`t have a meaning</h5><h6 style="color: #fff;"><a href="#" style="color: #fff; text-decoration: none;"><img src="assets/arrow-right.png" style="position: relative; transform: translateY(-1px);"> Read more</a></h6></div>');
	
	// positioning circles
	
	var coords = [[150, 150], [370, 260], [550, 150], [720, 70], [850, 120]];
	var values = ['happy clients', 'completed projects', 'best shots', 'coffees made', 'winning awards'];
	var idx = 0; // index
	console.log($('.circle:eq()').val());

	while($('.circle:eq(' + idx + ')').val() != undefined){
		
		$('.circle:eq(' + idx + ')').css({'transform' : 'translate(' + coords[idx][0] + 'px, ' + coords[idx][1] + 'px)'});
		$('.circle:eq(' + idx + ') > span:first').css({'font-size' : (0.3 * parseInt($('.circle:eq(' + idx + ')').css('width'))) + 'px'}).css({'color' : '#fff'}).css({'position' : 'absolute'}).css({'font-weight' : 'bolder'}).css({'left' : '50%'}).css({'top' : '50%'}).css({'transform' : 'translate(-50%, -50%)'});
		// text under circles
		$('.circle:eq(' + idx + ')').append('<span style="color: #3f3b48; font-size: 16px; text-transform: uppercase; position: absolute; font-weight: bolder; display: block; text-align: center; left: 50%; transform: translateX(-50%); bottom: -40px; width: 200px;">' + values[idx] + '</span>');
		idx++;
	}

	// lines between circles
	var angle_width = [[-33, 140],[30, 170],[-32, 165],[-32, 102],[-138, 114],[3, 212]];
	var lineCoords = [[32, 254],[230, 250],[421, 251],[639, 144],[494, 139],[649, 208]];
	var k = 0;
	while($('.line:eq(' + k +')').val() != undefined){
		
		//$('.line:eq(' + k + ')').css({'transform' : 'rotate(' + angle_width[k][0] + 'deg)'});

		$('.line:eq(' + k + ')').css({'transform' : 'rotate(' + angle_width[k][0] + 'deg)'}).css({'left' : lineCoords[k][0] + 'px'}).css({'top' : lineCoords[k][1] + 'px'}).css({'width' : angle_width[k][1] + 'px'} );

		k++;
	}

	// styling 'follow-us' circles 
  	var spacingVal = 0;
  	var j = 0; // index
  	while($('.follow-circles-list > .follow-circle:eq(' + j + ')').val() != undefined){
  		spacingVal += 60;
		$('.follow-circles-list > .follow-circle:eq(' + j + ')').css({'margin-right' : spacingVal + 'px'});
		j++;
  	}
  	$('#follow-us-text').css({'margin-right' : (spacingVal+70) + 'px'})

});
