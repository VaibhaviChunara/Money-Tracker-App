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

mongoose.connect

app.get("/",(req,res) => {
    // res.send("successfully listen port")
}).listen(port)

console.log(`listen at ${port}`)