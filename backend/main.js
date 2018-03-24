let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
let http = require('http').Server(app);
let host = process.env.HOST || 'localhost';
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
path.resolve(__dirname);

http.listen(port, function () {
  console.log(`Server is listening on http://${host}:${port}/`);
});

app.get("/api/:file", function (req, res) {
  let filename = req.params.file;
  fs.readFile('data/' + filename + '.json', (err, file) => {
    if (err) {
      res.send(err)
    } else {
      res.send(JSON.parse(file.toString('utf8')))
    }
  });
});

app.post("/api/:file", function (req, res) {
  let filename = req.params.file;
  let body = req.body;
  fs.writeFile('data/' + filename + '.json', JSON.stringify(body), (err) => {
    if (err) {
      res.send(err)
    } else {
      console.log(JSON.stringify(body))
      res.send({"code": 200, "msg": "success"})
    }
  });
});
