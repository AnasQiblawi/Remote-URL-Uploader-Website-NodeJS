// Tutorial
// http://localhost/data?url={file url}
///////////////////////////////////////////
const byteSize = require("byte-size")
const request = require('request');
const fs = require('fs');
//-----------------------------------------
module.exports.uploader = uploader;
//-----------------------------------------


function uploader(req, res) {
  console.log('\n- uploader --\n')
  var url = req.body.url;

  // Make File name from URL
  //var file_name = decodeURI(url.split('/')[url.split('/').length-1]);
  var file_name = decodeURI(url);
  if (file_name.includes('?')) { file_name = file_name.split('?')[0] };
  file_name = file_name.slice(file_name.lastIndexOf('/') + 1);
  if (file_name.length > 100) { file_name = file_name.slice(file_name.length - 100) }; //if name is > 100 letters take last 100 letters only


  // Check if file alreay exist
  if (fs.existsSync('./data/' + file_name)) {
    console.log('File already exist or downloading')
    res.redirect(file_name)
  } else {

    // Get URL file full size
    var full_size;
    request.head(url, (err, res) => {
      full_size = res.headers['content-length']
      // Comment about file info
      console.log('File Name : ' + file_name);
      console.log('Size : ' + get_size(full_size).details)
      console.log('\n')
    });


    //start uploading
    var progress = 0;
    request.get(url)
    // Track Uploading progress
    .on("data", (chunk) => {
      progress += chunk.length;
      const percentage = Number((progress / full_size) * 100).toFixed(2);
      process.stdout.write(percentage + '%\r')
    })
    // Error
    .on('error', function (err) { console.error(err) })
    // Save File
    .pipe(fs.createWriteStream('./data/' + file_name))
    // Finish: resend client to file url
    .on('finish', function () { 
      console.log("\nDone")
      res.redirect(file_name) 
    })
    

  }

}



function get_size(bytes) {
  var _size = byteSize(bytes, { units: 'metric', precision: 1 })
  return { 
    mbSize: _size.value, 
    unit: _size.unit, 
    details: `${_size.value} ${_size.unit}` 
  }
}
