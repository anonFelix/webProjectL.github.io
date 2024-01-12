const express = require('express')
const app = express()

const hostname = '192.168.178.38';
const port = process.env.PORT || 3000;

const path = require('path');
const fs = require('fs');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery')));
app.use('/assets', express.static(path.join(__dirname, '/public/assets')))
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.ejs');
})
let url = "/"
app.get('/de', (req, res) => {
  res.render('index_de.html');
})

app.get('/project', async (req, res) => {
  try{
    var imagePaths = [];
    var imagePathsFull = [];
    let id = req.query.id;
    let number = id.replace("project_", "");
    const jsonObject = JSON.parse(fs.readFileSync('./public/assets/img/portfolio/projects/'+id+'/data.json'));
    const imageCount = jsonObject.count;
    for(let i = 1; i<=imageCount; i++){
        let imageLocation = "assets/img/portfolio/projects/"+ id +"/"+ i +".png";
        let imageLocationFull = "assets/img/portfolio/projects/"+ id +"/"+ i +"_full.png";
        
        await imagePaths.push(imageLocation);
        await imagePathsFull.push(imageLocationFull);
    }

    res.render('project.ejs', {imagePaths, imagePathsFull, jsonObject, imageCount});
    
    }catch (error) {
      res.status(404).render('notfound.ejs');
  }
})

app.use(function(req,res){
  res.status(404).render('notfound.ejs');
});

app.use(function(e, req, res, next) {
  if (e.message === "Bad request") {
      res.status(400).render('notfound.ejs');
  }
});
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});