$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var view2 = new View2($("#sidebar"), model);
	var view3 = new View3($("#dishContainer"), model);
	var view4 = new View4($("#preparationDetails"), model);
	var view5 = new View5($("#finalMenu"), model);

	//Controllers
	var addDishCtrl = new AddDishCtrl(view4, model);

});

var ExampleViewController = new ExampleViewController(exampleView,model);