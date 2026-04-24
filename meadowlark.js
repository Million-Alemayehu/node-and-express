const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const fortune = require('./lib/fortune.js');

// 1️⃣ Static files FIRST
app.use(express.static(path.join(__dirname, 'public')));

// set up handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('home')) 

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
});

// custom 404 page
app.use((req, res) =>{
  res.status(404)
  res.render('404')
})

//custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})


app.listen(port, () => console.log(`Server running on port ${port}`+ `press Ctrl+C to terminate`));