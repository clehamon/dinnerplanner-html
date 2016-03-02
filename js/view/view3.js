//View3 Object constructor
var View3 = function (container, model) {


	this.selectorDish = container.find('#selectTypeDish'); 
	this.searchBar = container.find('#searchBar'); 
	this.searchBtn = container.find('#searchBtn'); 
	this.dishContainer = container.find('#dishContainer'); 
	this.preparationDetails = container.find('#preparationDetails'); 
	var dishId = 0;
	var mainDishes = [];
	var currentDish = null;


// FUNCTIONS

	

	loadMainDishes = function(type, filter){
		model.getAllDishes(type, filter);
	}

	drawMainDishes = function(){
		var dishHtml = "";
		var dish = null;
		$("#dishContainer .margtop").empty();

		console.log(mainDishes);

		for (var i = 0; i <= mainDishes.length-1; i++) {
			dish = mainDishes[i];
			dishHtml = '<div class="dish col-xs-3" data-id='+dish.RecipeID+'><div class="dishImg">';
			dishHtml += '<img class="img-responsive center-block" src="'+dish.ImageURL120+'" alt="'+dish.Title+'">';
			dishHtml += '<p class="titleDishThumb">'+dish.Title+'</p></div>';
			dishHtml += '<div class="description"><p>'+dish.Subcategory+'</p></div></div>';

			$("#dishContainer .margtop").append(dishHtml);
		}
	}

	this.update = function(obj){
		if (obj === "guests") {
			loadIngredients(model.getDish(dishId),model.getNumberOfGuests());

		} else if (obj === "dishSearch"){
			filter = $('#searchBar').val();
			type = $('#selectTypeDish').val();
			console.log(filter+"/"+type);
			loadMainDishes(type, filter)

		} else if(obj === "loadedDishes"){
			mainDishes = model.getDishes();
			drawMainDishes();
		} else if (obj === "loadedDish"){
			currentDish = model.getCurrentDish();
			drawDish(currentDish);
		}
	}

	model.addObserver(this.update);


	this.loadDish =function (id){
		dishId = id;
		var dish = model.getDish(id);

	}

	drawDish = function(dish){
		var nbGuests = model.getNumberOfGuests();
		console.log("drawdish");

		$("#preparationTitle").html(dish.Title);
		$("#preparationImg").attr("src", dish.ImageURL);
		$("#preparationText").html(dish.Description);
		$("#confirmDish").attr("data-id",dish.RecipeID);

		//loadIngredients(dish, nbGuests);
	}

	function loadIngredients(dish, guests){
		var ingrHtml = "";
		var ingredientsList = dish.ingredients;
		var ingredient = null;

		$("#ingredients-list").empty();

		for (var i = 0; i <= ingredientsList.length-1; i++) {
			ingredient = ingredientsList[i];

			ingrHtml = '<div class="ingredient ">';
			ingrHtml += '<div class="col-xs-3"><p>'+Math.ceil(ingredient.quantity*guests)+" "+ingredient.unit+'</p></div>';
			ingrHtml += '<div class="col-xs-6"><p>'+ingredient.name+'</p></div>';
			ingrHtml += '<div class="col-xs-1"><p>SEK</p></div>';
			ingrHtml += '<div class="col-xs-2 ingredient-price"><p>'+ingredient.price*guests+'</p></div>';
			ingrHtml += '</div>';

			$("#ingredients-list").append(ingrHtml);
		}

		$("#totalIngredientsPrice p").html(model.getDishPrice(dish.id)*guests);

	}

}
 
