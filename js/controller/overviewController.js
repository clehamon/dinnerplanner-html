var OverviewController = function (view, model){

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


	$("#confirmDinner").click(function(){

		view.loadFinalMenuList();
		$('#dishContainer').hide();
		$('#finalMenu').show();
		$('#finalMenuList').show();

	})

	

	$("#goToPrint").click(function(){

		view.loadFinalMenuPrint();
		$('#finalMenu').show();
		$('#finalMenuList').hide();
		$('#finalMenuDishes').show();

	})

}


