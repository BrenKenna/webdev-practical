const   http = require('http'),
        express = require('express'),
        path = require('path');

const   router = express(),
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'views')));
router.use(express.json());

router.get('/get', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    let hello = "<h1>Hello World!</h1>"

    let date_time = new Date();
    console.log(date_time);

    res.end(hello.toString() + date_time.toString());

});

router.post('/post', function(req, res) {

    console.log(req.body)

    res.end();

});

server.listen(process.env.PORT || 8080, process.env.IP || "127.0.0.1", function() {
    let addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});