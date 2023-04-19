const http = require("http");
const querystr = require('querystring');
//const mysql = require("mysql");
const PORT = (process.env.PORT || 8000);
const DBCon = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
DBCon.connect(function(err) {if (err) throw err;});

function applicationServer (req, res) {
  const HTTPmessage = req.body.message;
  if (HTTPmessage.length == 0){
    res.send("Do not leave the input blank.")
  }
  else{
    res.body.message = HTTPmessage;
    res.send(res.body.message);
  }
};

const webServer = http.createServer(applicationServer);
webServer.listen(port);
