const swaggerAutogen = require('swagger-autogen')()


const outputFile = './swagger_output.json'
const endpointsFiles = [['./routes/authRoute.js'],['./routes/toolsRoute.js']];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})