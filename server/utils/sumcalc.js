 sumcal =(item)=>{
    if (item === undefined ){
      sum = 0
      return sum
    }
    else{
      var arrOfQuantity = item.map(item=>
        {
          return Number(item.quantity)
        })
        var sum = arrOfQuantity.reduce((a, b) => a + b, 0);
        return sum
    }

  }

  module.exports = sumcal