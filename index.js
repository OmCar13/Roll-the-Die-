const gameState = {
    player1: {
        defaultElement: document.getElementById('dice_1'),
        defaultText: "Click the button to roll the dice",
        defaultColor: "black"
    }, 
    player2: {
        defaultElement: document.getElementById('dice_2'),
        defaultText: "Click the button to roll the dice",
        defaultColor: "black"
    },
    resultElement: document.getElementById('result'),

    reset: function() {

        this.player1.defaultElement.innerHTML = this.player1.defaultText;
        this.player1.defaultElement.style.color = this.player1.defaultColor;

        this.player2.defaultElement.innerHTML = this.player2.defaultText;
        this.player2.defaultElement.style.color = this.player2.defaultColor;

        this.resultElement.innerHTML = "Yet to be declared"
    }
}
        

    function rollDie1() {
        const p1_dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice_1').innerHTML = `Player one's dice is ${p1_dice}`;
        return p1_dice;
    }
    function rollDie2() {
        const p2_dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice_2').innerHTML = `Player two's dice is ${p2_dice}`;
        return p2_dice;
    }
    function result(p1_dice, p2_dice) {
        if (p1_dice > p2_dice) {
            document.getElementById('result').innerHTML = "Player 1 wins !"
            document.getElementById('dice_1').style.color = "green";
            document.getElementById('dice_2').style.color = "red";
        } else if (p2_dice > p1_dice) {
            document.getElementById('result').innerHTML = "Player 2 wins !"
            document.getElementById('dice_2').style.color = "green";
            document.getElementById('dice_1').style.color = "red";
        } else {
            document.getElementById('result').innerHTML = "It's a Draw !"
            document.getElementById('dice_1').style.color = "blue";
            document.getElementById('dice_2').style.color = "blue";
        }
        
    }
    // function refreshAndRoll () {
    //     sessionStorage.setItem('rollDiceAfterReload', true);
    //     location.reload();
    // }

    // function rollDiceAfterReload() {
    //     if (sessionStorage.getItem('rollDiceAfterReload') === 'true') {
    //         sessionStorage.removeItem('rollDiceAfterReload');
    //         const p1_dice = throwDice1();
    //         const p2_dice = throwDice2();
    //         result(p1_dice, p2_dice);
    //         }
    // }
    function rollDice() {
        const p1_dice = rollDie1();
        const p2_dice = rollDie2();
        result(p1_dice, p2_dice);
    }
    function resetDice() {
        gameState.reset();
    }
        