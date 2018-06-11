function processingRoutine() {

	var swipedElement = document.getElementById(triggerElementID);

	if ( swipeDirection == 'left' ) {

		// REPLACE WITH YOUR ROUTINES

		swipedElement.style.backgroundColor = 'orange';

	} else if ( swipeDirection == 'right' ) {

		// REPLACE WITH YOUR ROUTINES

		swipedElement.style.backgroundColor = 'green';

	} else if ( swipeDirection == 'up' ) {

		// REPLACE WITH YOUR ROUTINES

		swipedElement.style.backgroundColor = 'maroon';

	} else if ( swipeDirection == 'down' ) {

		// REPLACE WITH YOUR ROUTINES

		swipedElement.style.backgroundColor = 'purple';

	}

}

// variables toevoegen

var singleProductStar = document.getElementById('single-product-star');

var starButton = document.getElementById('single-product-btnFavo');

var starChecked = false;



starButton.onclick = function(){

	if(starChecked == false){

		singleProductStar.className = 'fas fa-star';

		singleProductStar.style.color = '#FFCF00';

		starChecked = true;

	} else {

		singleProductStar.className = 'far fa-star';

		singleProductStar.style.color = 'black';

		starChecked = false;

	}

}