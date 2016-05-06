var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '../../client'));

app.listen(port, function(){
  console.log('Server listening on ', port);
})
