# Javascript-Projects
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

#### Arrays
```
var car = new Array("BMW", "Saab", "Maserati");
```

#### For loops
```
var beatles = ["John", "Paul", "Ringo", "George"];

for(num = 0; num<4; num++) {
	document.write(beatles[num] + "<br>");
}
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

