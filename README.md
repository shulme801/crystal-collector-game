# # Crystal Collector Game#
## Uses bootstrap and jQuery.
## The Basics
	* There will be four crystals displayed as buttons on the page.
	* The player will be shown a random number at the start of the game.
	* When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
	* The game will hide this amount until the player clicks a crystal.
	* Each time a player clicks one of the crystals the game will update the player's score.
	* The player wins if the player's total score matches the random number from the beginning of the game.
	* The player loses if the score goes exceeds the random number.
	* The game restarts whenever the player wins or loses.

## Restart Processing
### When the game restarts:
* The player will see a new random number. 
* The crystals will have four new hidden values. 
* The user's score (and score counter) will reset to zero.
* The app will show the number of games the player wins and loses.