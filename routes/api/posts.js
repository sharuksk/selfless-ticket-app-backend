const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//Newly Added Portion ----------------------------------------------------------------------

const app = express();
const http = require('http');
require('dotenv').config();

//Newly Added Portion ----------------------------------------------------------------------

//Get post model
const Post = require('../../models/Posts');

//Get Validation

//@route    GET api/posts/test
//@desc     Tests posts route
//@access   Public

router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

//@route    GET api/posts
//@desc     get posts
//@access   Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: 'No Posts found'}));
});

//@route    GET api/posts
//@desc     get posts by id
//@access   Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostfound: 'No Post found with that id'}));
});


//@route    POST api/posts
//@desc     Create posts
//@access   Private

router.post('/new', (req, res) => {

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name
    });

    newPost.save().then(post => res.json(post));
});

//@route    DELETE api/posts/:id
//@desc     Delete posts
//@access   Private
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
                
            post.deleteOne().then(()=> res.json({success: true}));
            //().then(()=> res.json({ success: true }));                      
            
        })
        .catch(err => res.status(404).json({ postnotfound: 'no post found'}));
       
    
});


// async function run() {

//     try {
  
//       await client.connect();
//       const database = client.db('test');
//       const messages = database.collection('posts');
  
//       // // Query for our test message:
//       // const query = { messages: 'Hello this is the message' };
//       // const message = await messages.findOne(query);
//       // console.log(message);
  
//       // open the Change Stream on the "messages" collection
//       changeStream = messages.watch();
  
//       // set up a listener when change events are emitted
//       changeStream.on("change", next => {
//           // process any change event
//           switch (next.operationType) {
//               case 'insert':
//                   console.log(next.fullDocument.text);
//                   break;
//               case 'update':
//                   console.log(next.updateDescription.updatedFields.text);
//           }
//       });
  
//     } catch {
  
//       // close connection when it errors
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
  

//Newly Added Portion ----------------------------------------------------------------------

module.exports = router;

