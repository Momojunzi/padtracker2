const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const config = require('./config/dbconfig')
const app = express();


const PORT = process.env.PORT || 3001;

//app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

if(process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/../build`));
}

mongoose.Promise = global.Promise;

mongoose.connect(config.db)
  .then(result => {
    console.log("db connected")
  }).catch(err => {
    console.log(err);
  });

app.use("/api", apiRoutes);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(PORT, function() {
  console.log(`server listening on port: ${PORT}`);
});
