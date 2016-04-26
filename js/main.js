$(document).ready(function() {
	$("button").click( function () {
		$(this).addClass('active').siblings().removeClass('active');
		type = (this.id);
		// console.log(type);
		// var year = $("#slider2").slider("option", "value");
		// console.log(year);
		// loadChords(year, type);
	})
})
