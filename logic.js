   
   
   
   var p =  p = prompt("Welcome to Retro Videogame Hangman. Tell us how many letter guesses you need in order to guess one old videogame title:");;
    
    
    //Define global variables:
    //-----------------------------------------------------------------------------------------------------

    var wrongGuess = 0;  // Start a counter at zero for number of wrong guesses.
    var allowedGuesses = pm;  //This allows us to set the difficulty and just adds resilience to our code.
    var livesRemaining = allowedGuesses;
    var spelledWord = []; //This blank array will be populated by a for-loop that will spell out our chosen answer.
    var guessStatus = false;
    var fixScopeOfUserGuess = null;

        // Create an array with all the possible needed content. Adding a few more here for now to test.
        // Consider making this an object instead, so that you can select properties, etc.
    var detailsArray = [
        ["Centipede", "wordLengthSelfRef", "link to picture"],
        ["Defender", "wordLengthSelfRef", "link to picture"],
        ["Frogger", "wordLengthSelfRef", "link to picture"],
        ["Galaga", "wordLengthselfRef", "link to a picture"],
        ["Tron"],
        ["Joust"],["Xevious"],["Zaxxon"],["Gyruss"],["Paperboy"],["Mappy"],["Mario Bros"],["Dragon's Lair"],["Dig Dug"],["Qix"],["Phoenix"],["Galaxian"],["Asteroids"],["Berzerk"],
        ];

    var emptyWord = [];     // This is the empty (with dashes) array that will populate as letters are guessed.  

        //This will give us a random number to define which word we pick. It is generated at the load of the page now, so will probably need to move into a certain time in the function, later.
     var numRand = (Math.floor(Math.random() * Math.floor(detailsArray.length)));
        //This var picks the first word in our array, effectively picking the word we'll work with.
     var theAnswer = (detailsArray[numRand][0]);
    console.log(theAnswer);
    console.log("^-------1: The word that we'll use is chosen randomly.")
    


// Create functions:
//-------------------------------------------------------------------------------------------------------
  

    function updateHTML() {
        document.querySelector("#blanks").innerHTML = "    " + emptyWord.join('');
        document.querySelector("#user-guess").innerHTML = fixScopeOfUserGuess;
        document.querySelector("#guesses").innerHTML = " " +allowedGuesses+ " ";
        document.querySelector("#lives-left").innerHTML = livesRemaining;
    }

    function fixCase(anArray) {
        for(var i= 0;i<theAnswer.length;i++){  /// Note we cheat here and get length from chosen word.
        console.log(anArray[i]);
        anArray[i] = anArray[i].toLowerCase();
        }
    }

    function keepPlaying() {  //This will let the game continue, refreshing the code to give letters on user input.
        if (wrongGuess < (allowedGuess+1));   // Add an "or you've not yet won"
    }

    function arraysEqual(arr1, arr2) {
            if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
            return false;
        } return true;
    }


// MAIN PROCESS:
//-------------------------------------------------------------------------------------------------------


// This for-loop populates our empty spelledWord variable with the letters of our chosen word.
    for (var i = 0; i < theAnswer.length; i++) {
        spelledWord.push(theAnswer.charAt(i));
    }



        console.log(spelledWord);
        console.log("^-------2: The chosen word is broken into letters and stored in an array.")
    
    var wordLength = spelledWord.length;
        console.log(wordLength);
        console.log("^-------3. We set the length of our clue ....");
        console.log("v-------4. ...and we output dashes that are as long as our word.");
   
// This for loop will populate our dashes array with the right number of blanks (dashes).
    for (var i = 0; i < wordLength; i++) {
        emptyWord.push("-");
    }

//And we push those dashes onto the screen for the user.
    console.log("<-------6. And then we put those dashes onto the screen.");
    document.querySelector("#blanks").innerHTML = "    " + emptyWord.join('');

    document.querySelector("#guesses").innerHTML = " " +allowedGuesses+ " ";
    document.querySelector("#lives-left").innerHTML = livesRemaining;


    fixCase(spelledWord);     /// FIND MY HOME
    console.log("-------> 7. Case has been fixed. See: " + spelledWord);



    

   // a check for letter validity!
    
    
   

    document.onkeyup = function(input){             // User hits a key
    var userGuess = input.key.toLowerCase();                      // The key they press is defined as their guess.
    // console.log(userGuess);
    // console.log("^^^3: This letter is the user's guess.")
    document.querySelector("#user-guess").innerHTML = userGuess;
    


    fixScopeOfUserGuess = userGuess;

    for(var i=0;i<spelledWord.length;i++){
    
    //THINGS TO DO WHEN A GUESS IS RIGHT
        if(userGuess === spelledWord[i]){
        emptyWord.splice([i], 1, userGuess)
        console.log("You guessed a proper letter!");
        }
    }  //END OF FOR LOOP

    var wordTogether = spelledWord.join('');

    if (wordTogether.includes(userGuess) === !true){
        console.log("JUST ONE WRONG GUESS?");
        wrongGuess++;
        livesRemaining--;
    }

    console.log("We're out of the loop +++++++++++++  Are our guesses counting correctly?");
    console.log(wrongGuess);


    updateHTML();   //This function refreshes our values sent as text to the webpage.

//Check to see if we have won...
    if (arraysEqual(emptyWord, spelledWord) === true) {
        console.log("Victory Condition Met");
        alert("Your guess of " +theAnswer+ " was correct! Congratulations! Enjoy the game again...");
        location = location;
        }
        //
    if (wrongGuess >= allowedGuesses) {
        console.log("LOSS Condition Met");
        alert("You guessed incorrectly too many times. You lose. The answer we were looking for was " +theAnswer+ ". Click okay to try again!");
        location = location;
    }


    }   // END OF PRESS FUNCTION


