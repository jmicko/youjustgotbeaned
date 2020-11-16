// bring in express, from the node_modules directory
// express is a function
const express = require('express');

// bring in body parser which will help us parse incoming data
const bodyParser = require('body-parser');
const makeCalculation = require('./calculator');

// create an instance of the express webserver, we'll call it app
const app = express();

// bring in calculator function 

// we'll use this port later, it's like a box number at the post office
// where our server will get/send mail/messages
const port = 5000;

// Tell express where to find static files that it can send on request
app.use( express.static('server/public') );

// tell express how to parse incoming data
app.use( bodyParser.urlencoded( {extended: true} ) );

const calculationItems = [];

// Tell server to listen on our port
app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}...`);
})


// ----------these routs and data will vary for each assignment----------

//  send information fromm the client into the server
app.post('/calc', (req, res) => {
    console.log('want to do something with whatever is in here', req.body);
    res.sendStatus(201); // 201 is created
})

//  send information fromm the server to the client
app.get('/calc', (req, res) => {
    console.log('Sending data...');
    res.send('we could send a variable if we were smart about it');
})

// --------------------------end of our routes--------------------------