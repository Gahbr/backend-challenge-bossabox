const express = require('express');
const dotenv = require ('dotenv').config();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
const mongoUrl = process.env.MONGO_URI;
const app = express();
const toolsRoute = require('./routes/toolsRoute');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

//swagger
const swaggerOptions= {
    swaggerDefinition:{
        info:{
            title: "VUTTR (Very Useful Tools to Remember) API",
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//mongo
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

//chamando as rotas
app.get('/', (req,res)=>{
    res.send("Seja bem vindo à API da VUTTR (Very Useful Tools to Remember)!");
});

app.use('/tools', toolsRoute);

//listener
const listener = app.listen(3000, ()=>{
    console.log("Aplicativo rodando no endereço:  http://localhost:" + listener.address().port );
})