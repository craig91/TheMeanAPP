var express = require('express')
var bodyParser = require('body-parser')
var post = require('./models/post')


var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function(req, res, next){
	post.find(function(err, posts){
		if (err){ return next(err) }
	
	res.json(posts)
       
    })
 }) 

app.post('/api/posts', function (req, res, next){
	var post = new post ({
		username: req.body.username,
		body: req.body.body
	})
   post.save(function (err, post){
   	if (err){ return next (err) }
    res.json(201, post)  
   })
})

app.get('/', function (req, res){
	res.sendfile('layouts/posts.html')
})



app.listen(3000, function(){
	console.log('server listening on' , 3000)
})

