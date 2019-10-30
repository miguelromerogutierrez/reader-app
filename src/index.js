const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('layout', { title: 'Hey', message: 'Hello There!' });
});

app.listen(9000, () => {
  console.log('Starting server in port 9000');
});
