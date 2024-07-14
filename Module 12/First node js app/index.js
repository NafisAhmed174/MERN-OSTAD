const http = require('http');

const server = http.createServer(function(req, res){

    if(req.url == "/"){
        res.end("Homepage");
    }
    if(req.url == "/profile"){
        res.end("Profile page");
    }
    if(req.url == "/login"){
        res.end("Login page");
    }
    if(req.url == "/register"){
        res.end("Registration page");
    }
});


server.listen(8080, function(){
    console.log("server running...");
});