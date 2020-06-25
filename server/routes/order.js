const express = require('express');
const router = express.Router();

const  Order  = require("../models/orders")
var Quantity = require("../models/quantity")
const sumcal = require("../utils/sumcalc")

router.post('/details',  async (req, res) => {
  var order =  await new Order ({
    quantity: req.body
  })
  console.log(order)
  order.save().then((res)=>{
    // console.log(res.quantity.samsung);
  })
  
  var noOfSamsung = sumcal(order.quantity.samsung)
  var noOfHuwaei = sumcal(order.quantity.huwaei)
  var noOfRedmi = sumcal(order.quantity.redmi)
  var noOfOppo = sumcal(order.quantity.oppo)
  var noOfKids = sumcal(order.quantity.kids)
  var noOfFiction = sumcal(order.quantity.fiction)
  var noOfRealStories = sumcal(order.quantity.realStories)
  var noOfBiography = sumcal(order.quantity.biography)

  
var quantity =await Quantity.find()
var sam = quantity[quantity.length-1].noOfSamsung
 await Quantity.updateOne( {noOfSamsung:sam},
    {
      $inc:{
    noOfSamsung: noOfSamsung,
    noOfHuwaei:noOfHuwaei,
    noOfRedmi: noOfRedmi,
    noOfOppo: noOfOppo,
    noOfKids:noOfKids,
    noOfFiction: noOfFiction,
    noOfRealStories: noOfRealStories,
    noOfBiography: noOfBiography
  }},{ multi: true } )
})

router.get('/details', async(req, res) => {
  var data = await Quantity.find()
  res.json(data[0])
})

module.exports= router