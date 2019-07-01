const GUI = {

    txfSelected : false,
    selectedTxf : null,

    // Textfield clicked method
    txfClicked : function(element) {

        if (YATZY.throwCount === 0) {
            return;
        }

        //Hvis ingen txf er valgt -> marker txf
        if (GUI.txfSelected == false) {
            element.style.border = "2px solid black";
            GUI.selectedTxf = element;
            GUI.txfSelected = true;
        }

    // hvis element allerede er markedet -> fjern markering
       else if (element == GUI.selectedTxf) {
            element.style.border = "initial";
            GUI.txfSelected = false;
            GUI.selectedTxf = null;
        }

        //Hvis selectedTxf != element, fjern markering derfra og marker element
         else if (GUI.selectedTxf != element) {
            GUI.selectedTxf.style.border = "initial";
            element.style.border = "2px solid black";
            GUI.selectedTxf = element;
            GUI.txfSelected = true;
        }



    },

    // dice-clicked method
    diceClicked : function(element){
        let images = document.querySelectorAll("img");
        // the dice images are disabled when the program runs & when the turn ends (if a user choose a textfield)
        // when the rolls button is clicked the dice images will be activated and it will be possible to hold a dice image

        if(images[0].disabled == false) {
            for (let i = 0; i < YATZY.holds.length; i++) {
                // if holds = false the value will change to true in the same index in 'holds' array and the img which is clicked will not change
                // if holds = true the value will change to false in the same index in 'holds' array and the img which is clicked will change
                if (images[i] == element) {
                    if (YATZY.holds[i] == false ) {
                        images[i].style.border = "1px solid #fff";
                        YATZY.holds[i] = true;
                    } else if (YATZY.holds[i] == true) {
                        images[i].style.border = "initial";
                        YATZY.holds[i] = false;
                    }

                }
            }
        }

    },

    // button method
    roll : function(){

        let images = document.querySelectorAll("img");

        // calls the method to throw the dices and takes the holds array as a parameter
        YATZY.throwDice(YATZY.holds);

        for (let i = 0; i < YATZY.values.length; i++) {

            // the images will be activated
            images[i].disabled = false;

            // the images changes when the rolls button is clicked - only the images which are not clicked is changing
            if(YATZY.holds[i] == false) {
                images[i].src = YATZY.diceImages[YATZY.values[i]];
            }
        }

        // <p> for the number of rolls in the same turn
        let turn = document.querySelector("p");
        turn.innerHTML = "Turn: " + YATZY.throwCount;

        let txfResults = document.querySelectorAll("input");

        // shows all results possible with the current face values
        for (let i = 0; i < YATZY.getPossibleResults().length; i++) {

            // shows the results possible with the current face values ONLY on the fields
            // which is not disabled - a field will be disabled when a user clicks on it
            if (txfResults[i].disabled == false) {
                txfResults[i].value = YATZY.getPossibleResults()[i];
            }
        }

        // If it is the third throw in the same turn the Roll button must be
        // deactivated - the button will be reactivated again when the user clicks on
        // one of the result fields
        if (YATZY.throwCount == 3) {
            let button = document.querySelector("#rolls");
            button.style.backgroundColor = "#cccccc";
            button.disabled = true;
        }

    },

    // method which is called when the user clicks on one of the result
    // fields/values
    endCurrentRound : function(element) {

        if (GUI.txfSelected == false) {
            alert("You need to select a field in which to spend your points")
            return;
        }

        let images = document.querySelectorAll("img");

        let sum = document.querySelector("#sum-Tekstfelt");

        let total = document.querySelector("#total-Tekstfelt");

        // If the dice are thrown, you can choose one of the result fields. Each time
        // you click one of the fields a new turn will start and the number of
        // throws will be reset. In other words: you can not click/select more than one
        // field each time you throw
        if (YATZY.throwCount != 0) {
            let txfResults = document.querySelectorAll("input");

            let button = document.querySelector("#rolls");
            button.disabled = false;
            button.style.backgroundColor = "#ededed";

            for (let i = 0; i < txfResults.length; i++) {

                if(txfResults[i] == element) {

                    // if the field is between 01 JavaScript introduktion-s to 6-s the value will be added to the sum
                    if(i < 6) {
                        sum.value = Number(sum.value) + Number(txfResults[i].value);
                    } else if (i >= 6) {
                        YATZY.sumBottom = Number(YATZY.sumBottom) + Number(txfResults[i].value);
                    }
                    // When one of the fields is selected, it will be deactivated
                    txfResults[i].disabled = true;
                }
            }

            // if the sum is 63 or more - the bonus field will be 50
            let bonus = document.querySelector("#bonus-Tekstfelt");
            if (sum.value >= 63) {
                bonus.value = "50";
            }

            // sets the value of the total
            total.value = Number(YATZY.sumBottom) + Number(sum.value) + Number(bonus.value);

            // resets all values in the dice pane (dice face values, dice-images will be
            // unselected, rolled number will be reset and the Roll button will be
            // activated)
            for (let i = 0; i < YATZY.values.length; i++) {
                YATZY.values[i] = 0;
                images[i].disabled = true; // the images with the dices are deactivated until the rolls-button is clicked
                images[i].style.border = "initial";
                YATZY.holds[i] = false;
            }
            YATZY.resetThrowCount();
            let turn = document.querySelector("p");
            // updates the rolled number
            turn.innerHTML = "Turn: " + YATZY.throwCount;

            // counts the number of rounds
            let roundCount = 0;

            for (let i = 0; i < txfResults.length; i++) {
                // each time a field is disabled which means when a field is selected
                if (txfResults[i].disabled == true) {
                    roundCount = roundCount + 1; // then it will count a turn
                }
            }

            // If you reach 15 rounds, a popup window will appear telling that the game is
            // over - at that time all the fields have already been selected (and
            // deactivated) The user will then get an option to play again
            if (roundCount == 15) {
                let answer = confirm("The game is finished - your total score is: " + total.value + "\n\n"
                    + "Would you like to play again?");

                // If the user clicks on the OK button, it means that the user wants to play
                // again and the entire game will be reset
                if (answer == true) {
                    for (let i = 0; i < txfResults.length; i++) {
                        txfResults[i].disabled = false;
                        txfResults[i].value = "0";
                    }
                    for(let i = 0; i < images.length; i++) {
                        images[i].style.border = "initial";
                    }
                    sum.value = 0;
                    total.value = 0;
                    roundCount = 0;
                } else {
                    let button = document.querySelector("#rolls");
                    button.disabled = true;
                }
            }

            if (YATZY.throwCount === 0) {
                GUI.rollAction();
                GUI.selectedTxf.style.border = "initial";
                GUI.selectedTxf = null;
                GUI.txfSelected = false;
            }

            // If the user chooses more than one field in the same turn (with only one
            // rolls) a popup window will appear asking the user to Roll/throw the dices
            // first
        } else {
            alert("You must rolls one time before choosing a field");
        }
    }

}