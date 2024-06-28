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


app.get("/",(req,res) => {
    // res.send("successfully listen port")
}).listen(port)

console.log(`listen at ${port}`)