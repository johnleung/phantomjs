
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


//console.log('sadsa');


/*
var phantom = require('phantom');

phantom.create(function(ph) {
	ph.createPage(function(page) {
		page.open('http://github.com/', function() {
			page.render('github.png');
			ph.exit(0);

		});

	});
});
*/

/*
var page = require('webpage').create();
page.open('http://github.com/', function() {
  page.render('github.png');
  phantom.exit();
});
*/