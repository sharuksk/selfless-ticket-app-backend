const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const posts = require('./routes/api/posts');
const items = require('./routes/api/items');

const app = express();

//Body paser middleware
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    }),
);

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => consonle.log(err));
    
//Passport middleware 

app.get('/', (req,res) => res.send('Hello'));

app.use(
    cors({
        origin: "*",
    }),
);

app.use('/api/posts', posts);
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
 
