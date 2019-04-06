var buf = new Buffer(10);
var fs = require('fs');
require("dotenv").config();
var moment = require('moment');
moment().format();
var userInput = process.argv[2];
var qs = require("query-string")
var keys = require("./key");
var SpotifyWebApi = require('spotify-web-api-node');
var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '2832fb971a59437e9d30087877ff297c',
  secret: 'cd3d6bbd625f4ffeb2c14511f7052068'
});


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
function spotifyThis() {
  var song = process.argv
  song = song.slice(3);
  song = song.toString();
  song = song.replace(",", " ");
  spotify.search({ type: 'track', query: song }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    //Trying to get the album name to show up

    // console.log(data.tracks.items[1]);
    // console.log(data.tracks.items[1]);
    // console.log("Album Name: "+data.tracks.items[1])

    // console.log("Song Preview: " + data.tracks.items[1].preview_url);
    // console.log("Song Name: " + data.tracks.items[1].name);
    console.log(data.tracks.items[1]);
  });
}
// else if (userInput === "do-what-it-says") {
//   fs.readFile("./random.txt", (err, data) => {
//     if (err) throw err;
//     else {
//       var info = buf.toJSON("" + data + "");
//       console.log(info);
//     }
//   })
if (userInput === "do-what-it-says")
  try {
    var data = fs.readFileSync('./random.txt', 'utf8');
    console.log(data);
    process.argv[2] = data
    song = data;
    return song;
    spotifyThis(song);
  } catch (e) {
    console.log('Error:', e.stack);
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