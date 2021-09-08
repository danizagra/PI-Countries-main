const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require('./countries')
const ActivityRoutes = require('./activities')

const router = Router();

router.use('/countries',CountriesRoutes)
router.use(ActivityRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
