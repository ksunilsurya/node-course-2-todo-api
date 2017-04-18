//external imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports using ES6 Destructuring.
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user');

var app = express();

//route payload format
app.use(bodyParser.json());

//Configure routes
app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then(
        (doc)=>{res.send(doc)},
        (e)=>{res.status(400).send(e)}
        );
});

app.listen(3000,() => {
    console.log('started on port 3000');
});

module.exports = {app};

