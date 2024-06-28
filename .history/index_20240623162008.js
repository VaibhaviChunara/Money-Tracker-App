var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
port = 5000
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/MoneyList')
var db = mongoose.connection
db.on('error' , ()=> console.log("error in connecting"))
db.once('open' , ()=> console.log("connected to mongodg"))

app.post("/add", (req,res)=> {
    var category_select = req.body.category_select
    var amount_input = req.body.amount_input
    var info = req.body.info
    var data_input = req.body.data_input
    var data = {
        "Category" : category_select,
        "Amount" : amount_input,
        "Info" : info,
        "Date" : data_input
    }
    db.collection
})


app.get("/",(req,res) => {
    // res.send("successfully listen port")
}).listen(port)

console.log(`listen at ${port}`)