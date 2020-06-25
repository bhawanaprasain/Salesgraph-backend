const express = require("express")
var mongoose = require("mongoose")
const app = express()
var cors = require("cors")
var bodyParser = require("body-parser");
const port = 4000

const order = require("./routes/order")
// app.use(express.json());
mongoose.connect('mongodb://localhost/salesgraph',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
  .then((response) => console.log('Connected to database sales...'))
  .catch(err => console.error('Could not connect to database...',err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use("/order",order)


app.listen(port,()=>console.log("listening on port 4000"))