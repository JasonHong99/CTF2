const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/route.js');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.listen(PORT, () =>
  console.log("your server is running on PORT " + PORT)
);

const uri = "mongodb+srv://JasonHong:Jason04231999%21@gettingstarted-8uszf.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

routes(app);
