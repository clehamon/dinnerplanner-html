//View5 Object constructor
var View5 = function (container, model) {

	$("#backFromEnd").click(function(){

		$('#finalMenu').hide();
		$('#finalMenuDishes').hide();
		$('#finalMenuList').hide();
		$('#dishContainer').show();
		$('#dishContainer').show();

		// Change main container width

		var main = $(".main");

		main.removeClass('col-xs-12');
		main.addClass('col-xs-9');

		$('#sidebar').show();

	})

	

	$("#goToPrint").click(function(){

		loadFinalMenuPrint();
		$('#finalMenu').show();
		$('#finalMenuList').hide();
		$('#finalMenuDishes').show();

	})


	function loadFinalMenuPrint(){
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
 
