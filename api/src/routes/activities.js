const router = require("express").Router();
const {newActivity, getAllActivities} = require("../controllers/activities");

router.post("/activity", newActivity);

router.get("/activity", getAllActivities);

module.exports = router;
