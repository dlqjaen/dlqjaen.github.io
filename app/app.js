const fs = require('fs');
const routes = require('./routes/main.js');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

routes(app, fs)

app.listen(3000, () => {
  console.log('Conneted 3000 port!')
})
