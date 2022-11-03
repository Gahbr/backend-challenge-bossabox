const router = require('express').Router();
const UsefulTools = require('../model/UsefulTools')

router.get('/', (req,res)=>{
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

router.get('/:id', (req,res)=>{
    UsefulTools.findById(req.params.id,(err,data)=>{
        res.json(data)
    })
});

router.post('/', (req,res)=>{
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

    
    router.delete('/:id', (req,res)=>{
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

module.exports = router;