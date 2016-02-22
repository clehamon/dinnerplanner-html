//View3 Object constructor
var View3 = function (container, model) {


	$("#confirmDinner").click(function(){

		loadFinalMenuList();
		$('#dishContainer').hide();
		$('#finalMenu').show();
		$('#finalMenuList').show();

	})

	$(".dish").click(function(){

		$('#dishContainer').hide();
		$('#preparationDetails').show();
		loadDish($(this).data("id"));

	})



	function loadMainDishes(){
		var mainDishes = model.getAllDishes("main dish");
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

	function loadDish(id){
		var dish = model.getDish(id);
		var ingrHtml = "";
		var ingredientsList = dish.ingredients;
		var ingredient = null;

		$("#ingredients-list").empty();

		$("#preparationTitle").html(dish.name);
		$("#preparationImg").attr("src", "./images/"+dish.image);
		$("#preparationText").html(dish.description);
		$("#nbGuests").html(model.getNumberOfGuests());
		$("#totalIngredientsPrice p").html(model.getDishPrice(dish.id));

		for (var i = 0; i <= ingredientsList.length-1; i++) {
			ingredient = ingredientsList[i];

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
}
 
