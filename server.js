var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('chat', ['chat']);
var bodyParser = require('body-parser');
//---------------------------------------------swagger
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//---------------------------------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/chat', function (req, res) {
  console.log('All right');

  db.chat.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  })
});

app.post('/chat', function (req, res) {
  console.log(req.body);
  db.chat.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/chat/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.chat.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
/*
app.get('/chat/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.chat.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
*/
app.listen(3000);
console.log("Server running on port 3000");