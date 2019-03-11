let mystring = "dventure Time, Come on grab your friends. We'll go to very distant lands, " +
    "with Jake the Dog and Finn the Human. The fun will never end, Adventure Time!";


String.prototype.countWords = function countWords() {
    let strings = this.split(" ");
    let count = strings.length;
    return count;
};


console.log(mystring.countWords());