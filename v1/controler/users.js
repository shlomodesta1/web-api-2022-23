module.exports ={
    GetAllUsers:(req,res)=>{
        let Conection =global.mysqlDb ;
        Conection.query('select * from t_users',function(err,rows,fields){
            if(err)
            {
              console.log(err.message);
            }
            else
            {
              console.log("ok");
              return res.status(200).json(rows);}
            });
    },
    GetUsersById:(req,res)=>{
        let Conection =global.mysqlDb ;
        Conection.query('select * from t_users where uid =' + req.params.id,function(err,rows,fields){
            if(err)
            {
              console.log(err.message);
            }
            else
            {
              console.log("ok");
              return res.status(200).json(rows);}
            });
    },
    AddUsers:(req,res)=>{
        let Conection =global.mysqlDb ;
            var uname= req.params.uname;
            var pass = req.params.pass;
            var fullname= req.params.full_name;
            var sql = 'INSERT INTO t_users(uname,pass,full_name) VALUES (uname,pass,full_name)';
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
            });
    },
    UpDateUsers:(req,res)=>{
        let Conection =global.mysqlDb ;
        var uname= req.params.uname;
      var pass = req.params.pass;
      var fullname =req.params.full_name;
      var sql = 'UPDATE t_users SET uname=uname,pass=pass,full_name=full_name WHERE uid='+ req.params.id;
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
    DeleteUsers:(req,res)=>{
        let Conection =global.mysqlDb ;
        Conection.query('DELETE FROM t_users WHERE uid='+ req.params.id ,(err,rows,fields)=>{
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
    }
    
}