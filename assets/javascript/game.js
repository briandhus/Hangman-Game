var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var renderedString = "";
var wins = 0;
var losses = 0;
var ties = 0;



// computer establishes random movie title

var randomTitle = titles[Math.floor(Math.random() * titles.length)];
console.log(randomTitle);

// computer renders length of title in underscores
for (var i = 0; i < randomTitle.length; i++) {
	if (randomTitle[i] === " ") {
		renderedString += " ";		
	} else {
		renderedString += "_";
	}
	
}

console.log(renderedString)


// user picks a letter

document.onkeypress = function(event) {
     
	var userGuess = event.key;

	for(var i = 0; i < randomTitle.length; i++) {
		if (userGuess === randomTitle[i]) {
			renderedString[i] = randomTitle[i];
			console.log(renderedString);
		}

	}

};

// letter is correct, fills in blanks, letter is no longer an option

// letter is incorrect, letter no longer option
//  letter is shown on screen as used

// hangman counter counts down for incorrect answers
// if reaches 0, game over, 
// count loss
// if title completed game over,
// count win