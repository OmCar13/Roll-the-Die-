const gameState = {
    player1: {
        defaultElement: document.getElementById('dice_1'),
        defaultDieImage: document.getElementById('defaultDie_1'),
        defaultText: "Click the button to roll the dice",
        defaultColor: "black"
    }, 
    player2: {
        defaultElement: document.getElementById('dice_2'),
        defaultDieImage: document.getElementById('defaultDie_2'),
        defaultText: "Click the button to roll the dice",
        defaultColor: "black"
    },
    resultElement: document.getElementById('result'),

    rollDie: function(playerNumber) {

        const dice = Math.floor(Math.random() * 6) + 1;
        const randomDieImage = "images/dice" + dice + ".png"

        const element = this[`player${playerNumber}`].defaultElement;
        const dieImage = this[`player${playerNumber}`].defaultDieImage;

        element.innerHTML = `Player ${playerNumber}'s dice is ${dice}`;
        dieImage.src = randomDieImage;

        return dice;
    },
    determineResult: function(p1_dice, p2_dice) {
        if (p1_dice > p2_dice) {
            this.defaultDieImage = 
            this.resultElement.innerHTML = "Player 1 wins !";
            this.player1.defaultElement.style.color = "green";
            this.player2.defaultElement.style.color = "red";
        } else if (p2_dice > p1_dice) {
            this.resultElement.innerHTML = "Player 2 wins !";
            this.player2.defaultElement.style.color = "green";
            this.player1.defaultElement.style.color = "red";
        } else {
            this.resultElement.innerHTML = "It's a Draw !";
            this.player1.defaultElement.style.color = "Blue";
            this.player2.defaultElement.style.color = "Blue";
        }
    },
    rollDice: function() {
        const p1_dice = rollDie(1);
        const p2_dice = rollDie(2);
        this.determineResult(p1_dice, p2_dice);
    },
    reset: function() {

        this.player1.defaultElement.innerHTML = this.player1.defaultText;
        this.player1.defaultElement.style.color = this.player1.defaultColor;
        this.player1.defaultDieImage.src = 'images/dice6.png';

        this.player2.defaultElement.innerHTML = this.player2.defaultText;
        this.player2.defaultElement.style.color = this.player2.defaultColor;
        this.player2.defaultDieImage.src = 'images/dice6.png';

        this.resultElement.innerHTML = "Yet to be declared"
    },

}
window.rollDie = gameState.rollDie.bind(gameState);
window.rollDice = gameState.rollDice.bind(gameState);
window.reset = gameState.reset.bind(gameState);
        

    // function rollDie1() {
    //     const p1_dice = Math.floor(Math.random() * 6) + 1;
    //     document.getElementById('dice_1').innerHTML = `Player one's dice is ${p1_dice}`;
    //     return p1_dice;
    // }
    // function rollDie2() {
    //     const p2_dice = Math.floor(Math.random() * 6) + 1;
    //     document.getElementById('dice_2').innerHTML = `Player two's dice is ${p2_dice}`;
    //     return p2_dice;
    // }
    // function result(p1_dice, p2_dice) {
    //     if (p1_dice > p2_dice) {
    //         document.getElementById('result').innerHTML = "Player 1 wins !"
    //         document.getElementById('dice_1').style.color = "green";
    //         document.getElementById('dice_2').style.color = "red";
    //     } else if (p2_dice > p1_dice) {
    //         document.getElementById('result').innerHTML = "Player 2 wins !"
    //         document.getElementById('dice_2').style.color = "green";
    //         document.getElementById('dice_1').style.color = "red";
    //     } else {
    //         document.getElementById('result').innerHTML = "It's a Draw !"
    //         document.getElementById('dice_1').style.color = "blue";
    //         document.getElementById('dice_2').style.color = "blue";
    //     }
        
    // }
    // function rollDice() {
    //     const p1_dice = rollDie1();
    //     const p2_dice = rollDie2();
    //     result(p1_dice, p2_dice);
    // }
    // function resetDice() {
    //     gameState.reset();
    // }
        