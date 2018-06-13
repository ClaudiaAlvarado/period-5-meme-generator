var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var server = express()

server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))


server.set('view engine','ejs')
server.use(express.static('views'))
server.set('views', __dirname +'/views')

server.get('/', function(request, response){
    response.render('home.ejs')
})

server.post('/', function(request, response){
    console.log(request.body)
    response.render('results.ejs', {data:request.body})
})
 

var port = process.env.PORT

server.listen(port, () => {
    console.log('Server listening on port ' + port)
})