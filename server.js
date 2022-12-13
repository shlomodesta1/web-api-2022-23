const http = require('http');
const app = require('./app');
const port = 2200;
const server = http.createServer(app);
server.listen(port,()=>{console.log("server started")});