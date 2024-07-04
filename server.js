const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts');

const app = express();

//Body paser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
 
