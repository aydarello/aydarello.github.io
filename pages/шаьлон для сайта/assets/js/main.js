$(document).ready(function(){
	function edit_container() {
		var bg_image = $('.container-first > img').height();
		//console.log(bg_image);
		$('.container-first').height(bg_image);
	}
	setInterval(edit_container, 1000);

	var window_width = $(window).width() + 17;
	console.log(window_width); // 17px is scroll 

	function height_setting_on_about() {
		if (window_width <= 992) {
			// about us text's block's height
			//console.log ($('.about-us > div:first-child').height());
			var about_us_label_height = $('.about-us > div:first-child').height();

			//var icon_blog_height = 0;

				/*var i = 0;
				var column = $('.about-us > .icon-blog > .row > div:eq(' + i + ')');

				while(column.val() != undefined){
					var column = $('.about-us > .icon-blog > .row > div:eq(' + i + ')');
					if(column.height() != undefined){
						console.log(column.height());
						icon_blog_height += column.height();
					}

					i++;
				}
				var posts_amount = i;
				i = 0;*/

				//console.log(posts_amount);
				//console.log(icon_blog_height);
			
			//console.log($('.about-us > .icon-blog').outerHeight());
			$('.about-us').height($('.about-us > .icon-blog').outerHeight() + about_us_label_height + 550);

		}
	}

	height_setting_on_about();
	
	function height_to_width_on_latest() {
		var block = $('.latest-works .row > div');
		block.height(block.width());

	}

	height_to_width_on_latest();

	function width_to_height_on_team() {
		var block = $('.our-team .row .icon');
		//console.log(block.outerHeight());
		block.width(block.outerHeight() + 10);
	}
	width_to_height_on_team();

	function indicators_li_elements_adding(carousel_indicator_sel, carousel_item_sel_str, id){
		var i = 0;
		carousel_item_sel_str = carousel_item_sel_str;
		var new_carousel_item_sel_str = carousel_item_sel_str + ' > .carousel-item:eq(' + i + ')';

		while ($(new_carousel_item_sel_str).val() != undefined && i <= 5){
			new_carousel_item_sel_str = carousel_item_sel_str + ' > .carousel-item:eq(' + i + ')';
			
			//console.log($(new_carousel_item_sel_str));
			
			if($(new_carousel_item_sel_str).html() != undefined){
				i++;			
			}
		}
		//console.log(i);

		for (var k = 0; k < i; k++) {
			if (k == 0) {
				$(carousel_indicator_sel).append('<li class="active" data-target="' + id + '" data-slide-to="0"></li>');
			}
			else{
				$(carousel_indicator_sel).append('<li data-target="' + id + '" data-slide-to="' + k + '"></li>');
			}
		}
	}

	indicators_li_elements_adding('.our-team > .carousel > .carousel-indicators', '.our-team > .carousel > .carousel-inner', '#slider');

	function post_columns_switch(){
		if (window_width > 992) 
		{
			var i = 0;
			var foo;
			var column_path = '.blog > .container > .row > div:eq(' + i + ')';

			while($(column_path).val() != undefined){

				column_path = '.blog > .container > .row > div:eq(' + i + ')';
				if(i % 2 == 1){
					k=0;
					foo = $(column_path + ' > .container > .row > div:first-child');
					foo.detach();
					foo.appendTo('.blog > .container > .row > div:eq(' + i + ') > .container > .row');
				}

				if($(column_path).html() != undefined){
					i++;
				}
			}
			//console.log(i);
		}
	}
	post_columns_switch();

});