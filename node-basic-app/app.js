var http = require('http');
var fs = require('fs');
var test = require('./test');

console.log(test);
console.log(test.myObj);

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    var app = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
       
        res.write(html);
        res.end();
      });
    
    app.listen(3400, function(err) {
        if(err) {
            console.log('Listening server error');
        }else {
            console.log('Server Listening on port 3400');
        }

    });
});

