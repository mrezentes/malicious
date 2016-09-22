var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');
    next();
});

app.post('/siphon', function (request, response) {
  console.log("received data")
	// console.log(request.body)
	response.setHeader('Access-Control-Allow-Origin', '*');
	var body = ""
	request.on('data', function (chunk) {
	    body += chunk;
	  });
	request.on('end', function () {
		console.log('Malicious server received data: ' + body);
	})
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');
    response.end("Malicious Server received data: " + body);
});

app.listen(8081, function () {
  console.log('Malicious app listening on port 8081!');
});

