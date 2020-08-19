/* Search */

var UI = {};

UI.EnterPress = function(){
	document.querySelector(".js-search").addEventListener('keyup',function(e){

  	// if the key ENTER is pressed...
  	if(e.which === 13) {
  		var input = e.target.value;
    	SoundCloudAPI.getTrack(input);
  	}

	});
}

UI.SubmitClick = function(){
	document.querySelector(".js-submit").addEventListener('click',function(e){

  	var input = document.querySelector(".js-search").value;
  	SoundCloudAPI.getTrack(input);

	});
}

UI.Clear = function(){
	document.querySelector(".container-button").addEventListener('click',function(e){

	localStorage.clear();
  	var side = document.querySelector('.js-playlist');
  	side.innerHTML = "";

	});
}

UI.EnterPress();
UI.SubmitClick();
UI.Clear();

/* Query Soundcloud API*/ 

var SoundCloudAPI = {};

SoundCloudAPI.init = function(){
	SC.initialize({
  		client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});
};

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
	SC.get('/tracks', {
  		q: inputValue
	}).then(function(tracks) {
  	SoundCloudAPI.renderTracks(tracks);
	});
};

/* Display the cards */
SoundCloudAPI.renderTracks = function(tracks){

	tracks.forEach(function(track) {

		//create card
		var card = document.createElement('div');
		card.classList.add("card");

		//create image in card
		var imageDiv = document.createElement('div');
		imageDiv.classList.add("image");

		var image_img = document.createElement('img');
		image_img.classList.add("image_img");
		image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';
		imageDiv.appendChild(image_img);

		//create content
		var content = document.createElement('div');
		content.classList.add("content");

		var header = document.createElement('div');
		header.classList.add("header");
		header.innerHTML = '<a href="' +track.permalink_url+ '" target="_blank">' + track.title +'</a>';

		//button
		var button = document.createElement('div');
		button.classList.add('ui','bottom','attached','button','js-button');

		var icon = document.createElement('i');
		icon.classList.add('add','icon');

		var buttonText = document.createElement('span');
		buttonText.innerHTML = "Add to playlist";

		//append items
		content.appendChild(header);

		button.appendChild(icon);
		button.appendChild(buttonText);

		button.addEventListener('click',function(){
			SoundCloudAPI.getEmbed(track.permalink_url);
		});

		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(button);

		var searchResults = document.querySelector(".js-search-results");
		searchResults.appendChild(card); 

	});
};


/* Add to playlist and play */ 

SoundCloudAPI.getEmbed = function(trackURL){
	SC.oEmbed(trackURL, {
  		auto_play: false
	}).then(function(embed){
  		console.log('oEmbed response: ', embed);
  		var sideBar = document.querySelector('.js-playlist');


  		// add songs to sidebar playlist
  		var box = document.createElement('div');
		box.innerHTML = embed.html;
		sideBar.insertBefore(box, sideBar.firstChild);

		//store data in user browser
		localStorage.setItem("key", sideBar.innerHTML);
	});
}

//Retrieve data from user browser
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");