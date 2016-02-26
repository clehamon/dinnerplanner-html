//View2 Object constructor
var View2 = function (container, model) {

	model.addObserver(update);
	loadSidebar();

	this.sidebarItems = $("#sidebarItems");


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
			loadNbGuests();

		}

		loadMenuOverview()
	}

	function loadNbGuests(){
		var nbGuests = model.getNumberOfGuests();
		$("#nbGuestInput").val(nbGuests);
		
	}

	function loadMenuOverview(){
		var nbGuests = model.getNumberOfGuests();
		var fullMenu = model.getFullMenu();
		$("#sidebarItems").empty();


		var dishHtml = "";
		var dish = null;


		for (var i = 0; i <= fullMenu.length-1; i++) {

			dish = fullMenu[i];

			dishHtml = '<tr><td>'+dish.name+'</td><td>'+model.getDishPrice(dish.id)*nbGuests+'</td>';
			dishHtml += '<td><span class="glyphicon glyphicon-remove-circle remove-btn" aria-hidden="true" data-id="'+dish.id+'"></span></td></tr>'

			$("#sidebarItems").append(dishHtml);
		}

		dishHtml = '<tr><td class="txt-right">SEK</td><td>'+model.getTotalMenuPrice()+'</td></tr>';

		$("#sidebarItems").append(dishHtml);

		this.removeBtn = container.find(".remove-btn");
	}

	function loadSidebar(){
		loadNbGuests();
		loadMenuOverview();
		
	}

}
 
