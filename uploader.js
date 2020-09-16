// Tutorial
// http://localhost/data?url={file url}
///////////////////////////////////////////
const byteSize = require("byte-size")
const request = require('request');
const fs = require('fs');
//-----------------------------------------
module.exports.uploader = uploader;
//-----------------------------------------


function uploader(req, res){
	console.log('\n- uploader --\n')
	var url = req.body.url;

  // Make File name from URL
  //var file_name = decodeURI(url.split('/')[url.split('/').length-1]);
  var file_name = decodeURI(url);
  if ( file_name.includes('?') ) {file_name = file_name.split('?')[0]};
  file_name = file_name.slice(file_name.lastIndexOf('/')+1);
  if ( file_name.length > 100 ) {file_name = file_name.slice(file_name.length-100)}; //if name is > 100 letters take last 100 letters only


  // Check if file alreay exist
  if (fs.existsSync('./data/'+file_name)){
    console.log('File already exist or downloading')
    res.redirect(file_name)
  } else {
    
    // Get URL file full size
    var full_size;
    request.head(url, (err, res)=> {
      full_size = res.headers['content-length']
      // Comment about file info
      console.log('File Name : ' + file_name);
      console.log('Size : '+get_size(full_size)[0]+' '+get_size(full_size)[1])
      console.log('\n')
    });


    //start uploading
    request.get(url).pipe(fs.createWriteStream('./data/' + file_name ));


    // check if Fully Uploaded then send clinet to download url
    var timer = setInterval(()=>{
      var size = fs.statSync('./data/'+file_name).size
      console.log((size/full_size*100).toFixed(2)+' %')
      setTimeout(()=>{
        if (size === fs.statSync('./data/'+file_name).size){
          console.log(get_size(size)[2])
          clearInterval(timer)
          res.redirect(file_name)
        }
      },1000)
    },1000)
  }
 
}



function get_size(bytes){
  var _size = byteSize(bytes, { units:'metric', precision: 1 })
  return [ _size.value, _size.unit, `${_size.value} ${_size.unit}`]
}

