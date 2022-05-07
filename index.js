// Dependencies
const app = require('./lib/server')
const fs = require('fs');


// Make a directory for data if not exist.
if (!fs.existsSync('./data')) {
	fs.mkdirSync('./data');
}


/// Routing ///////////////////////////////////////////////////////////////////

// Home Page ---------------------------------
app.get('/', function(req, res) {
	console.log('\n- Home Page --');
	res.render('./home', {});
	//res.send('hi')
});

// Uploader ---------------------------------
var uploader = require('./lib/uploader').uploader;
app.post('/uploader', uploader);

// file explorer
var filemanager = require('./lib/filemanager').filemanager;
app.get('/files', filemanager);

// delete
var deleter = require('./lib/deleter').deleter;
app.get('/delete/:file_name', deleter);


