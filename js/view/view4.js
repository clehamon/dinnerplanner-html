//View4 Object constructor
var View4 = function (container, model) {

	this.confirmBtn = container.find("#confirmDish");


	$("#backToMain").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	this.confirmBtn.click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

}
 
