const bcrypt=require('bcrypt'); 
const pass="abc123"; 
const saltRounds=10; 
const
hashFromDb="$2b$10$KqhW.Um5S.El9ZlJ.SaG8e0/W/WIItbLEZN17XPWjFgEU80Vdg6ZK"; 
bcrypt.compare(pass,hashFromDb,(err,status)=>{ 
 if(err) 
 console.log(err.message); 
 else
 console.log(status); 
}); 