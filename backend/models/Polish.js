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
});

// keeps searchable strings to lower case to more easily do DB searches
PolishSchema.pre('validate', function(next){
    let polish = this
    if (!polish.isModified('category') || !polish.isModified('type')) return next();

    polish.category = this.category.toLowerCase();
    polish.type = this.type.toLowerCase();

    console.log(polish)

    next()
})

module.exports = PolishSchema