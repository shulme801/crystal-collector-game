$(document).ready(function(){


var timer = 5;

var intervalId;

function delayRestart() {
    // Borrowing code from the interval example from 19 Oct class.
    // We'll count down 5 secs until we restart game.
      intervalId = setInterval(countDown, 1000);
}

function countDown() {

    timer--;

    $("#userScore").text("You " + crystalGame.stateOfPlay + " -- Game will restart in " + timer + " seconds");

    if (timer === 0) {
       crystalGame.stateOfPlay = "continue";
       timer=5;
       clearInterval(intervalId);
       crystalGame.resetGame();
    }
}

    
// The crystalGame Object, with its properties and methods

	var crystalGame = {
		userWins:               0,
		userLosses:             0,
		amethystVal: 			0,
		emeraldVal:  			0,
		rubyVal:     			0,
		sapphireVal: 			0,
		targetScore:   			0,
		userScore:   			0,
		lowerLimitGame:    	   19,
		upperLimitGame:       120,
        lowerLimitCrystal:      1,
        upperLimitCrystal:     12,
        stateOfPlay:    "continue",

        getRandomInteger: function(lowerLimit,upperLimit){
        	return Math.floor(Math.random()*(upperLimit-lowerLimit+1)+lowerLimit);
        },

        resetGame: function() {
            this.userScore = 0;

            // Init the targetScore to a pseudo-random number in the prescribed range
            this.targetScore = this.getRandomInteger(this.lowerLimitGame,this.upperLimitGame);
           
            // Initialize the gems' values to pseudo-random numbers in the prescribed range
            this.amethystVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
            this.emeraldVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
            this.rubyVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
            this.sapphireVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);

            // And put the initial values up on the display
            $("#num2Guess").text(this.targetScore);
            $("#userScore").text("0");
        },

        startGame: function() {
            // First, get initial values for userScore, targetScore and the gems' values
        	this.resetGame();

            this.userWins   = 0;
            this.userLosses = 0; 

            // Display the initial values
        	$("#numWins").text("Wins: 0");
        	$("#numLosses").text("Losses: 0");
        	$("#num2Guess").text(this.targetScore);
        },

        

        processStateOfPlay: function() {
            // This is the logic that determines whether the user won or lost.
            // User wins if the current this.userScore matches the 
            // this.targetScore. If user has won, we increment this.UserWins
            // count, display the updated wins count, and reset the game.
            // User loses if the current this.userScore is greater than
            // this.targetScore.  If user has lost, we increment this.UserLosses,
            // display the updated losses count, and reset the game.
            // If his.userScore is less than this.targetScore, we let user 
            // keep on playing!

            if (this.userScore == this.targetScore){
                this.userWins++;
                $("#numWins").text("Wins: "+this.userWins);
                this.stateOfPlay = "won";
                $("#userScore").text("You " + crystalGame.stateOfPlay + " -- Game will restart in " + timer + " seconds");
                delayRestart();
            } else if (this.userScore > this.targetScore){
                this.userLosses++;
                $("#numLosses").text("Losses: "+this.userLosses);
                this.stateOfPlay = "lost";
                $("#userScore").text("You " + crystalGame.stateOfPlay + " -- Game will restart in " + timer + " seconds");
                delayRestart();
            } else {
                // Don't update the displayed Wins and Losses. Let user
                // continue to play the game.
                this.stateOfPlay = "continue";
            }
        }

	}

// An on click listener to all elements that have the class "gemstone"
// It updates the score, based on which gem the user clicked, and then
// calls the logic that determines whether user won or lost.
      $(".gemstone").on("click", function() {
        switch ($(this).attr('value')){
            case "amethyst":
                crystalGame.userScore += crystalGame.amethystVal;
                break;
            case "emerald":
                crystalGame.userScore += crystalGame.emeraldVal;
                break;
            case "ruby":
                crystalGame.userScore += crystalGame.rubyVal;
                break;
            case "sapphire":
                crystalGame.userScore += crystalGame.sapphireVal;
                break;
            default:
                alert("Unknown gem!!");
                break;
        }
        $('#userScore').text(crystalGame.userScore);

        // find out whether user won or lost
        crystalGame.processStateOfPlay();
        
      });

    //Start the game
	crystalGame.startGame();

});