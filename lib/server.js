// Samples
// https://www.sample-videos.com/
// https://video.openedu.tw/Examples/
///////////////////////////////////////////////////////////////////////////
// Tutorials
// https://expressjs.com/en/guide/routing.html
// https://www.npmjs.com/package/ejs
///////////////////////////////////////////////////////////////////////////

// Dependencies -----------------------------------------------------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const request = require('request');
const ejs = require('ejs');

///////////////////////////////////////////////////////////////////////////
// Setting Server ----------------------------------------------------------
const port = process.env.PORT || 80;
app.listen(port, console.log(`Server is Running on port : ${port}`));
app.set('view engine', 'ejs');


// body-parser Sittings ----------------------------------------------------
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Static Requests ---------------------------------------------------------
app.use('/', express.static(path.join(__dirname, '..', 'data')));


///////////////////////////////////////////////////////////////////////////
// Export
module.exports = app;