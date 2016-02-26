//View4 Object constructor
var View4 = function (container, model) {

	this.confirmBtn = container.find("#confirmDish");


	$("#backToMain").click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	this.confirmBtn.click(function(){

		$('#dishContainer').show();
		$('#preparationDetails').hide();

	})

	function loadDish(id){
		var dish = model.getDish(id);
		var nbGuests = model.getNumberOfGuests();
		var ingrHtml = "";
		var ingredientsList = dish.ingredients;
		var ingredient = null;

		$("#ingredients-list").empty();

		$("#preparationTitle").html(dish.name);
		$("#preparationImg").attr("src", "./images/"+dish.image);
		$("#preparationText").html(dish.description);
		$("#nbGuests").html(model.getNumberOfGuests());
		$("#totalIngredientsPrice p").html(model.getDishPrice(dish.id));
		$("#confirmDish").attr("data-id",dish.id);

		for (var i = 0; i <= ingredientsList.length-1; i++) {
			ingredient = ingredientsList[i];

			ingrHtml = '<div class="ingredient ">';
			ingrHtml += '<div class="col-xs-3"><p>'+ingredient.quantity+" "+ingredient.unit+'</p></div>';
			ingrHtml += '<div class="col-xs-6"><p>'+ingredient.name+'</p></div>';
			ingrHtml += '<div class="col-xs-1"><p>SEK</p></div>';
			ingrHtml += '<div class="col-xs-2 ingredient-price"><p>'+ingredient.price*nbGuests+'</p></div>';
			ingrHtml += '</div>';

			$("#ingredients-list").append(ingrHtml);
		}

	}

}
 
