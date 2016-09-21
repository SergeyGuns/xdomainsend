const http = require('http');
const   fs = require('fs');
const url  = require('url');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {
      // console.log(request.url);
      switch (request.url){
        case '/index.html' :
          response.writeHeader(200, { "Content-Type": "text/html" ,
                                      "Access-Control-Allow-Origin": "*",
                                      "Access-Control-Allow-Headers": "*"});  
          response.write(html);
          console.log('connect') 
          response.end();
          break;
        default:
          // console.log(request)
          console.log(decodeURI(request.url.replace('/?', '')));
          response.writeHeader(200, {"Content-Type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*"});
          response.end();
        }
    }).listen(3000);
});