let express = require('express');
let app = express();

let port = 8888;


app.get('/', (req, res) => {
    res.write('<a>Hey</a>');
    console.log("Response sent");
})

app.listen(port, () => {
    console.log("Server is listening on port " + port)});
