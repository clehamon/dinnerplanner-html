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

	//loadMainDishes();

	function loadMainDishes(){
		var mainDishes = model.getAllDishes("main dish");
		var dishHtml = "";
		var dish = null;

		for (var i = 0; i <= mainDishes.length-1; i++) {
			dish = mainDishes[i];

			dishHtml = '<div class="dish col-md-3" data-id="'+dish.id+'"><div class="dish-img">';
			dishHtml += '<img class="" src="./images/'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p>'+dish.name+'</p></div>';
			dishHtml += '<div class="description"><p>'+dish.description+'</p></div></div>';

			$("#dishContainer").append(dishHtml);
		}
	}

	function loadDish(id){
		var currentDish = model.getDish(id);

	}

	loadFinalMenu();

	function loadFinalMenu(){
		var fullMenu = model.getFullMenu();
		var dishHtml = "";
		var dish = null;

		for (var i = 0; i <= fullMenu.length-1; i++) {
			dish = fullMenu[i];

			dishHtml = '<div class="dishCol col-md-10 col-md-offset-1">';
			dishHtml += '<div class="col-md-2"><img src="./images/'+dish.image+'" alt="'+dish.name+'" class="img-reponsive block dishPic"></div>';

			dishHtml += '<div class="dishDescription col-md-3"><h3 class="dishTitle">'+dish.name+'</h3>';
			dishHtml +=	'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ab voluptatibus eum nisi, eaque excepturi consequatur pariatur fugiat dolorum porro, quae velit cumque veritatis earum accusamus id dignissimos obcaecati, ea.</p></div>';
			dishHtml += '<div class="dishPreparation col-md-6 col-md-offset-1">';
			dishHtml += '<h4 class="dishTitle">Preparation</h4><p>'+dish.description+'</p></div></div>';

			$("#finalMenuDishes").append(dishHtml);
		}
	}

	$("#dishContainer").hide();


	


}
 
