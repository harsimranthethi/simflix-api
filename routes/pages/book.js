var express= require("express")
var router = express.Router();
var library = require("../../seed/books.json")

router.get("/after/:year", function(req,res,next){
    res.send(library.filter(d=>d.year> req.params.year).map(d=>[d.author,d.year]))
})

router.get("/list", function(req,res,next){
    res.send(library)
})

//map
//filter
//sort

module.exports = router


