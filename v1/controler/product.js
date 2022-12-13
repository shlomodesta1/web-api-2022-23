
module.exports = {
    GetAllProduct:(req,res)=>{return res.status(200).json({msg:"All Product"});},
    GetProductById:(req,res)=>{return res.status(200).json({msg:"Product By Id" +" "+ req.params.id});},
    AddProduct:(req,res)=>{ return res.status(200).json({msg:"Add product" })},
    UpDateProductById:(req,res)=>{ return res.status(200).json({msg:"Update By Id" +" "+ req.params.id})},
    DeleteProductById:(req,res)=>{return res.status(200).json({msg:"Delete product By Id" + " "+req.params.id})}

}
    