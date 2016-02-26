//LoadDishCtrl Object constructor
var LoadDishCtrl = function(view, model ) {

	view.dishContainer.on('click', '.dish', function() {
		view.dishContainer.hide();
		view.preparationDetails.show();
		view.loadDish($(this).data("id"));

	})


	$('#dishContainer').on('click', '.dish', function() {
		$('#dishContainer').hide();
		$("#preparationDetails").show();
		view.loadDish($(this).data("id"));

	})

 

}