const axios = require("axios");

async function getInfo() {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const organize = response.data.map((d) => {
            return {
                id: d.cca3,
                name: d.name.official,
                image: d.flags.svg,
                continent: d.region,
                capital: d.capital === undefined ? "N/A" : d.capital[0],
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
