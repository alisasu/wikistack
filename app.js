const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');

const app = express();

// set up static files
app.use(express.static(__dirname + "/public"));
// set up body parser 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// logging middleware
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send(layout(''));
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});