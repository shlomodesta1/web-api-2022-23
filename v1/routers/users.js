const router = require('express').Router();

const { Register ,Login}= require('../controler/users');

router.post("/register",Register);
router.post("/login",Login);
//router.get("/",GetAllUsers);
//router.get("/:id",GetUsersById);
//router.post("/",AddUsers);
//router.put(":id",UpDateUsers);
//router.delete(":id",DeleteUsers);

module.exports = router ;