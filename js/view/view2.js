//View2 Object constructor
var View2 = function (container, model) {

	model.addObserver(this);
	loadSidebar();


	$("#confirmDinner").click(function(){

		// loadFinalMenuList();
		$('#dishContainer').hide();
		container.hide();

		// Change main container width

		var main = $(".main");

		main.removeClass('col-xs-9');
		main.addClass('col-xs-12');

		$('#finalMenu').show();
		$('#finalMenuList').show();

	})

	function update(obj){
		if (obj === "guests") {

		}
	}

	function loadSidebar(){

		var fullMenu = model.getFullMenu();
		var nbGuests = model.getNumberOfGuests();
		$("#sidebarItems").empty();

		var dishHtml = "";
		var dish = null;

		$("#nbGuestInput").val(nbGuests);

		for (var i = 0; i <= fullMenu.length-1; i++) {
			dish = fullMenu[i];

			dishHtml = '<tr><td>'+dish.name+'</td><td>'+model.getDishPrice(dish.id)*nbGuests+'</td></tr>';

			$("#sidebarItems").append(dishHtml);
		}

		dishHtml = '<tr><td class="txt-right">SEK</td><td>'+model.getTotalMenuPrice()+'</td></tr>';

		$("#sidebarItems").append(dishHtml);
	}

}
 
