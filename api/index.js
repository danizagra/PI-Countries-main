const app = require("./app");
/* const morgan = require("morgan"); */

const {conn} = require("./src/db");

const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Base de datos conectada')
 app.listen(PORT, () => {
        console.log(`listening at ${PORT}`);
    });
});
