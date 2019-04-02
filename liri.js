var userInput = process.argv[2];

src = "https://sdk.scdn.co/spotify-player.js"
require("dotenv").config();
var keys = require("./key");

//movie package!
var axios = require("axios");
axios.get("http://www.omdbapi.com/?t=zombieland&y=&plot=short&apikey=ae0bd42b").then(function (response) {
  // console.log(response);

});
//------------------------------------------------------------

//spotify web api initialize
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});
spotifyApi.setAccessToken(keys.spotify.id);
//------------------------------------------------------------



if (userInput === "concert-this") {
  // for (var i = 3; i < process.argv.length; i++) {
  //   var songWords = process.argv[i];
  //   var songString = "";
  //   var songString = + songWords;
  // }
  // console.log(parseInt(songString));

  axios.get("https://rest.bandsintown.com/artists/LilPump/events?app_id=" + keys.bands.id).then(function (response) {
    console.log(response.data[1].venue.name);
    console.log(response.data[1].datetime);
  });

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