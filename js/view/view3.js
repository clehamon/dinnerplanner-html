//View3 Object constructor
var View3 = function (container, model) {

	this.selectorDish = container.find('#selectTypeDish'); 
	this.dishContainer = container.find('#dishContainer'); 
	this.preparationDetails = container.find('#preparationDetails'); 

// FUNCTIONS

	this.loadMainDishes = function(type){
		var mainDishes = model.getAllDishes(type);
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

		function loadFinalMenuList(){

		var fullMenu = model.getFullMenu();
		var nbGuests = model.getNumberOfGuests();
		$("#finalMenuListDishes").empty();

		var dishHtml = "";
		var dish = null;

		$("#finalGuestNb").html(nbGuests);
		$("#finalPrice").html(model.getTotalMenuPrice());

		for (var i = 0; i <= fullMenu.length-1; i++) {
			dish = fullMenu[i];

			dishHtml = '<div class="dish col-xs-4">';
			dishHtml += '<div class="dishImg"><img class="img-responsive" src="./images/'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p class="titleDishThumb">'+dish.name+'</p></div>';
			dishHtml += '<div class="price"><p>'+model.getDishPrice(dish.id)*nbGuests+' SEK</p></div></div>'

			$("#finalMenuListDishes").append(dishHtml);
		}	
			
	}


	//NAVIGATION


	$("#confirmDinner").click(function(){

		loadFinalMenuList();
		$('#dishContainer').hide();
		$('#finalMenu').show();
		$('#finalMenuList').show();

	})


}
 
