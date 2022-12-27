const router = require('express').Router();

const { GetAllUsers , GetUsersById , AddUsers , UpDateUsers ,DeleteUsers}= require('../controler/users');


router.get("/",GetAllUsers);
router.get("/:id",GetUsersById);
router.post("/",AddUsers);
router.put(":id",UpDateUsers);
router.delete(":id",DeleteUsers);

module.exports = router ;