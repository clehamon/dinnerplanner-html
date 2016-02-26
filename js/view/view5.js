//View5 Object constructor
var View5 = function (container, model) {

	this.loadFinalMenuList = function(){

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


	this.loadFinalMenuPrint = function(){
		var fullMenu = model.getFullMenu();
		var dishHtml = "";
		var dish = null;
		$("#finalMenuDishes").empty();

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
 
