const express = require('express');
// יצירת מופע של  אקספרס
const app =express();
const productrouter = require('../ecom-web-api/v1/routers/product');

// הוספת שכבה שאם תקבל את הערך 
app.use("/product",productrouter);


//מייצא את אפ לקובץ של השרת
module.exports=app;


