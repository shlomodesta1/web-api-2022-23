const mongoose =require('mongoose');
const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
} ,{versionKey:false});
// יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
module.exports = mongoose.model('product',productSchema);