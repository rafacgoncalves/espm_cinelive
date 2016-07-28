var raven = require('raven');
var client = new raven.Client('https://1c0d565f50464d88b179b3303e806c4d:ce869b1427b44554a832262302a86fa8@app.getsentry.com/89553');
client.patchGlobal();
var http = require('http');
var app = require('./config/expresso')();
//require('./config/database.js')('mongodb://localhost/disseminar');
require('./config/database.js')('mongodb://master:753951@ds051738.mlab.com:51738/disseminar');
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express Server escutando na porta ' + app.get('port'));
});


