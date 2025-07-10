const routes = require('express').Router();
const temple = require('./temple');
const swaggerRouter = require('./swagger'); // Import the swagger router

// Mount Swagger UI under /api-docs
routes.use('/api-docs', swaggerRouter);

// Your other routes
routes.use('/temples', temple);

routes.get('/', (req, res) => {
    res.send({
        message: 'Welcome to the Temple API',
        documentationURL: 'http://localhost:8080/api-docs'
    });
});

module.exports = routes;
