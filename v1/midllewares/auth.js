//פונקציה שתחזיר לנו האם הוויפי של נמצא ברשימת המורשים [ עניין של אבטחת מידע]
module.exports =((req,res,next)=>{
const MyIp = req.socket.remoteAddress;
const arr = [192.168 ,123.55,43.44,123.44 ,MyIp];
for(let i =0;i<arr.length;i++)
{
    if(arr[i]== MyIp)
    {
    console.log("my ip adress is: " + " " + MyIp + " is a found");
     next();
    }
    else
    {
        console.log("your ip is not found");
        // נסיתי עם שניהם אבל השיטה הראשונה רואים יותר ברור 
  //  res.status(404).json({msg:"your ip not founded"});
  //  res.end();
    }
}});
 


