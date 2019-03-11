const Gui = {

    validate : function(){
        let txf = document.getElementById("txf");
       let txfValue = document.getElementById("txf").value;
        let result = txfValue.match(/^[0-2]\d{3}[-. /](0[1-9]|1[0-9]|2[0-9]|3[0-1])[-. /](0[1-9]|1[012])$/);
        if (result == null) {
            txf.style.backgroundColor = "red";
            console.log("incorrect")
        } else {
            txf.style.backgroundColor = "green";
            console.log("correct")
        }

    }


// 1991-07-05
}