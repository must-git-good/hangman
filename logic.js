

// Starting with a prompt is one option. For now, because it feels heavy-handed and I don't want to build a nicer input, we'll start with a pre-defined number of guesses.
//    var p =  p = prompt("Welcome to Retro Videogame Hangman. Tell us how many letter guesses you need in order to guess one old videogame title:");;


//DEFINE GLOBAL VARIABLES AND SET INITIAL VALUES:
//-----------------------------------------------------------------------------------------------------

var wrongGuess = 0;                     // Start a counter at zero for number of wrong guesses.
var allowedGuesses = 12;                //This allows us to set the difficulty once and  adds resilience to our code.
var livesRemaining = allowedGuesses;    //Leave this, as it addresses a scope issue with variable declaration.
var spelledWord = [];                   //This blank array will be populated by the letters of our word.
var userGuess;                          //The user's guess.
var addToUsedWords = []                 // Will exist later.
var detailsArray = [                    //Database' of nested arrays. Word choices w/ room for links/content. Add more over time.
    ["Centipede", "www.example.com/more_content", "OtherContent"], ["Defender"], ["Frogger"], ["Galaga"], ["Tron"], ["Joust"], ["Xevious"], ["Zaxxon"], ["Gyruss"], ["Paperboy"], ["Mappy"], ["Qix"], ["Phoenix"], ["Galaxian"], ["Asteroids"], ["Berzerk"], ["Pong"],["Pitfall"],["Tetris"],["Gauntlet"],["Contra"],["Lemmings"],["SimCity"],["Doom"],["Myst"],["EarthBound"],["Wipeout"],["Metroid"],["Zork"] ];
var emptyWord = [];                     // Empty array that will populate as letters are guessed.  
var numRand = (Math.floor(Math.random() * Math.floor(detailsArray.length)));  //Random array-viable value.    
var theAnswer = (detailsArray[numRand][0]); //This var picks the first word in our array, choosing an answer.
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(theAnswer);
console.log("^-------1: The word that we'll use is chosen randomly.")



// CREATE GLOBAL FUNCTIONS:
//-----------------------------------------------------------------------------------------------------

function updateHTML() {                     // Will allow us to see current values on the user's page.
    document.querySelector("#blanks").innerHTML = "    " + emptyWord.join('');
    document.querySelector("#guesses").innerHTML = " " + allowedGuesses + " ";
    document.querySelector("#lives-left").innerHTML = livesRemaining;
}

function fixCase(anArray) {                 // We can set arrays to lower-case to help with inputs & comparisons.
    for (var i = 0; i < theAnswer.length; i++) {
        anArray[i] = anArray[i].toLowerCase();
    }
}

function arraysEqual(arr1, arr2) {          // Will allow us to easily compare the values inside of an array
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    } return true;
}


// MAIN PROCESSES:
//-------------------------------------------------------------------------------------------------------

for (var i = 0; i < theAnswer.length; i++) {        //Populates our spelledWord var with the answer's letters.
    spelledWord.push(theAnswer.charAt(i));
}
            console.log(spelledWord);
            console.log("^-------2: The chosen word is broken into letters and stored in an array.")

var wordLength = spelledWord.length;                //Formally set the word length for future reference.
            console.log(wordLength);
            console.log("^-------3. We set the length of our clue ....");


for (var i = 0; i < wordLength; i++) {              //Populate an array with the right number of dashes.
    emptyWord.push("-");
}

document.querySelector("#blanks").innerHTML = "    " + emptyWord.join('');      //Show to user
            console.log("<-------4. And then we put dashes on the screen at the proper length.");
document.querySelector("#guesses").innerHTML = " " + allowedGuesses + " ";        //Show to user
document.querySelector("#lives-left").innerHTML = livesRemaining;               //Show to user
            console.log("<-------5. Our guesses and lives remaining are also visible now.")

fixCase(spelledWord);                               //Run the function to fix case on our word array.
            console.log("------->6. We fix our case. This should now be lower case: " + spelledWord);

            console.log("--------7. That's it for set-up. Now we wait for user inputs.")

//  ACTIONS BASED ON USER INPUT
// ---------------------------------------------------------------------------------------------------------

document.onkeyup = function (input) {                                 // User hits a key

    userGuess = input.key.toLowerCase();                        // The key they press is defined as their guess.
            console.log(userGuess);
            console.log("-------^ The user has made a guess.")

    if (alphabet.includes(userGuess) !== true) {
        alert("Please pick a letter.");
        return;
    }

    addToUsedWords = userGuess
    document.querySelector("#user-guess").textContent = userGuess;

    for (var i = 0; i < spelledWord.length; i++) {
        if (userGuess === spelledWord[i]) {                           //Things to do when guess is correct.
            emptyWord.splice([i], 1, userGuess)
            console.log("Proper guess flag.");
        }
    } //END OF FOR LOOP

    var wordTogether = spelledWord.join('');                        //Rebuild array to single word so 'includes' works

    if (wordTogether.includes(userGuess) === !true) {                //Track wrong guesses.
            console.log("Wrong guess flag.");
        document.getElementById("old-guesses").textContent += addToUsedWords;
        wrongGuess++;
        livesRemaining--;
    }

    updateHTML();                                                  //Refresh our html text that needs values.

    if (arraysEqual(emptyWord, spelledWord) === true) {            //Check to see if we have won...
            console.log("VICTORY Condition Met");
        setTimeout(function () {
            alert("Your guess of " + theAnswer + " was correct! Congratulations! Play again...?");
            location = location;
        }, 400);

    }

    if (wrongGuess >= allowedGuesses) {                             //Check to see if we've lost...
            console.log("LOSS Condition Met");
        setTimeout(function () {
            alert("GAME OVER! You guessed incorrectly too many times. You lose. The answer we were looking for was " + theAnswer + ". Click okay to try again!");
            location = location;
        }, 400);
    }

}   // END OF PRESS FUNCTION

//-------------------------------------------------------------------------------------------------------------



    // THINGS TO WORK ON OR IMPLEMENT:

        //  Change page refresh to just a fresh game in-window.
        //  Put link to wiki article that games were pulled from in the readme!
        //  Add bonus content or link background music from the game as a clue, etc.
        //  Cycle difficulty: if user just won, give them 1 less guess on NewGame. If they lose, give 2 more guesses. Easter Egg at a 1 guess win?