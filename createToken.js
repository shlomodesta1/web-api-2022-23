require('dotenv').config(); 
const jwt=require('jsonwebtoken'); 
const private = process.env.privatekey;
const token=jwt.sign({Uid:23,ww:45},private,{expiresIn:'1h'}); 
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJpYXQiOjE2NzI3NzAwMTcsImV4cCI6MTY3Mjc3MzYxN30.DeLWY8k00FadCpBdyUVYPg2u8osLdmoBXd35HiOrOXU
try{
const pelet = jwt.verify(token,private);
console.log(pelet.Uid);
}
catch 
{
    console.log(err.massage);
}