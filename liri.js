var keyList = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

function mytweets (){
var client = keyList.twitterKeys;
	client.get('search/tweets', {q: 'carmen_bootcamp', count: 20}, function(error, tweets, response){
		if(error){
			console.log(error);
		}
		else{
			var a = (JSON.parse(response.body));
			var tweetInfo = a.statuses
			for (i = 0; i < tweetInfo.length; i++){
				console.log("Tweet: " + tweetInfo[i].text)
				console.log("Created: " + tweetInfo[i].created_at)
			}
		}

	})
}


function spotifyThisSong(){
	var spotify = keyList.spotify;
	
	var song = process.argv[3]
		if (!song){
			song ='The-Sign'
		}	
	spotify.search({type: 'track', query: song}, function(err, data){
		if (err){
			return console.log('Error: ' + err);
		}
		var songInfo = data.tracks.items;
		for (i = 0; i < songInfo.length; i++){
			console.log("Artist: " + songInfo[i].artists[i].name)
			console.log("Title: " + songInfo[i].name)
			console.log("Album: " + songInfo[i].album.name)
			console.log("Link: " + songInfo[i].preview_url)
			return
		}
	})
}


function movieThis(){
	var movie = process.argv[3]
	if (!movie){
		movie = 'Mr-Nobody'
	}
	request("http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&apikey=40e9cece", function(error, response, body){
		if(!error&&response.statusCode===200){
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Release year: " + JSON.parse(body).Released)
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
			console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoRating)
			console.log("Country: " + JSON.parse(body).Country)
			console.log("Language: " + JSON.parse(body).Language)
			console.log("Plot: " + JSON.parse(body).Plot)
			console.log("Cast: " + JSON.parse(body).Actors)
		}

	})

}

function doWhatItSays(){
	fs.readFile('./random.txt', 'utf8', function(error, data){
		if(error){
			return console.log(error);
		}
		var results = data.split(',', 2)
		var action = results[0]
		console.log(action)
		// action === process.argv[2];
		
		var prompt = results[1].replace( / /g, '-', 5)
		console.log(prompt)

		return spotifyThisSong();
	})
}



var command = process.argv[2]
if (command==="my-tweets"){
	mytweets()
}
else if(command==="spotify-this-song"){
	spotifyThisSong()
}
else if(command==="movie-this"){
	movieThis()
}
else if(command==="do-what-it-says"){
	doWhatItSays()
}
else{
	console.log("Tell me what to do!?")
}
