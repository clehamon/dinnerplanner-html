//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	//Number of Guests
	this.numberOfGuests.html(model.getNumberOfGuests());


	// CONTROLER STUFF FORGETABOUTIT
	/*
	this.plusButton.click({nbGuests:this.numberOfGuests}, increaseGuests);
	this.minusButton.click({nbGuests:this.numberOfGuests}, decreaseGuests);

	function increaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}

	function decreaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}*/

	loadMainDishes();

	function loadMainDishes(){
		var dishContainer = container.find("#dishContainer");
		var mainDishes = model.getAllDishes("main dish");
		var dishHtml = "";
		var dish = null;
		console.log(mainDishes);

		for (var i = 0; i <= mainDishes.length-1; i++) {
			dish = mainDishes[i];

			dishHtml = '<div class="dish" data-id="'+dish.id+'"><div class="dish-img">';
			dishHtml += '<img src="./images/'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p>'+dish.name+'</p></div>';
			dishHtml += '<div class="description"><p>'+dish.description+'</p></div></div>';

			console.log(dishHtml);
			$("#dishContainer").append(dishHtml);
		}
	}

	function loadDish(id){
		var currentDish = model.getDish(id);

	}
	


}
 
