$(document).ready(function () {
    var wins = 0;
    var looses = 0;
    var youScore;
    var targetScore;
    var inGame = false;

    function resetGame() {
        firstCrystal = getRandomNumber(1, 12);
        secondCrystal = getRandomNumber(1, 12);
        thirdCrystal = getRandomNumber(1, 12);
        foursCrystal = getRandomNumber(1, 12);
        targetScore = getRandomNumber(19, 120);
        inGame = true;
        youScore = 0;
        display()
    }

    function getRandomNumber(minBound, maxBound) {
        return Math.floor(Math.random() * maxBound + minBound);
    }
    resetGame();

    function display() {
        $("#computer-pick").text(targetScore);
        $("#my-score").text(youScore);

    }

    $("#blue").on("click", function () {
        youScore += firstCrystal
        $("#my-score").text(youScore);
        ifWin()
        
        
    })

    $("#red").on("click", function () {
        youScore += secondCrystal
        $("#my-score").text(youScore);
        ifWin()
    })

    $("#green").on("click", function () {
        youScore += thirdCrystal
        $("#my-score").text(youScore);
        ifWin()
    })

    $("#violet").on("click", function () {
        youScore += foursCrystal
        $("#my-score").text(youScore);
        ifWin()
    })

    function ifWin() {
        if (youScore > targetScore) {
            looses++;
            $("#my-losses").text(looses);
            resetGame();
        }
        if (youScore === targetScore) {
            wins++;
            resetGame();
        }
    }
})