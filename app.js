const express = require('express');
// יצירת מופע של  אקספרס
const app =express();
const morgan =require('morgan');
const cors = require('cors');
const mange = require('./v1/midllewares/mange')
const productrouter = require('./v1/routers/product');
const userrouter =require('./v1/routers/users') ;
const ip = require('./v1/midllewares/auth');
const Mysql =require('mysql');

// const Conection = Mysql.createConnection(
//   {
//     host:'localhost',
//     user:'shlomo',
//     password:'shlomodesta1',
//     database:"ecomdb"
//   });
//   Conection.connect(function(err){  // חיבור לבסיס הנתונים
//  if(err) //במידה והייתה שגיאה אז יכנס למשתנה הזה פירוט של השגיאה
//  {
//   console.log(err.message);
//  }
//  else
//  {
//   console.log('connected to Database');
//  }
//   });
//  global.mysqlDb=Conection; //שמירת החיבור לבסיס הנתונים
  
  const mongoose = require('mongoose'); // קישור לספריית מונוגוס
const conn_str = `mongodb+srv://${process.env.Mongo_user}:${process.env.Mongo_password}@cluster0.3pgpo6c.mongodb.net/ecomdb`;// הגדרת מחרוזת התחברות לשרת של מונגו 
mongoose.set('strictQuery',true);
mongoose.connect(conn_str); // פתיחת החיבור לבסיס הנתונים

// הוספת שכבת ביניים של מורגן שמתעדת כל פניה לשרת בקונסול
app.use(morgan('dev'));
//הוספת שכבה של ניתוב עבור מוצרים 
 app.use(function(req,res,next)
 {
  console.log("Conection From Ip " + req.socket.remoteAddress);
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/product",mange,productrouter);
app.use("/users",userrouter);
app.use(cors({origin:"https://www.pexels.com"}));

//app.use("/*",ip);

//מייצא את אפ לקובץ של השרת
module.exports=app;