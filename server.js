const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const posts = require('./routes/api/posts');
const items = require('./routes/api/items');

const app = require("./app");
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => consonle.log(err));
    
//Passport middleware 

app.get('/', (req,res) => res.send('Hello'));

app.use('/api/posts', posts);
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
 
