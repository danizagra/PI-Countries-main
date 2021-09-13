const {Country, Activity} = require("../db");
const {getInfo} = require("../utils/api_connection/index");

//bulkCreate

async function getAllCountries(req, res, next) {
    if (req.query.name) {
        const {name} = req.query;
        return Country.findAll({where: {id: name}, include:Activity})
            .then((name) => res.send(name))
            .catch((err) => next(err));
    }

    const all = await Country.findAll({include: Activity});
    // Pregunto si ya existe información en la BD 
    if (all.length !== 0) {
        return Country.findAll({include: [
            { model: Activity, attributes: ["name"], through: { attributes: [] } },
          ]})
            .then((country) => res.send(country))
            .catch((err) => next(err));
    }
    //llamada a la api - Solo una vez
    const api = await getInfo();
    //Conexión api con dataBase
    await Country.bulkCreate(api);

    Country.findAll({include: [
        { model: Activity, attributes: ["name"], through: { attributes: [] } },
      ]})
        .then((country) => res.send(country))
        .catch((err) => next(err));

}

function findIdCountry(req, res, next) {
    console.log('entra al id')
    Country.findByPk(req.params.id,{include: Activity})
        .then((character) => res.send({character}))
        .catch((err) => next(err));
}
//

function postCountry(req, res, next) {
    const country = req.body;
    Country.create(country)
        .then((country) => res.send(country))
        .catch((err) => next(err));
}

module.exports = {
    getAllCountries,
    findIdCountry,
    postCountry,
};
