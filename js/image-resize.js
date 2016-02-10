// jquery fixed image resize

$(window).bind("load", function() {
	// IMAGE RESIZE
	$('#product_cat_list img').each(function() {
		var maxWidth = 120;
		var maxHeight = 120;
		var ratio = 0;
		var width = $(this).width();
		var height = $(this).height();
	
		if(width > maxWidth){
			ratio = maxWidth / width;
			$(this).css("width", maxWidth);
			$(this).css("height", height * ratio);
			height = height * ratio;
		}
		var width = $(this).width();
		var height = $(this).height();
		if(height > maxHeight){
			ratio = maxHeight / height;
			$(this).css("height", maxHeight);
			$(this).css("width", width * ratio);
			width = width * ratio;
		}
	});
	//$("#contentpage img").show();
	// IMAGE RESIZE
});