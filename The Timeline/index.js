const express = require('express');
require('./config/mongo');

// express app
const app = express();

const route = require('./config/route');

app.use(express.urlencoded({extended: false}));

// register view engine
app.set('view engine', 'ejs');

app.use(route);

app.listen(3000, console.log('Local host is on 3000'));