const UsefulTools = require('../model/UsefulTools')

const listTools = (req, res, next) => {
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
};

const findById = (req,res) =>{
    UsefulTools.findById(req.params.id,(err,data)=>{
        res.json(data)
    })
}

const createTool = (req,res) =>{
    const  {title,link, description, tags} = req.body;

    UsefulTools.create({title: title, link:link, description:description, tags:tags}, function (err, data) {
        if (err) return res.json(err);
        else{
          res.status(201).json(data);
          return console.log("Usuário criado!");
        } 
        })
}

const deleteTool = (req,res)=>{
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
}

module.exports = {listTools, findById, createTool, deleteTool};