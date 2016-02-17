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

	function loadMainDishes(){
		var mainDishes = model.getAllDishes("main dish");
		var dishHtml = "";
		var dish = null;

		for (var i = 0; i <= mainDishes.length-1; i++) {
			dish = mainDishes[i];
			dishHtml = '<div class="dish col-xs-3" data-id="'+dish.id+'"><div class="dishImg">';
			dishHtml += '<img class="" src="./images/'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p class="titleDishThumb">'+dish.name+'</p></div>';
			dishHtml += '<div class="description"><p>'+dish.description+'</p></div></div>';
			console.log(dishHtml);

			$("#dishContainer").append(dishHtml);
		}
	}

	loadMainDishes();

	function loadDish(id){
		var dish = model.getDish(id);
		var ingrHtml = "";
		var ingredientsList = dish.ingredients;
		var ingredient = null;

		$("#preparationTitle").html(dish.name);
		$("#preparationImg").attr("src", "./images/"+dish.image);
		$("#preparationText").html(dish.description);
		$("#nbGuests").html(model.getNumberOfGuests());
		$("#totalIngredientsPrice p").html(model.getDishPrice(dish.id));

		for (var i = 0; i <= ingredientsList.length-1; i++) {
			ingredient = ingredientsList[i];
			console.log(ingredient);

			ingrHtml = '<div class="ingredient ">';
			ingrHtml += '<div class="col-xs-3"><p>'+ingredient.quantity+" "+ingredient.unit+'</p></div>';
			ingrHtml += '<div class="col-xs-6"><p>'+ingredient.name+'</p></div>';
			ingrHtml += '<div class="col-xs-1"><p>SEK</p></div>';
			ingrHtml += '<div class="col-xs-2 ingredient-price"><p>'+ingredient.quantity+'</p></div>';
			ingrHtml += '</div>';

			$("#ingredients-list").append(ingrHtml);
		}

	}

	function loadFinalMenuList(){

	}

	function loadFinalMenuDishes(){
		var fullMenu = model.getFullMenu();
		var dishHtml = "";
		var dish = null;

		$("#finalGuestNb").html(model.getNumberOfGuests());

		for (var i = 0; i <= fullMenu.length-1; i++) {
			dish = fullMenu[i];

			dishHtml = '<div class="dishCol col-xs-12">';
			dishHtml += '<div class="col-xs-2 nopad"><img src="./images/'+dish.image+'" alt="'+dish.name+'" class="img-reponsive center-block dishPic"></div>';

			dishHtml += '<div class="dishDescription col-xs-3"><h3 class="dishTitle">'+dish.name+'</h3>';
			dishHtml +=	'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ab voluptatibus eum nisi, eaque excepturi consequatur pariatur fugiat dolorum porro, quae velit cumque veritatis earum accusamus id dignissimos obcaecati, ea.</p></div>';
			dishHtml += '<div class="dishPreparation col-xs-6 col-xs-offset-1">';
			dishHtml += '<h4 class="dishTitle">Preparation</h4><p>'+dish.description+'</p></div></div>';

			$("#finalMenuDishes").append(dishHtml);
		}
	}


	


}
 
