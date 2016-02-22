$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var view3 = new View3($("#dishContainer"), model);
	var view4 = new View4($("#dishContainer"), model);
	var view5 = new View5($("#dishContainer"), model);

});
