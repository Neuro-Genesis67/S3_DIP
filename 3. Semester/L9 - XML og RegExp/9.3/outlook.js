const outlook =
    "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; " +
    "Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; " +
    "Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; " +
    "Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";

const str = "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; "

const regex = /([^\(]+)[^<]+<([^>]+)+/;


var result = regex.exec(str);
console.log("result: "+result);
//Her skal du pille navn og email ud.