$(document).ready(function(){


// The crystalGame Object, with its properties

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
        getRandomInteger: function(lowerLimit,upperLimit){
        	return Math.floor(Math.random()*(upperLimit-lowerLimit+1)+lowerLimit);
        },
        startGame: function() {
        	this.userScore = 0;
        	this.targetScore = this.getRandomInteger(this.lowerLimitGame,this.upperLimitGame);
        	console.log("targetScore is "+this.targetScore);
        	this.amethystVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
        	this.emeraldVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
        	this.rubyVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);
        	this.sapphireVal = this.getRandomInteger(this.lowerLimitCrystal,this.upperLimitCrystal);

        	$("#numWins").text("Wins: 0");
        	$("#numLosses").text("Losses: 0");
        	$("#num2Guess").text(this.targetScore);
        }

	}

	crystalGame.startGame();

	$( "#amethyst" ).click(function() {
        
        console.log("userScore was "+crystalGame.userScore);
        console.log("amethystVal is "+crystalGame.amethystVal);
        crystalGame.userScore += crystalGame.amethystVal;
		$('#userScore').text(crystalGame.userScore);
       

    });

    $( "#emerald" ).click(function() {
        console.log("userScore was "+crystalGame.userScore);
        console.log("emeraldVal is "+crystalGame.emeraldVal);
        crystalGame.userScore += crystalGame.emeraldVal;
        $('#userScore').text(crystalGame.userScore);

    });

    $( "#ruby" ).click(function() {
        console.log("userScore was "+crystalGame.userScore);
        console.log("rubyVal is "+crystalGame.rubyVal);
        crystalGame.userScore += crystalGame.rubyVal;
        $('#userScore').text(crystalGame.userScore);
       

    });

    $( "#sapphire" ).click(function() {
        console.log("userScore was "+crystalGame.userScore);
        console.log("sapphireVal is "+crystalGame.sapphireVal);
        crystalGame.userScore += crystalGame.sapphireVal;
        $('#userScore').text(crystalGame.userScore);

    });



});