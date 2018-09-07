var express = require('express');
var app = express();
var bodyParser = require ('body-parser');

var messages = [{text: 'hellowwww', owner: 'Tim'},{text: 'hi', owner: 'Jane'}];


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
var api= express.Router();


api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user=req.params.user;
    var result= messages.filter(messages => messages.owner == user);
    res.json(result);
})



api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})
app.use('/api',api);

app.listen(63145);