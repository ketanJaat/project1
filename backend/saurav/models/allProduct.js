const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    saving : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    serving : {
        type : String,
        required : true
    },
    weight : {
        type : String,
        required : true
    },
    servingSize : {
        type : String,
        required : true
    },
    vegetarian : {
        type : String,
        required : true
    },
    flavour : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    packaging : {
        type : String,
        required : true
    },
    goal : {
        type : String,
        required : true
    },
    expdate : {
        type : String,
        required : true
    },
    lifestage : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    ingredients : {
        type : String,
        required : true
    },
    directionforuse : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    },
    imageUrl1 : {
        type : String,
        required : true
    },
    imageUrl2 : {
        type : String,
        required : true
    },
    imageUrl3 : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('Product' , productSchema);