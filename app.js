const express = require('express');
const app = express();
const port = 8080;
var path = require('path');

app.use(function(req, res, next) {
    
    var allowedOrigins = ['http://127.0.0.1:8081', 'http://127.0.0.1:8080', 'https://polymer-greets.appspot.com'];
    var origin = req.headers.origin;
    
    if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/node_modules", express.static(path.resolve(__dirname, 'build/default/node_modules')));
app.use("/src", express.static(path.resolve(__dirname, 'build/default/src')));
app.use("/resources", express.static(path.resolve(__dirname, 'build/default/resources')));

app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname + '/build/default/index.html'));
});

var greetRouter = require('./api/routes/greet');
app.use('/api/greet', greetRouter);

app.listen(port, () => {
    
    console.log(`Example app listening on port ${port}!`)
    
});