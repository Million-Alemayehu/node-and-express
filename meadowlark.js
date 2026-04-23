const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 1️⃣ Static files FIRST
app.use(express.static(path.join(__dirname, 'public')));

// set up handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('home')) 

app.get('/about', (req, res) => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune });
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

const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "The only way to deal with an unfriendly world is to let your personality shine.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall."
];


app.listen(port, () => console.log(`Server running on port ${port}`+ `press Ctrl+C to terminate`));