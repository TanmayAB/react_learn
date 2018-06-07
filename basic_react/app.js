var express = require('express');
var app = express();
var path = require('path');
var nunjucks = require('nunjucks');

app.set('views', path.resolve(__dirname));
app.engine( 'html', nunjucks.render ) ;

app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname)));

/* GET home page. */
app.get('/', function(req, res) {
	res.render('index');
});

app.listen(8000, () => console.log('Example app listening on port 8000!'))
