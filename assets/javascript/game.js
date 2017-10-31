$(document).ready(function() {
    var wins = 0;
    var looses = 0;
    var youScore;
    var targetScore; 

    function resetGame(){
        firstCrystal = getRandomNumber(1, 12);
        secondCrystal = getRandomNumber(1, 12);
        thirdCrystal = getRandomNumber(1, 12);
        foursCrystal = getRandomNumber(1, 12);


    }
    function getRandomNumber(minBound, maxBound) {
        return Math.floor(Math.random() * 12 + 1);
    }
    resetGame();
    console.log()

})