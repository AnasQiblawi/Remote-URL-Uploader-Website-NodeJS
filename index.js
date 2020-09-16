// Samples
// https://www.sample-videos.com/
// https://video.openedu.tw/Examples/
//////////////////////////////////////////////////////////////////
// Tutorials
// https://expressjs.com/en/guide/routing.html
// https://www.npmjs.com/package/ejs
//////////////////////////////////////////////////////////////////
//---------------------------------
const fs = require('fs');
const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
// ------------------
//////////////////////////////////////////////////////////////////
// Setting Server --------------------------------------------------------------
var port = process.env.PORT; // || 80;
app.listen(port, console.log(`Server is Running on port : ${port}`));
app.set('view engine', 'ejs');
// Static Requests --------------------------------------------------------------
app.use('/', express.static(__dirname + '/data'));
// body-parser Sittings ---------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//app.use(bodyParser.urlencoded());
//////////////////////////////////////////////////////////////////

// Make a directory for data
if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
}


// Home Page ---------------------------------
app.get('/', function(req, res) {
	console.log('\n- Home Page --');
	res.render('./home', {});
	//res.send('hi')
});

// Uploader ---------------------------------
var uploader = require('./app/uploader').uploader;
app.post('/uploader', uploader);

// file explorer
var filemanager = require('./app/filemanager').filemanager;
app.get('/files', filemanager);

// delete
var deleter = require('./app/deleter').deleter;
app.get('/delete/:file_name', deleter);


