const fs = require('fs');
//-----------------------------------------
module.exports.deleter = deleter;
//-----------------------------------------

function deleter(req, res){
  var file_name = req.params.file_name;
  if (file_name && fs.existsSync('./data/'+file_name)){
    console.log('Delete : '+file_name)
    fs.unlinkSync('./data/'+file_name);
    res.redirect('/files')
  } else {
    console.log('nothing to delete')
    res.redirect('/files')
  }
}