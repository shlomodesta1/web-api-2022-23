const bcrypt=require('bcrypt'); 
module.exports ={
   Register:(req,res)=>{
        let Conection =global.mysqlDb ;
          const uname= req.body.uname;
          const pass = req.body.pass;
          const fullname= req.body.full_name;
          
    
            const saltRounds=10; 
            bcrypt.hash(pass,saltRounds,(err,hashPass)=>{ 
            if(err) 
            return res.status(500).json(err.message);
            else
            {
              console.log(hashPass); 
              var sql = `INSERT INTO t_users(uname,pass,full_name) VALUES ('${uname}','${hashPass}','${fullname}')`;
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
            }
           
          
            });     
           
    },
    Login:(req,res)=>{
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
    
    }
    
