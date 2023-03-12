const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const PolishSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    type:{
        type: String,
        required: true,
        trim: true,
    }

})

module.exports = PolishSchema