var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});
/// slash is important
app.get('/jedi/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    // hints: splice()
    response.send(["Hello ", 
    	capitalize(last.slice(0,3)),
    	capitalize(first.slice(0,2))]
    	.join(""));
});

var capitalize = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(process.env.PORT||8080 );