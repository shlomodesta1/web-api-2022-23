const mongoose = require('mongoose');
module.exports = {
    GetAllProduct:(req,res)=>{
    const productModel = require('../models/product')
    productModel.find().then((products)=> {
      console.log(products);
      return res.status(200).json({products});
  });
    },
    GetProductById:(req,res)=>{
      const productModel = require('../models/product')
      productModel.findOne({"pid":req.params.id}).then((product)=> {
      console.log(product);
        return res.status(200).json({product});
        });
    },
    AddProduct:(req,res)=>{ 
      const productModel = require('../models/product')
      productModel.insertMany (req.body).then((result)=> {
        console.log(result);
        return res.status(200).json({result});
        });
       },
    UpDateProductById:(req,res)=>{ 
      var pname= req.params.pname;
      var price = req.params.price;
      var pdesc= req.params.pdesc;
      var picname=req.params.picname;
      const productModel = require('../models/product')
      productModel.UpdateOne({pid:req.params.id},req.body).then((products)=> {
      console.log(products);
      return res.status(200).json({products});
        });
      },
    DeleteProductById:(req,res)=>{}
};
    