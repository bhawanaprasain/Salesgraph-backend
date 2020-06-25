var mongoose = require("mongoose")

var Schema = mongoose.Schema

var QuantitySchema = new Schema({
    noOfSamsung: {type: Number, required: true},
    noOfHuwaei: {type: Number, required: true},
    noOfRedmi: {type: Number, required: true},
    noOfOppo: {type: Number, required: true},
    noOfKids: {type: Number, required: true},
    noOfFiction: {type: Number, required: true},
    noOfRealStories: {type: Number, required: true},
    noOfBiography: {type: Number, required: true},
})

const Quantity = mongoose.model("Quantity", QuantitySchema)

module.exports = Quantity