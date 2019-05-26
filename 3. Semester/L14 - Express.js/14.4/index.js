const express = require('express');
const path = require('path');
const app = express();


//  Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/messages', require('./routes/api/messages'));

// Get root (index.html)
//app.get('/', (req, res) => res.sendFile(__dirname+'/public/index.html'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






// // Modules
// const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
// const app = express();
//
// //
// app.use(morgan('tiny'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//
//
// // Routes
// app.use('/api/members', require('./routes/api/members'));
//
// // Starting server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log("Listening on port " + PORT));

