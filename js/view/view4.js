//View4 Object constructor
var View4 = function (container, model) {


	$("#backToMain").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	$("#confirmDish").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();
		loadSidebar();

	})

}
 
