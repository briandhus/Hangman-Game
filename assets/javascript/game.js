var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var word = "";
var wins = 0;
var losses = 0;
var ties = 0;

confirm("Are you ready to play Hollywood Hangman?");

var randomTitle = titles[Math.floor(Math.random() * titles.length)];

document.onkeyup = function(event) {
        
	var userGuess = event.key;
};