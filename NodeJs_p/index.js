const http=require('http');
http.createServer(function(req,res){
res.writeHead(200)
res.write('<h1>Holaaa</h1>')
res.end
}).listen(60012)