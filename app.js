const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.status(200).type('html')
  res.render('index', {
    title: 'Template Express Web Sercer with EJS',
    layout: 'layouts/main-layout',
  });
});

app.listen(5000, 'localhost', () => {
  console.log('Server sedang berjalan');
});
