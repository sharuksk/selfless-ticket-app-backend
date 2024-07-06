const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ItemSchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
    },
    itemPrice: {
        type: Number
    },
    itemImage:  [
        {
            type: String,
        },
    ], 
    
});

module.exports = Item = mongoose.model('item', ItemSchema);