
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var twitterKeys = new Twitter({
	consumer_key: '7lQSIICRZWhFoDAYzxGqntnXt',
	consumer_secret: 'WsQobBeL91Ek3fY6KnhZRRDNDSEwanJ66y6orGObONnDpFcqxo',
	access_token_key: '917633603659472896-9koZJ9C5S8GaUT8hGg3DPxUpwNcZHTX',
	access_token_secret: 'zQ99RAZ0rv6scIGiavEk2csXhFbk1VXxzjbsgnYeR7V5O',
});

var spotify = new Spotify({
	id: '1a07cc3d84e3471aa6f58d5c3ebc487c',
	secret: 'b90357a306604ef78416fc97872eed47',
});


module.exports = {
	twitterKeys,
	spotify,
	request,
}

