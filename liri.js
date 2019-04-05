require("dotenv").config();
var moment = require('moment');
moment().format();
var userInput = process.argv[2];
var qs = require("query-string")
var keys = require("./key");
var SpotifyWebApi = require('spotify-web-api-node');
var axios = require("axios");



var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});
spotifyApi.setAccessToken(keys.spotify.id);
//------------------------------------------------------------


//concert this lines!!!
if (userInput === "concert-this") {
  var artist = process.argv
  artist = artist.slice(3)
  artist = artist.join();
  artist = artist.replace(",", "%20")
  var axios = require("axios");
  var apikey = process.env.BANDS_ID;
  var url = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=99ab2666-e9aa-4536-abb6-4994b7cb5f98");
  axios.get(url).then(function (response) {
    var date = response.data[1].datetime;
    var dateObject = moment(date, "YYYY-MM-DD")
    dateObject = moment(dateObject).toDate("YYYY-MM-DD")
  var city = response.data[1].venue.city;
  console.log(response.data[1].venue.name);
  console.log("\nCity: " + city);
  console.log("\nCountry: " + response.data[1].venue.country);
  console.log("\nDate: " + (dateObject));
});
//-----------------------------------------------------------------------------------------------------------------
}

//movie-this!!!
else if (userInput === "movie-this") {
  var movie = process.argv;

  axios.get("http://www.omdbapi.com/?t=" + (movie.slice(3)) + "&y=&plot=short&apikey=ae0bd42b").then(function (response) {
    var title = response.data.Title;
    var year = response.data.Year;
    var IMDBrating = response.data.imdbRating;
    var rottenScore = response.data.Ratings[1].Value;
    console.log("Title: " + title);
    console.log("Year: " + year);
    console.log("IMDBRating: " + IMDBrating);
    console.log("Rotten Tomatos score: " + rottenScore)

  });
}
//-------------------------------------------------------------------

else if (userInput === "spotify-this") {

}





















//Spotify music player
// const play = ({
//     spotify_uri,
//     playerInstance: {
//       _options: {
//         getOAuthToken,
//         id
//       }
//     }
//   }) => {
//     getOAuthToken(access_token => {
//       fetch(`https://api.spotify.com/v1/me/player/play?device_id=${keys.spotify.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ uris: [spotify_uri] }),
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${access_token}`
//         },
//       });
//     });
//   };

//   play({ 
//     playerInstance: new Spotify.Player({ name: "..." }),
//     spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
//   });

//   var player = new Spotify.Player({
//     name: 'Carly Rae Jepsen Player',
//     getOAuthToken: callback => {
//       // Run code to get a fresh access token

//       callback('access token here');
//     },
//     volume: 0.5
//   });
//   player();
//   console.log(player);