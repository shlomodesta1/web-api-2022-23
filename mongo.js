const mongoose = require('mongoose'); // קישור לספריית מונוגוס
const conn_str = "mongodb+srv://shlomo:desta050@cluster0.3pgpo6c.mongodb.net/ecomdb";// הגדרת מחרוזת התחברות לשרת של מונגו 

mongoose.connect(conn_str); // פתיחת החיבור לבסיס הנתונים 
// הגדרות סכימה/ מבנה של אוסף /טבלה של מוצרים
const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
} ,{versionKey:false});
// יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
const productModel = mongoose.model('product',productSchema);
// הפעלת שיטה 
// find
//על המודל והדפסה ללוג את תוצאת השאילתה
productModel.find().then((products)=> {
    console.log(products);
});
productModel.insertMany({Pid:49,Pname:'cheese',Price:67,Pdesc:'best cheese',PicName:'cheese.jpg'}).then((data)=>{
    console.log(data);
});