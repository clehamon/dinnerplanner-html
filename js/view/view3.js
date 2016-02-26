//View3 Object constructor
var View3 = function (container, model) {

	model.addObserver(update);

	this.selectorDish = container.find('#selectTypeDish'); 
	this.searchBar = container.find('#searchBar'); 
	this.searchBtn = container.find('#searchBtn'); 
	this.dishContainer = container.find('#dishContainer'); 
	this.preparationDetails = container.find('#preparationDetails'); 
	var dishId = 0;

// FUNCTIONS

	function update(obj){
		if (obj === "guests") {
			loadIngredients(model.getDish(dishId),model.getNumberOfGuests());
		}
	}

	this.loadMainDishes = function(type, filter){
		var mainDishes = model.getAllDishes(type, filter);
		var dishHtml = "";
		var dish = null;
		$("#dishContainer .margtop").empty();

		for (var i = 0; i <= mainDishes.length-1; i++) {
			dish = mainDishes[i];
			dishHtml = '<div class="dish col-xs-3" data-id='+dish.id+'><div class="dishImg">';
			dishHtml += '<img class="img-responsive center-block" src="./images/'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p class="titleDishThumb">'+dish.name+'</p></div>';
			dishHtml += '<div class="description"><p>'+dish.description+'</p></div></div>';

			$("#dishContainer .margtop").append(dishHtml);
		}
	}

	this.loadMainDishes("main dish");

	this.loadDish =function (id){
		dishId = id;
		var dish = model.getDish(id);
		var nbGuests = model.getNumberOfGuests();

		$("#preparationTitle").html(dish.name);
		$("#preparationImg").attr("src", "./images/"+dish.image);
		$("#preparationText").html(dish.description);
		$("#confirmDish").attr("data-id",dish.id);

		loadIngredients(dish, nbGuests);
		

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
 
