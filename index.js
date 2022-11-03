const express = require('express');
const dotenv = require ('dotenv').config();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
const mongoUrl = process.env.MONGO_URI;
const app = express();
const UsefulTools = require('./model/UsefulTools')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//mongo
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });


//rotas
app.get('/', (req,res)=>{
    res.send("Seja bem vindo à API da VUTTR (Very Useful Tools to Remember)!");
});

app.get('/tools', (req,res)=>{
    const query =req.query.tag
  
    if(!query){
        UsefulTools.find((err,data)=>{
            res.json(data);
        })
    } else {
        //procurar pela tag
        UsefulTools.find({ tags: query }, (err,data)=>{
            if(data.length == 0) {
                res.json("Não há tags com esse nome.")
            }
            else {
                res.json(data)
            }
        })
    }
});

app.get('/tools/:id', (req,res)=>{
    UsefulTools.findById(req.params.id,(err,data)=>{
        res.json(data)
    })
});

app.post('/tools', (req,res)=>{
    const  {title,link, description, tags} = req.body;
    const newTool =  new UsefulTools({title: title, link:link, description:description, tags:tags});

    UsefulTools.create({title: title, link:link, description:description, tags:tags}, function (err, data) {
        if (err) return res.json(err);
        else{
          res.status(201).json(data);
          return console.log("Usuário criado!");
        } 
        })
    })

    
app.delete('/tools/:id', (req,res)=>{
    const id = req.params.id;

    UsefulTools.findById( id, (err, data) =>{
        if (err || !data){
          console.log(err);
          res.send("Usuário não encontrado.")
        }else {
            UsefulTools.findByIdAndDelete(id, ()=>{console.log("deletado");})
            res.json("Usuário deletado.")
        }
    })

})

//listener
const listener = app.listen(3000, ()=>{
    console.log("Aplicativo rodando no endereço:  http://localhost:" + listener.address().port );
})