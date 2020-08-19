# One-Month-JS
Repo for Javascript Projects based on onemonth.com 

**Some useful APIS**

- https://darksky.net/dev/
- https://developers.soundcloud.com/docs/api/guide
- https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart
- https://stripe.com/docs/custom-form
- https://help.optimizely.com/Set_Up_Optimizely/Implement_the_Optimizely_snippet

Optimizely is used to conduct A/B testing on websites
Darksky is no longer in use (bought over by apple)

## Basic Syntax

#### Outputs to screen
We can write stuff to the Document Object Model (DOM) using: 
```
document.write("<h1>Hello Chris!</h1>");
```

#### Getting Inputs
We can use `prompt()` to get inputs from users
```
var username = prompt("Hello, who are you?");
```

#### Objects
Javascripts' version of Python Dictionaries. We access attributes using the dot method. 
```
var flight = {
			airline: "American Airways", 
			number: 235, 
			departure: {
				time: "2016-10-01",
				city: "JFK"
			}
		}
console.log(flight.departure.city);
```

#### Arrays
```
var car = new Array("BMW", "Saab", "Maserati");
```

#### Iterating through arrays
- We can use `forEach()` to iterate through each element in an array
- Inside the bracket, we pass in a callback function that performs an action on each element

In the example, `image` is the iterator in the function. 
```
var imageUrls = [Array of Image URLs]
imageUrls.forEach(function(image){
	
	// do something to each element 
    console.log(image)

  });
```

#### map() method
The map method allows us to apply a function to elements of an array. It is similar to Python list comprehension. 

The example below multiplies all numbers by 2. 
```
var numbers = [1,4,9];
var doubles = numbers.map(function(num){
	return num * 2;
});
```

#### For loops
```
var beatles = ["John", "Paul", "Ringo", "George"];

for(num = 0; num<4; num++) {
	document.write(beatles[num] + "<br>");
}
```

#### Functions
```
function catSound() {
console.log("nya nya");
}

catSound();
```

- A Javascript function can be stored in a variable. This is known as an anonymous function. 
- We can call the function by calling the variable name

```
var dogSound = function() {
console.log("wan wan");
};
dogSound();
```

We can also wrap multiple functions in a JS object. See Week 3 - SoundCloud API `main.js` for code example. 

#### if/else
- We can use `||` to indicate alternatives. 
- This is useful as a fallback, in case a given resource is not found. 

Example: display placeholder lorem ipsum image if image url not found. 
```
image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';
```

## Selectors

#### querySelector()
- querySelector lets us grab HTML elements from the DOM. 
- It returns the first Element within the document that matches the specified selector.
-  If no matches are found, null is returned.
-  If we want to get all matches, use `querySelectorAll()` instead
-  `querySelector()` can also be used to grab classes as well

```
<body>

		<h1>I'm Mr. JavaScript</h1>
		<a href="#" class="hello">Reset</a>
		<a href="#" class="howareyou">Hey JavaScript, how ya feeling?</a>
		<script type="text/javascript">
			var a = document.querySelector(".howareyou");
		</script>
</body>
```

#### getElementById() and getElementsByClassName()
Grab HTML elements by Id and Class 

Example: 
```
<body>

		<h1>I'm Mr. JavaScript</h1>
		<a href="#" id="reset">Reset</a>
		<a href="#" class="howareyou">Hey JavaScript, how ya feeling?</a>
		<script type="text/javascript">

		var reset = document.getElementById("reset");
		var a = document.getElementsByClassName("howareyou");

		</script>
</body>
```

## Events

#### addEventListener() 
This method  can be used to listen for when a user clicks on an element, when a user is typing, when the page fully loads, etc...

In the example below, when we click on the first <a> link, the <h1> text will change to "I'm alive!"
```
var a = document.querySelector("a");
a.addEventListener('click',function(){

	var h1 = document.querySelector("h1");
	/* innerHTML allows us to change the content of h1 */ 
	h1.innerHTML = "I'm alive!";
	console.log(h1);

});
```

We can also listen to keypresses using `keyup`. The key that is pressed will be stored in `e`:
```
document.querySelector(".js-userinput").addEventListener('keyup',function(e){

   var input = document.querySelector("input").value;
  console.log(input);

  // if the key ENTER is pressed...
  if(e.which === 13) {
    pushToDOM(input);
  }

});
```

#### onclick()
Run a particular function when a button is clicked
```
<button class="js-go container-button" onclick="show()">Go!</button> 

function show() {
 var el = document.querySelector("input").value;
 var container = document.querySelector(".js-container");
 container.innerHTML = el;
} 
```

## Animations
#### setTimeout()
The `setTimeout()` delays code execution by a certain amount of time. Using a for loop, we can create an animation effect. 

In the example below, we will append a box class containing a cat image to a container. 

```
<head>
	<meta charset="utf-8">
	<title>JavaScript: Animation</title>
	<style type="text/css">
	
		#container{
			position: absolute; 
			left: 20px; 
			top: 20px; 
			height: 500px; 
			width: 500px;
			border: 3px solid #CCC; 
			background-color: #FFF;
		}
		
		.box{	
			float: left; 
			width: 75px; 
			height: 100px;
			margin: 10px;
			background: #FFF url('http://placekitten.com/g/75/100/') no-repeat;
			}
	</style>
</head>
<body>
	<div id="container"></div>
	<script>
	
		var x;
		for(x=0;x<20;x++) {
			setTimeout(function(){
				var box = document.createElement('div');
				box.className = 'box';
				document.getElementById('container').appendChild(box);
			},500*x);
		}
	</script>
</body>
```

## AJAX
AJAX allows us to update parts of a webpage without reloading the entire page. 

Basic syntax: 
```
var url = "THE_URL_TO_CALL_GOES_HERE";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function( e ) {
// your callback events go here 
});
```

#### Parsing data with JSON
Most of the data we receive online is in JSON format. We can parse the input using 
```
data = JSON.parse(response)
```

## Adding items to the DOM
#### document.createElement()
Creates a HTML element, such as a div
```
var card  = document.createElement('div');
```

#### Adding Classes to a HTML Element
We can use `classList.add()` to add a class attribute to a HTML element. 
```
card.classList.add("card");
```

We can also use `classList.toggle()`. This will remove the class if present, otherwise add it. 
```
card.classList.toggle("visible");
```

#### appendChild()
- This is used to add HTML elements to parent element. 
- Useful when you want to add a bunch of divs to a parent div. 
- Example use cases include image gallery (rendering each image in a separate card div).
- Each of the card divs belong to a big container div. 

```
//First we search for the parent div
var searchResults = document.querySelector('.js-search-results');

//Append the child div to the parent div
searchResults.appendChild(card);
```

## LocalStorage
Local storage allows us to persist data in a user's browser. 

We can store data in key-value pairs
```
localStorage.setItem("key", value);
```

Retrieving data
```
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");
```

Removing a specific piece of data
```
localStorage.removeItem("key");
```

Removing all data
```
localStorage.clear();
```

## Data Visualization
#### Google Charts
Google Charts allows us to create interactive charts using JavaScript: https://developers.google.com/chart

#### Tabletop.js
- Tabletop.js allows us to use google spreadsheets as a database. 
- It returns data in JSON format. 

Update: Tabletop js is no longer supported by google. The creators recommend that we use Papa Parse instead. 

Further update: It seems that even the Papa Parse method has issues (Security risk of exposing API key. Best to just ignore and stick with Python)
```
function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
window.addEventListener('DOMContentLoaded', init)
```

