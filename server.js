var express = require('express');
var app = express();

var data = require('./content/content.json');
// data += require('./content/content2.json');
// console.log(data);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// set the view engine to ejs
app.set('view engine', 'ejs');

// pages

app.get('/', function(request, response) {
  response.render('../views/index.html.ejs');
});

app.get('/about', function(request, response) {
  response.render('../views/about.html.ejs');
});

app.get('/work/songs-for-the-fallen', function(request, response) {
  response.render('../views/projects/songs-for-the-fallen.html.ejs');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
