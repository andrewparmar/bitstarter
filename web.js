var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

    response.send(fs.readFileSync('index.html', 'utf8'));
    
//    var bufr = fs.readFileSync('2index.html');   
//    response.send(bufr.toString('utf8', 0, bufr.length));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
