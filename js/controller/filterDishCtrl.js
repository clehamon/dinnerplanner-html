//FilterDishCtrl Object constructor
var FilterDishCtrl = function(view, model ) {

	view.selectorDish.change( function(event){

		view.loadMainDishes(this.value)

	});

 

}