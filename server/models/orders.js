var mongoose = require("mongoose")

var Schema = mongoose.Schema

var OrderSchema = new Schema({
    quantity: {type: Object, required: true},

})

const Order = mongoose.model("Order", OrderSchema)

module.exports = Order