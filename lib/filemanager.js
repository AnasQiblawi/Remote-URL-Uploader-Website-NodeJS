// https://www.npmjs.com/package/byte-size
// const prettyBytes = require('pretty-bytes');
//-----------------------------------------
const fs = require('fs');
const byteSize = require("byte-size")
//-----------------------------------------
module.exports.filemanager = filemanager;
//-----------------------------------------


function filemanager(req, res){

  var files = []
  fs.readdirSync('./data').forEach((a)=>{
    //console.log(fs.statSync('./data/'+a))
    files.push({
      name: a,
      size: size(a)
    })
  })
  //res.send(files)
  res.render('./filemanager', {files: files})
}




function size(file_name){
  var raw   = fs.statSync('./data/'+file_name).size;
  var _size = byteSize(raw, { units:'metric', precision: 1 })
  return [raw, _size.value, _size.unit]
}

