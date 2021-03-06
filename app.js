// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('seville.html', {root : './public/'});
});

app.get('/:location', function(req, res){
	console.log('/:location ->', req.params)
	res.send('Magellan didn\'t visit ' + req.params.location)
})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})

