const express = require('express');
// יצירת מופע של  אקספרס
const app =express();
const morgan =require('morgan');
const productrouter = require('../ecom-web-api/v1/routers/product');
const ip = require('./v1/midllewares/auth');

// הוספת שכבת ביניים של מורגן שמתעדת כל פניה לשרת בקונסול
app.use(morgan('dev'));
//הוספת שכבה של ניתוב עבור מוצרים 

 app.use(function(req,res,next)
 {
   console.log("Conection From Ip " + req.socket.remoteAddress);
  next();
});
app.use("/product",productrouter);
app.use("/*",ip);

//מייצא את אפ לקובץ של השרת
module.exports=app;


