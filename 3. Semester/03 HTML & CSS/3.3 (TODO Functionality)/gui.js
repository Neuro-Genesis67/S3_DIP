const GUI = {

    turn : 1,
    diceSlots : document.querySelectorAll('img'),
    diceImages : [0,
        "Materiale/images/Dice1.png",
        "Materiale/images/Dice2.png",
        "Materiale/images/Dice3.png",
        "Materiale/images/Dice4.png",
        "Materiale/images/Dice5.png",
        "Materiale/images/Dice6.png"],

    rollAction : function() {
        GUI.disableRollBtn1Sec();
        GUI.rollDices();
        GUI.updateTurnCounter();
        window.setTimeout(YATZY.setRoll, 1000, GUI.diceSlots);

        if (GUI.turn == 3)
            window.setTimeout(GUI.disableRollBtn, 1000);
    },

    enableRollBtn : function() {
        let btn = document.getElementById('roll');
        btn.disabled = false;
        btn.style.opacity = "1";
    },

    disableRollBtn : function() {
        let btn = document.getElementById('roll');
        btn.disabled = true;
        btn.style.opacity = "0.5";
    },

    disableRollBtn1Sec : function() {
        GUI.disableRollBtn();
        window.setTimeout(() => {
        GUI.enableRollBtn();
        }, 1000);
    },

    // Spins the dices, then updates their images and values (except dice that are on hold).
    rollDices : function() {
        time = 0;

        for (let dice of GUI.diceSlots) {
            window.setTimeout(rotateOnce, time, dice);
            time += 100; // 1000ms = 1 second
        }

        GUI.diceSlots = document.querySelectorAll('img');

        function rotateOnce(dice) {
            if (dice.hold == false) {
                dice.classList.add('rotate');
                window.setTimeout(() => {
                    dice.classList.remove('rotate');
                    let index = Math.floor((Math.random() * 6) + 1);
                    dice.src = GUI.diceImages[index];
                    dice.value = index;
                }, 500);
            }
        }
    },

    updateTurnCounter : function() {
        window.setTimeout(() => {
            if (GUI.turn == 4) {
                GUI.turn = 1;
            }
            document.getElementById('turn').innerHTML = "Turn " + GUI.turn;
            GUI.turn++;
        }, 500);
    },

    holdDice : function(dice) {
        if (GUI.turn != 0) {
            GUI.diceSlots = document.querySelectorAll('img');
            console.log("holdDice() dice.value: " + dice.value);
            if (dice.hold == true) {
                dice.style.opacity = "1.0";
                dice.style.paddingTop = "0px";
                dice.hold = false;
            } else {
                dice.hold = true;
                dice.style.opacity = "0.5";
                dice.style.paddingTop = "15px";
            }
        }
    }
};

for (dice of GUI.diceSlots) {
    dice.hold = false;
}

