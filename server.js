var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var messages = ["Testing, please ignore", "testing, testing, 1, dos, three!"];

var browserHeads = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy': "default-src 'self' devmountain.github.io"
};


app.use(bodyParser.json());




app.get('/', function(req, res){
  res.status(200).set(browserHeads).send(JSON.stringify(messages));
});


app.post('/', function( req, res ) {

    messages.push({
      message: req.body.message,
      time: new Date()
    });

    res.status(200).set(browserHeads).send(JSON.stringify(messages));

});

app.options('/', function(req, res, next){
  res.status(200).set(browserHeads).send();
})


var port = 4000;
app.listen(port, function(){
  console.log("Listen, did you hear that on port ", port);
})







//end
