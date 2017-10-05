import express from 'express';
import config from './config.js';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { initialData: 1, initialMarkup: 2});
});

app.listen(config.port, function() {
  console.info('Running on ' + config.port + '...');
});
