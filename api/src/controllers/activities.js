const {Activity, Country} = require("../db");

function getAllActivities(req, res, next) {
    Activity.findAll({})
        .then((country) => res.send(country))
        .catch((err) => next(err));
}
async function newActivity(req, res, next) {
    const {country, name, difficulty, duration, season} = req.body;
    const aux = {name, difficulty, duration, season};

    const activity = await Activity.create(aux);
    const search = await Country.findAll({
        where: {
            id: country,
        },
    });
      res.json(await activity.addCountries(search))
} 

module.exports = {
    newActivity,
    getAllActivities,
};
