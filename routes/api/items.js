const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//Newly Added Portion ----------------------------------------------------------------------

const app = express();
const http = require('http');
require('dotenv').config();

//Newly Added Portion ----------------------------------------------------------------------

//Get post model
const Item = require('../../models/Item');

router.get('/test', (req, res) => res.json({msg: "Items Works"}));


//@route    GET api/posts
//@desc     get posts by id
//@access   Public
router.post('/getItem', (req, res) => {
    Item.findOne({ itemId: req.body.results })
        .then(items => {console.log(`body: ${req.body.results}`); res.json(items)})
        .catch(err => res.status(404).json({noitemfound: 'No Post found with that id'}));
});




router.post('/addItem', (req, res) => {

    console.log(req.body);
    res.json("jhfhf")
    // const newItem = new Item({
    //     itemName: req.body.itemName,
    //     itemId: req.body.itemId,
    //     itemDescription: req.body.itemDescription,
    //     itemPrice: req.body.itemPrice,
    //     itemImage: req.body.itemImage,
    // });

    // newItem.save().then(item => res.json(item));
});

//@route    DELETE api/item/:id
//@desc     Delete item
//@access   Private
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
                
            item.deleteOne().then(()=> res.json({success: true}));
            //().then(()=> res.json({ success: true }));                      
            
        })
        .catch(err => res.status(404).json({ itemnotfound: 'no item found'}));
       
    
});
module.exports = router;

