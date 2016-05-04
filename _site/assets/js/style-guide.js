$(document).ready(function () {

	// Click scroll to ID
	var hash = window.location.hash.substring(1);
	var $root = $('body, html');

	// var scrollablePosition = $(".scrollable-menu").offset().top;
	// console.log(scrollablePosition);

	$('nav li a').click(function() {
		// var href = $.attr(this, 'href');

		var correctSection = $(this).attr("id").replace('link-','');
		console.log(correctSection);

		var sectionOffset = $("#" + correctSection);
		console.log( $(sectionOffset).offset().top );

		// var scrollableOffset = $(sectionOffset).offset().top * -1;

		$root.animate({
			scrollTop: $(sectionOffset).offset().top
		}, 500, function () {
			window.location.hash = correctSection;
		});
		return false;
	});

	$('.logo').click(function() {
		$root.animate({
			scrollTop: $('#intro').offset().top
		}, 500, function () {
			window.location.hash = "#intro";
		});
		return false;
	});

	// Highlight nav when section is in viewport
	// - Define Viewport
	$.fn.isOnScreen = function(){
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	// - Function to check if section is on screen
	var onScreenChecker = function() {
		$("section").each(function() {
			var onScreenId = $(this).attr("id");
			console.log( onScreenId );

			if ( $(this).isOnScreen() ) {
				$("#link-" + onScreenId).addClass("active");
				// console.log( onScreenId + " is visible");
			} else {
				$("#link-" + onScreenId).removeClass("active");
				// console.log( onScreenId + " is not visible");
			}
		});
	};

	// - Check if on screen at page load
	onScreenChecker();

	// - Check if on screen during scroll
	$(window).scroll(function() {
		// console.log("body is scrolling");
		onScreenChecker();
	});

	prettyPrint();
});