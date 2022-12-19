// הפעלת פונקציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דוט אי אן וי
require('dotenv').config();
// function SendMail(u,p)
// {
//     console.log("sent Email to " + u);
// }
// SendMail(process.env.USER_EMAIL,process.env.PASSWORD)
const http = require('http');
const app = require('./app');
const port = process.env.PORT;
const server = http.createServer(app);
server.listen(port,()=>{console.log("server started")});
