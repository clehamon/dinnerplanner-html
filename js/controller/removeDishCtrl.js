//RemoveDishCtrl Object constructor
var RemoveDishCtrl = function(view, model ) {
 
		view.sidebarItems.on('click', '.remove-btn', function (event) {
 		// view.removeBtn.click( function(event){

			//Get the dish id from in the button
			var dishId = event.target.dataset['id'];
			
			model.removeDishFromMenu(dishId);

		});

	

}