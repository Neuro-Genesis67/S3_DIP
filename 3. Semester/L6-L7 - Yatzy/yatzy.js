const YATZY = {

    /*
     * this field is used to save the values of the lower textfields - from one-pair to yatzy
     */
    sumBottom : 0,

    /*
     * an array of the dice-images
     */
    diceImages : [0,
        "images/terning-1-prik.png",
        "images/terning-2-prikker.png",
        "images/terning-3-prikker.png",
        "images/terning-4-prikker.png",
        "images/terning-5-prikker.png",
        "images/terning-6-prikker.png"
    ],

    /**
     * Face values of the 5 dice.
     * 1 <= values[i] <= 6.
     */
    values : new Array(5),

    /**
     * Number of times the 5 dice have been thrown.
     * 0 <= throwCount <= 3.
     */
    throwCount : 0,

// The values in the array are used to identify whether the user want to hold a dice or not
    holds : [ false, false, false, false, false ],

    /**
     * Rolls the 5 dice. <br/>
     * Only rolls dice that are not hold. <br/>
     * Requires: holds contain 5 boolean values.
     */

    throwDice : function(array) {
        let images = document.querySelectorAll("img");
        for (let i = 0; i < YATZY.values.length; i++) {
            if (array[i] == false) {
                // return a number between 1-6
                YATZY.values[i] = Math.trunc((Math.random() * 6) + 1);
            }
        }
        YATZY.throwCount++;
    },

    /**
     * Resets the throw count.
     */
    resetThrowCount : function () {
        YATZY.throwCount = 0;
    },

    /**
     * Returns all results possible with the current face values. <br/>
     * The order of the results is the same as on the score board.
     */
    getPossibleResults : function () {
        let results = new Array(15);
        for (let i = 0; i <= 5; i++) {
            results[i] = YATZY.valueSpecificFace(i + 1);
        }
        results[6] = YATZY.valueOnePair();
        results[7] = YATZY.valueTwoPair();
        results[8] = YATZY.valueThree();
        results[9] = YATZY.valueFour();
        results[10] = YATZY.valueFullHouse();
        results[11] = YATZY.valueSmallStraight();
        results[12] = YATZY.valueLargeStraight();
        results[13] = YATZY.valueChance();
        results[14] = YATZY.valueYatzy();
        return results;
    },

    /**
     * Returns an int[7] containing the frequency of face values. <br/>
     * Frequency at index v is the number of dice with the face value v, 1 <= v <=
     * 6. <br/>
     * Index 0 is not used.
     */
    freqFaceValue : function () {
        let valueOne = 0;
        let valueTwo = 0;
        let valueThree = 0;
        let valueFour = 0;
        let valueFive = 0;
        let valueSix = 0;

        for (let i = 0; i < YATZY.values.length; i++) {
            if (YATZY.values[i] == 1) {
                valueOne++;
            } else if (YATZY.values[i] == 2) {
                valueTwo++;
            } else if (YATZY.values[i] == 3) {
                valueThree++;
            } else if (YATZY.values[i] == 4) {
                valueFour++;
            } else if (YATZY.values[i] == 5) {
                valueFive++;
            } else if (YATZY.values[i] == 6) {
                valueSix++;
            }

        }
        let sameFaceValues = [0, valueOne, valueTwo, valueThree, valueFour, valueFive, valueSix];

        return sameFaceValues;
    },

    /**
     * Returns the total value for the dice currently showing the given face value
     *
     * @param face
     *            the face value to return values for
     */
    valueSpecificFace : function (face) {
        let value_specific_face = YATZY.freqFaceValue();

        let value = value_specific_face[face] * face;
        return value;
    },

    /**
     * Returns the maximum value for n-of-a-kind for the given n. <br/>
     * For example, valueManyOfAKind(3) returns the maximum value for 3 of-a-kind.
     * <br/>
     * Requires: 1 <= faceValue and faceValue <= 6
     *
     * @param n
     *            number of kind
     */
    valueManyOfAKind : function (n) {
        let freq;
        freq = YATZY.freqFaceValue();
        let value = 0;
        for (let i = 0; i < freq.length; i++) {
            if (n <= freq[i]) {
                value = n * i;
            }
        }

        return value;
    },

    /**
     * The current value if you try to score the current face values as Yatzy.
     */
    valueYatzy : function () {
        let point = 0;
        if (YATZY.valueManyOfAKind(5) > 0) {
            point = 50;
        }

        return point;
    },

    /**
     * Returns the current score if used as "chance".
     */
    valueChance : function () {
        let sum = 0;
        for (let i = 0; i < YATZY.values.length; i++) {
            sum = sum + YATZY.values[i];
        }
        return sum;
    },

    /**
     * Returns the current score for one pair.
     */
    valueOnePair : function () {

        let freq;
        freq = YATZY.freqFaceValue();
        let value = 0;
        for (let i = 0; i < freq.length; i++) {
            if (2 <= freq[i]) {
                value = 2 * i;
            }
        }

        return value;
    },

    /**
     * Returns the current score for two pairs.
     */
    valueTwoPair : function () {

        let numberOfPair = 0;
        let freq;
        freq = YATZY.freqFaceValue();
        let value = 0;
        for (let i = 0; i < freq.length; i++) {
            if (2 <= freq[i]) {
                value = value + (2 * i);
                numberOfPair++;
            }
        }
        if (numberOfPair == 2) {
            return value;
        }
        return 0;
    },

    /**
     * Returns the current score for three of a kind.
     */
    valueThree : function () {
        return YATZY.valueManyOfAKind(3);
    },

    /**
     * Returns the current score for four of a kind.
     */
    valueFour : function () {
        return YATZY.valueManyOfAKind(4);
    },

    /**
     * Returns the value of a small straight with the current face values.
     */
    valueSmallStraight : function () {

        let freq = YATZY.freqFaceValue();

        if (freq[6] == 0) {
            for (let i = 1; i < 6; i++) {

                if (freq[i] != 1) {
                    return 0;
                }
            }
            return 15;
        }
        return 0;
    },

    /**
     * Returns the value of a large straight with the current face values.
     */
    valueLargeStraight : function () {

        let freq = YATZY.freqFaceValue();

        if (freq[1] == 0) {
            for (let i = 2; i < freq.length; i++) {

                if (freq[i] != 1) {
                    return 0;
                }
            }
            return 20;
        }
        return 0;
    },

    /**
     * Returns the value of a full house with the current face values.
     */
    valueFullHouse : function () {
        let sum = 0;
        let three = false;
        let two = false;
        let freq = YATZY.freqFaceValue();
        for (let i = 0; i < freq.length; i++) {

            if (freq[i] == 3) {
                sum = sum + (3 * i);
                three = true;
            }
            if (freq[i] == 2) {
                sum = sum + (2 * i);
                two = true;
            }
        }
        if (two && three == true) {
            return sum;
        }
        return 0;
    }

}
