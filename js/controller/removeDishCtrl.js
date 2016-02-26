//RemoveDishCtrl Object constructor
var RemoveDishCtrl = function(view, model ) {
 
	view.sidebarItems.on('click', '.remove-btn', function (event) {

		//Get the dish id from in the button
		var dishId = event.target.dataset['id'];
		
		model.removeDishFromMenu(dishId);

	});

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

	

}