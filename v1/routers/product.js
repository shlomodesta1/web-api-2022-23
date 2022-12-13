//נגדיר אובייקט מסוג ראוטר
const router = require('express').Router();

//מחזיר לנו את הערכים הבאים מתוך התקיה  #1
const { GetAllProduct , GetProductById ,UpDateProductById ,DeleteProductById, AddProduct} = require('../controler/product');

//אופציה שניה נחזיר את כל הערכים הבאים בתוך משתנה אחד #2
const Productcontroller = require('../controler/product');

//הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מוצר
router.get("/",Productcontroller.GetAllProduct); //קריאה לשדה מתוך כמה קיימים #2

//שליפת מוצר לפי קוד מוצר
router.get("/:id",GetProductById );//קריאה לשדה קיים ספציפי #1

//עדכון מוצר לפי קוד מוצר
router.put("/:id",UpDateProductById);//#1

//הוספת מוצר
 router.post("/",Productcontroller.AddProduct);//#2

//מחיקת מוצר לפי קוד מוצר
 router.delete("/:id",DeleteProductById);

 module.exports = router;