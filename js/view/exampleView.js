//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	//Number of Guests
	this.numberOfGuests.html(model.getNumberOfGuests());

	init();

	function init(){
		$('#preparationDetails').hide();
		$('#finalMenu').hide();
		$('#finalMenuList').hide();
		$('#finalMenuDishes').hide();
	}
}
 
