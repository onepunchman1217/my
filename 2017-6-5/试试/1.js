const http = require('http');
const server = http.createServer(function(require,response){
	response.writr('hehe');
	response.end();
});
server.listen(88)
