const YATZY = {


    // Holds the current dice values
    // 0 == on hold
    currentRoll : [0, 0, 0, 0, 0],





    printRoll : function() {
        console.log(YATZY.rolls);
    },

    setRoll : function(newRoll) {
        console.log(YATZY.currentRoll);
        for (let i = 0; i < 5; i++) {
            YATZY.currentRoll[i] = newRoll[i].value;
        }
        console.log(YATZY.currentRoll);
    }
}