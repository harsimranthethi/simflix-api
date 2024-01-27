var express= require("express")
var router = express.Router();
var mdb = require("../../db")


router.get("/btf", async function(req,res,next){
    res.send(await mdb.btf())
})

//movie/list?page=2&sort=year
router.get("/list", async function(req,res,next){
    var page = 1
    var sort = "alpha"
    var direction
    var searchStr = ""
    if (req.query.page != undefined) page = req.query.page;
    if (req.query.sort != undefined) sort = req.query.sort;
    if (req.query.direction != undefined) direction = req.query.direction;
    if (req.query.searchStr != undefined) searchStr = req.query.searchStr;

    res.send(await mdb.listMovies(page, sort,direction, searchStr)) 
    //It then sends the response by calling the listMovies function from the mdb module and awaits its result.
})

//movie/create
router.post("/create", async function(req,res,next){
    var mobj = await mdb.createMovie(req.body)
    res.send(mobj)
})

//movie/abcdefg/show
router.get("/:id/show", async function(req,res,next){
    res.send(await mdb.movieByID(req.params.id))
})

//movie/abcdefg/update
router.post("/:id/update", async function(req,res,next){
    res.send(await mdb.updateMovie(req.params.id,req.body))
})

//movie/abcdefg/delete
router.get("/:id/delete", async function(req,res,next){
    res.send(await mdb.deleteMovie(req.params.id))
})

/*
router.get("/btf", async function(req,res,next){
    res.send(await mdb.btf())
})
router.get("/ml", async function(req,res,next){
    res.send(await mdb.ml())
})
*/
//map
//filter
//sort

module.exports = router


