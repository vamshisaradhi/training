var request = require("request");
var fs = require("fs");
var sync = require("async");

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body); 
  fs.writeFile("message.html", body, (err) => {
	  if (err) throw err;
	  console.log('The file has been written!');
	});
});

request
  .get('http://google.com/img.png')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(fs.createWriteStream('doodle.png'))