var http = require('http');
var app = require('./config/express')();
//require('./config/database.js')('mongodb://localhost/disseminar');
require('./config/database.js')('mongodb://master:753951@ds051738.mlab.com:51738/disseminar');
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express Server escutando na porta ' + app.get('port'));
});


