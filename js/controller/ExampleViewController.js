var ExampleViewController = function (view, model){

	view.plusButton.click(function(){
		dinnerModel.setNumberOfGuests (model.getNumberOfGuests() + 1) ;
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

}


