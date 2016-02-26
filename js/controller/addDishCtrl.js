//AddDishCtrl Object constructor
var AddDishCtrl = function(view, model ) {
 
	view.confirmBtn.click( function(event){

		//Get the dish id from in the button
		var dishId = event.target.dataset['id'];
		
		model.addDishToMenu(dishId);

	});


	$("#backToMain").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	view.confirmBtn.click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})
 

}