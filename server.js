

var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var util = require('util');

var contentTypes = {
    '.html': 'text/html',
    '.css': "text/css",
    '.js': 'application/javascript'
};

var dir = path.dirname(fs.realpathSync(__filename));

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var m;
    if (pathname == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    else if (pathname == '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    
    else if (pathname == '/services') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    
    else if (pathname == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    
    else if (pathname == '/faq') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }
    
     else if (pathname == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(dir + '/index.html').pipe(res);
        return;
    }

    else if (m = pathname.match(/^\/src\//)) {
        var filename = dir + pathname;
        var stats = fs.existsSync(filename) && fs.statSync(filename);
        if (stats && stats.isFile()) {
            var contentType = contentTypes[path.extname(filename)];
            res.writeHead(200, {'Content-Type': contentType});
            fs.createReadStream(filename).pipe(res);
            return;
        }
    }
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
}).listen(8765, 'localhost');

console.log('gallops server is running on port 8765');
