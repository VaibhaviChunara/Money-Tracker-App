var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.get("/",(req,res) => {
    res.send("successfully listen port")
}).listen(5000)

console.log(`listen at ${port}`)