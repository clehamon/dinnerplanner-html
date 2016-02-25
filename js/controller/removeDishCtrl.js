//RemoveDishCtrl Object constructor
var RemoveDishCtrl = function(view, model ) {
 

 		view.removeBtn.click( function(event){

			//Get the dish id from in the button
			var dishId = event.target.dataset['id'];
			
			model.removeDishFromMenu(dishId);

		});

	
}