//View4 Object constructor
var View4 = function (container, model) {


	$("#backToMain").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	$("#confirmDish").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();
		loadSidebar();

	})

	function loadSidebar(){

		var fullMenu = model.getFullMenu();
		var nbGuests = model.getNumberOfGuests();
		$("#sidebarItems").empty();

		var dishHtml = "";
		var dish = null;

		$("#nbGuestInput").attr("text", nbGuests);

		for (var i = 0; i <= fullMenu.length-1; i++) {
			dish = fullMenu[i];

			dishHtml = '<tr><td>'+dish.name+'</td><td>'+model.getDishPrice(dish.id)*nbGuests+'</td></tr>';

			$("#sidebarItems").append(dishHtml);
		}

		dishHtml = '<tr><td class="txt-right">SEK</td><td>'+model.getTotalMenuPrice()+'</td></tr>';

		$("#sidebarItems").append(dishHtml);
	}

}
 
