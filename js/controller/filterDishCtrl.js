//FilterDishCtrl Object constructor
var FilterDishCtrl = function(view, model ) {

	var type = "main dish";
	var filter = "";

	view.selectorDish.change( function(event){
		type = this.value;
		view.loadMainDishes(type, filter)

	});

	view.searchBtn.click( function(event){
		filter = view.searchBar.val();
		view.loadMainDishes(type, filter)

	});

 

}