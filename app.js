//Tutorial followed: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config); //Our application details (which are necessary to interact with the Twitter API) are being passed into the npm module Twitter. This npm module simplifies the process of interacting with Twitter’s API. 



//When working with the Twitter API and npm Twitter package, every post request looks like this:

//T.post('route', {params}, function(err, response){
  // Test for Errors
  // If no errors, log success
//});


//New update please work
//ahaha