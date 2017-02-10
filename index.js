var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

var Routes = require('./routes/incidentroutes.js');

//Connect to DocumentDB using the MongDB connection point
mongoose.connect(process.env.CUSTOMCONNSTR_docdb);
var port = process.env.PORT || 1337

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Routes);

app.listen(app.get('port'), function(){
  console.log('Server up on port: ' + app.get('port'));
});