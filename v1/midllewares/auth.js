//פונקציה שתחזיר לנו האם הוויפי של נמצא ברשימת המורשים [עניין של אבטחת מידע]
module.exports =((req,res,next)=>{
const MyIp = req.socket.remoteAddress; //מציג את כתובת האייפי שלי בגירסה 6
const arr = [192.168 ,123.55,43.44,123.44 ,MyIp];
let count = 0 ;
for(let i =0;i<arr.length;i++)
{
    if(arr[i]== MyIp)
    {
     count++;
     next();
    }
}
if(count > 0)
{
 //   console.log("my ip adress is: " + " " + MyIp + " is a found");
 return res.status(200).json({msg:"my ip adress is: " + MyIp + " is a found" });
}
else
{
//console.log("your ip is not found");
// נסיתי עם שניהם אבל השיטה הראשונה רואים יותר ברור 
 return res.status(404).json({msg:"your ip not founded"});
//  res.end();
}
});
