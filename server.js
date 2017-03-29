var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes');

var port = process.env.PORT || 3000;
app.use(express.static('./'));
app.get('/', function(req, res) {
    res.render('index.html');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('views', __dirname);
// app.set('view engine', 'html');

app.use('/object', routes());
if (process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://lamphan:qwe123@ds135790.mlab.com:35790/lamphan')
} else {
    mongoose.connect('mongodb://localhost/callapi');
}

app.listen(port, function(err) {
    console.log('running server on: http://localhost:' + port);
})