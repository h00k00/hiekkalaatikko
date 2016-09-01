$(document).ready(function(){
	$("#draggable").draggable();
	$("#resizable").resizable();
	$("#resizable").droppable({
		drop: function(ui, event) {
			$("#resizable").css("background-color","yellow");
		}
	});
});
