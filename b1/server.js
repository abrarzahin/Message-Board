var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var jwt= require('jsonwebtoken');

var messages = [{text: 'hellowwww', owner: 'Tim'},{text: 'hi', owner: 'Jane'}];
var users=[];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
var api= express.Router();
var auth= express.Router();



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
auth.post('/register',(req,res)=>{
   var index= users.push(req.body)-1;
   var user=users[index];
   user.id=index;
   var token=jwt.sign(user.id,'123');
   res.json(token);
})

app.use('/api',api);
app.use('/auth',auth);

app.listen(63145);