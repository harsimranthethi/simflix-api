var express = require( "express");
var config = require("./config.js")
var cors = require('cors')

const app  = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/greet/:name', (req, res) => {
    res.send({greet: 'hello '+ req.params.name})
})

app.use("/book", require("./routes/pages/book.js"))
app.use("/movie", require("./routes/pages/movie.js"))

app.listen(config.PORT, () => {
    console.log('App is listening to port: ' + config.PORT); 
});




