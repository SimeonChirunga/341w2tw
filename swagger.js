const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Temple API',
        
    },
    host: 'localhost:8080',
    schemes: ['http'],
    apis: ['./routes/*.js']
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.jason
swaggerAutogen(outputFile, endpointsFiles, doc);