$(document).ready(function(){
	$("#circle").click(function(){
		$(this).animate({
		width:"300px",
		height:"300px",
		borderRadius:"150px"
		}, 1500);
	});
		
	$.ajax({
		url:"test.html"
	}).done(function(data){
		$("h1").html(data);
	});
});