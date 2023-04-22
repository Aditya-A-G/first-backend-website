const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('./index.html', 'UTF-8', (err, data) => {
            if(err){
                console.error(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else if(req.url == '/about'){
        fs.readFile('./about.html', 'UTF-8', (err, data) => {
            if(err){
                console.error(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else if(req.url == '/contact-me'){
        fs.readFile('./contact-me.html', 'UTF-8', (err, data) => {
            if(err){
                console.error(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else{
        fs.readFile('./404.html', 'UTF-8', (err, data) => {
            if(err){
                console.error(err);
            }
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
});

server.listen(port, () => {
    console.log(`Server is running`);
});


