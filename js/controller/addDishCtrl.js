//AddDishCtrl Object constructor
var AddDishCtrl = function(view, model ) {
 
	view.confirmBtn.click( function(){

		var dishId = $(this).data("id");
		console.log(dishId);
		
		model.addDishToMenu(dishId);

	});
 

}