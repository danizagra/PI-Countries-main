const router = require("express").Router();
/* const axios = require('axios') */

const {
    getAllCountries,
    findIdCountry,
    postCountry,
} = require("../controllers/countries");

router.post("/", postCountry);

router.get("/", getAllCountries);

router.get("/:id", findIdCountry);

module.exports = router;
