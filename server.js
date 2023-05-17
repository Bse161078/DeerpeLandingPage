const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = 443;

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('./keys/privkey.pem', 'utf8');
const certificate = fs.readFileSync('./keys/cert.pem', 'utf8');
const ca = fs.readFileSync('./keys/chain.pem', 'utf8');


const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};


const httpsServer = https.createServer(credentials, app);


app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});


// "start": "react-scripts start",
// "start": "node server.js",

//http://localhost:3000

///aqee:  https://music-pass-backend.herokuapp.com/
///https://music-pass.herokuapp.com/

// 2) https://music-pass.herokuapp.com/

// 1)Current https://music-pass-nodejs.herokuapp.com/
//Get
// REACT_APP_BASE_URL=http://localhost:3000
// REACT_APP_BASE_URL=https://music-pass-nodejs.herokuapp.com

//heroku changes
