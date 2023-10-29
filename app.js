const express = require('express')
const app = express()

const hostname = 'localhost';
const port = 3005
app.set('views', __dirname + '\\');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
})
app.get('/modal', (req, res) => {
  res.render('modals.html');
})
app.get('/modal2', (req, res) => {
  res.render('modals2.html');
})
app.listen(port, '192.168.178.85', () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});