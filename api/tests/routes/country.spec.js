/* eslint-disable import/no-extraneous-dependencies */
const {expect} = require("chai");
const session = require("supertest-session");
const app = require("../../app.js");
const {Country, conn} = require("../../src/db.js");

const agent = session(app);
/* const country = {
    id: "USA2",
    name: "Estados Unidos2",
    image: "frthgfhdfgh",
    continent: "America",
    capital: "Washignton",
    subregion: "Northern America",
    area: 13658,
    population: 1356468432
}; */

describe("Country routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    /* beforeEach(() =>
        Country.sync({force: true}).then(() => Country.create())
    ); */
    describe("GET /countries", () => {
        it("should get 200 if connect to /countries", () => agent.get("/countries").expect(200));
    });

    describe("GET /activity", () => {
        it("should get 200 if connect to /activity", () => agent.get("/activity").expect(200));
    });
});
