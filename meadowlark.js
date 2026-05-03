const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const fortune = require('./lib/fortune.js');
const handlers = require('./lib/handlers.js')

// 1️⃣ Static files FIRST
app.use(express.static(path.join(__dirname, 'public')));

// set up handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');


app.get('/', handlers.home) 

app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)

//custom 500 page
app.use(handlers.serverError)


if(require.main===module){
  app.listen(port,()=>{
    console.log(`Express started on http://localhost:${pport}`+';press Ctrl-c to terminate.')
  })
}else{
  module.exports = app
}