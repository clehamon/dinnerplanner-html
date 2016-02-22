//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	//Number of Guests
	this.numberOfGuests.html(model.getNumberOfGuests());

	load();

	function load(){
		$('#preparationDetails').hide();
		$('#finalMenu').hide();
		$('#finalMenuList').hide();
		$('#finalMenuDishes').hide();
		loadMainDishes("main dish");
		// loadFinalMenuList();
		// loadFinalMenuPrint();
	}

	// $(".dish").click(function(){

	// 	$('#dishContainer').hide();
	// 	$('#preparationDetails').show();
	// 	loadDish($(this).data("id"));

	// })

	// $("#backToMain").click(function(){

	// 	$('#dishContainer').show();
	// 	$('#preparationDetails').hide();

	// })

	// $("#confirmDish").click(function(){

	// 	$('#dishContainer').show();
	// 	$('#preparationDetails').hide();
	// 	loadSidebar();

	// })

	// $("#confirmDinner").click(function(){

	// 	$('#dishContainer').hide();
	// 	$('#finalMenu').show();
	// 	$('#finalMenuList').show();

	// })

	// $("#backFromEnd").click(function(){

	// 	$('#finalMenu').hide();
	// 	$('#finalMenuDishes').hide();
	// 	$('#finalMenuList').hide();
	// 	$('#dishContainer').show();

	// })

	

	// $("#goToPrint").click(function(){

	// 	$('#finalMenu').show();
	// 	$('#finalMenuList').hide();
	// 	$('#finalMenuDishes').show();

	// })



	// function loadSidebar(){

	// 	var fullMenu = model.getFullMenu();
	// 	var nbGuests = model.getNumberOfGuests();
	// 	$("#sidebarItems").empty();

	// 	var dishHtml = "";
	// 	var dish = null;

	// 	$("#nbGuestInput").attr("text", nbGuests);

	// 	for (var i = 0; i <= fullMenu.length-1; i++) {
	// 		dish = fullMenu[i];

	// 		dishHtml = '<tr><td>'+dish.name+'</td><td>'+model.getDishPrice(dish.id)*nbGuests+'</td></tr>';

	// 		$("#sidebarItems").append(dishHtml);
	// 	}

	// 	dishHtml = '<tr><td class="txt-right">SEK</td><td>'+model.getTotalMenuPrice()+'</td></tr>';

	// 	$("#sidebarItems").append(dishHtml);
	// }

	function loadMainDishes(dishType){
		var mainDishes = model.getAllDishes(dishType);
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

	// function loadDish(id){
	// 	var dish = model.getDish(id);
	// 	var ingrHtml = "";
	// 	var ingredientsList = dish.ingredients;
	// 	var ingredient = null;

	// 	$("#ingredients-list").empty();

	// 	$("#preparationTitle").html(dish.name);
	// 	$("#preparationImg").attr("src", "./images/"+dish.image);
	// 	$("#preparationText").html(dish.description);
	// 	$("#nbGuests").html(model.getNumberOfGuests());
	// 	$("#totalIngredientsPrice p").html(model.getDishPrice(dish.id));

	// 	for (var i = 0; i <= ingredientsList.length-1; i++) {
	// 		ingredient = ingredientsList[i];
	// 		console.log(ingredient);

	// 		ingrHtml = '<div class="ingredient ">';
	// 		ingrHtml += '<div class="col-xs-3"><p>'+ingredient.quantity+" "+ingredient.unit+'</p></div>';
	// 		ingrHtml += '<div class="col-xs-6"><p>'+ingredient.name+'</p></div>';
	// 		ingrHtml += '<div class="col-xs-1"><p>SEK</p></div>';
	// 		ingrHtml += '<div class="col-xs-2 ingredient-price"><p>'+ingredient.quantity+'</p></div>';
	// 		ingrHtml += '</div>';

	// 		$("#ingredients-list").append(ingrHtml);
	// 	}

	// }

	// function loadFinalMenuList(){

	// 	var fullMenu = model.getFullMenu();
	// 	var nbGuests = model.getNumberOfGuests();
	// 	$("#finalMenuListDishes").empty();

	// 	var dishHtml = "";
	// 	var dish = null;

	// 	$("#finalGuestNb").html(nbGuests);
	// 	$("#finalPrice").html(model.getTotalMenuPrice());

	// 	for (var i = 0; i <= fullMenu.length-1; i++) {
	// 		dish = fullMenu[i];

	// 		dishHtml = '<div class="dish col-xs-4">';
	// 		dishHtml += '<div class="dishImg"><img class="img-responsive" src="./images/'+dish.image+'" alt="'+dish.name+'">';
	// 		dishHtml += '<p class="titleDishThumb">'+dish.name+'</p></div>';
	// 		dishHtml += '<div class="price"><p>'+model.getDishPrice(dish.id)*nbGuests+' SEK</p></div></div>'

	// 		$("#finalMenuListDishes").append(dishHtml);
	// 	}				
			
	// }

	// function loadFinalMenuPrint(){
	// 	var fullMenu = model.getFullMenu();
	// 	var dishHtml = "";
	// 	var dish = null;
	// 	$("#finalMenuDishes").empty();

	// 	$("#finalGuestNb").html(model.getNumberOfGuests());

	// 	for (var i = 0; i <= fullMenu.length-1; i++) {
	// 		dish = fullMenu[i];

	// 		dishHtml = '<div class="dishCol col-xs-12">';
	// 		dishHtml += '<div class="col-xs-2 nopad"><img src="./images/'+dish.image+'" alt="'+dish.name+'" class="img-reponsive center-block dishPic"></div>';

	// 		dishHtml += '<div class="dishDescription col-xs-3"><h3 class="dishTitle">'+dish.name+'</h3>';
	// 		dishHtml +=	'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ab voluptatibus eum nisi, eaque excepturi consequatur pariatur fugiat dolorum porro, quae velit cumque veritatis earum accusamus id dignissimos obcaecati, ea.</p></div>';
	// 		dishHtml += '<div class="dishPreparation col-xs-6 col-xs-offset-1">';
	// 		dishHtml += '<h4 class="dishTitle">Preparation</h4><p>'+dish.description+'</p></div></div>';

	// 		$("#finalMenuDishes").append(dishHtml);
	// 	}
	// }


	


}
 
