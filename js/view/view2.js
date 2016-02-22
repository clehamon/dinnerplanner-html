//View2 Object constructor
var View2 = function (container, model) {


	$("#confirmDinner").click(function(){

		loadFinalMenuList();
		$('#dishContainer').hide();
		container.hide();

		// Change main container width

		var main = $(".main");

		main.removeClass('col-xs-9');
		main.addClass('col-xs-12');

		$('#finalMenu').show();
		$('#finalMenuList').show();

	})

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
 
