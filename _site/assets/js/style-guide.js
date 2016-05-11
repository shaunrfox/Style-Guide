$(document).ready(function () {

	// Click scroll to ID
	var hash = window.location.hash.substring(1);
	var $root = $('body, html');

	$('nav li a, .post-title-hash').click(function() {

		var correctSection = $(this).attr("data-id");
		var sectionOffset = $("#" + correctSection);

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
		$("section.post").each(function() {
			var onScreenId = $(this).attr("id");

			if ( $(this).isOnScreen() ) {
				$("#link-" + onScreenId).addClass("active");
			} else {
				$("#link-" + onScreenId).removeClass("active");
			}
		});
	};

	// - Check if on screen at page load
	onScreenChecker();

	// - Check if on screen during scroll
	$(window).scroll(function() {
		onScreenChecker();
	});
});