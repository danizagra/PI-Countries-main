const errorHandler = (err, _req, res, _next) => {
      // creo un middleware en caso de que exista algún error y se lo envio al front
  
      const status = err.status || 500;
      const message = err.mesage || err;
      console.error(err);
      return res.status(status).send(message);
  };
  
  module.exports = errorHandler;