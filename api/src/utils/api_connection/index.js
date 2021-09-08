const axios = require("axios");

async function getInfo() {
    try {
        const response = await axios.get(
            "https://restcountries.eu/rest/v2/all"
        );
        const organize = response.data.map((d) => {
            return {
                id: d.alpha3Code,
                name: d.name,
                image: d.flag,
                continent: d.region,
                capital: d.capital,
                subregion: d.subregion,
                area: d.area,
                population: d.population,
            };
        });
        return organize;
    } catch (error) {
        console.error(error);
    }
}
module.exports = {getInfo};
