let http = require('http');
let url  = require('url');
let port = process.env.port || 3000;
let fs = require('fs');


function rqListner (req,res) {

    /* cd to current folder, in terminal type 
        node app
        navigate to localhost:8080 (open a browser type localhost:8080)
    */ 

    /* Simple Server */
    console.log('I got a request');
    if(req.url.indexOf('.html') != -1 || req.url == '/'){
        fs.readFile(__dirname + '/public/html/index.html', function(err, data){
            if(err) {
                throw err;
            }
            res.writeHead(200, {'Content-Type': 'text/html', 'Content-length' : data.length});
            res.write(data);
            return res.end();
        })
    }
    if(req.url.indexOf('.js') != -1){
        fs.readFile(__dirname + '/public/js/index.js', function(err, data) {
            if(err){
                throw err;
            }
             res.writeHead(200, {'Content-Type': 'text/javascript'});
             res.write(data);
            return res.end();
        })
        
    }
    if(req.url.indexOf('.css') != -1){
        fs.readFile(__dirname + '/public/css/index.css', function(err, data) {
            if(err){
                throw err;
            }
             res.writeHead(200, {'Content-Type': 'text/css'});
             res.write(data);
            return res.end();
        })
        
    }
    //try setting up endpoint
    http.get("/", function(req, res) {
        console.log("get")
        res.send("GET REWQ")
    })
    
}

let serv = http.createServer(rqListner);
console.log('Server Started');
serv.listen(port);