/* 1. Grab the input value */
/* when .js-go button is clicked, grab input */
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  searchQuery(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

   var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if(e.which === 13) {
    searchQuery(input);
  }

});



/* 2. do the data stuff with the API */
function searchQuery(search) {
  var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + search;

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    pushToDOM(data);

  });
}




/* 3. Show me the GIFs */
function pushToDOM(input) {

	var response = JSON.parse(input);
	var imageURL = response.data;
	var container = document.querySelector(".js-container");

  //Clear the old content every time a new search is run
  container.innerHTML = "";

	imageURL.forEach(function(image){

		var src = image.images.fixed_height.url;

		
		/* need to use img src to actually display the image */ 
		/* use += to append to the container instead of overwriting */ 
    	container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

	});


}