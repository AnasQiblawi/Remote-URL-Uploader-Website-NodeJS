# Remote-URL-Uploader-Website-NodeJS

## Help me develop this app
- I only do programming as a hoppy and I am not realy professional so if you can help me with this app it would be very helpful.

### About
   This is a web app that will help you upload files using URLs from any website directly to your server.


### To do List:
- Better file naming code.
- File naming code from request headers, 
  using res.headers['content-disposition'] if filename found in it.
- Getting file extension type from request headers using res.headers['Content-Type'] if found,
  be aware, sometimes it gives strange types like 'application/octet-stream' for an .mp4 file
- Add custome name option.
- Live Progress bar while uploading and disable uploading button while it's on progress, or the button itself becomes the progress bar.
- Prevent downloading files that are still on uploading progress.
- Better CSS for Files list on desktops and mobiles,
  Or maybe I should put everything on one page for submiting URLs and seeing all files.
  
  
  
### Notes before usage:
- Specify a port in index.js or it will not work for you.
```javascript
var port = process.env.PORT || 80;
```
- Click on the folder icon on main page to go to files list page, or you can just add /files to the URL
```
eg. localhost/files
```

### Screenshots

  ![Main Page](https://user-images.githubusercontent.com/8499322/93342358-eb223a00-f837-11ea-8db9-876ae4e49aa0.jpg)

  ![Files List](https://user-images.githubusercontent.com/8499322/93342381-f2e1de80-f837-11ea-86cc-ec16be0380b3.jpg)


### CSS Styles
- [Home Page](https://codepen.io/marcobiedermann/pen/Fybpf)
- [Files List Page](https://codepen.io/geoffyuen/pen/FCBEg )



![](https://dillinger.io/)
