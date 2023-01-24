
module.exports = {
    GetAllProduct:(req,res)=>{
    let Conection =global.mysqlDb ;
        Conection.query('select * from t_products',function(err,rows,fields){
            if(err)
            {
              console.log(err.message);
            }
            else
            {
              console.log("ok");
              return res.status(200).json(rows);}
            }
          );}
        ,
    GetProductById:(req,res)=>{
      let Conection =global.mysqlDb;
      Conection.query('select * from t_products where pid =' + req.params.id,function(err,rows,fields){
        if(err)
        {
          console.log(err.message);
        }
        else
        {
          console.log("ok");
          return res.status(200).json(rows);}
        })
   },
    AddProduct:(req,res)=>{ 
      let Conection =global.mysqlDb;
      var pname= req.body.pname;
      var price = req.body.price;
      var pdesc= req.body.pdesc;
      var picname=req.body.picname;
      var sql = "INSERT INTO t_products(pname,price,pdesc,picname) VALUES ( '" + pname +"','" + price + "','" +  pdesc + "', '" + picname +"')";
       console.log(sql);
      Conection.query(sql,(err,rows,fields)=>{
        if(err)
        {
          console.log(err.message);
          return res.status(500).json(err.message);
        }
        else
        {
          console.log("ok");
          return res.status(200).json(rows);
        }
      })
      },
    UpDateProductById:(req,res)=>{ 
      let Conection =global.mysqlDb;
      var pname= req.body.pname;
      var price = req.body.price;
      var pdesc= req.body.pdesc;
      var picname=req.body.picname;
      var sql = "UPDATE t_products SET pname='" + pname +"', price='" + price + "',pdesc='" +  pdesc + "',picname='" + picname +"' WHERE pid="+ req.params.id;
      console.log(sql);
      Conection.query(sql,function(err,rows,fields){
        if(err)
        {
          console.log(err.message);
          return res.status(500).json(err.message);
        }
        else
        {
          console.log("ok");
          return res.status(200).json(rows);
        }
      });

      },
    DeleteProductById:(req,res)=>{
      let Conection =global.mysqlDb;
      Conection.query('DELETE FROM t_products WHERE pid='+ req.params.id ,(err,rows,fields)=>{
        if(err)
        {
          console.log(err.message);
          return res.status(500).json(err.message);
        }
        else
        {
          console.log("ok");
          return res.status(200).json(rows);
        }
      })
      }

};
    