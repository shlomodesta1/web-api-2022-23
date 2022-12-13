
require('dotenv').config();
function SendMail(u,p)
{
    console.log("sent ")
}
SendMail(process.env.USER_EMAIL,process.env.PASSWORD)
const http = require('http');
const app = require('./app');
const port = 2200;
const server = http.createServer(app);
server.listen(port,()=>{console.log("server started")});