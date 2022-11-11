const Admin = require('../model/Admin')
const JWT = require('jsonwebtoken');

const listAdmins = async (req,res,next) => {
    const  {username, password} = req.body;
    const list =await Admin.find().select('-password');;
    res.send(list)
}

const register = async (req,res,next) => {
    const  {username, password} = req.body;

    try {
        const createAdmin = await Admin.create({username:username, password:password})
        res.status(201).send(createAdmin);

    } catch (error) {
        console.log("ERRO",error);
        res.status(409).send("Erro ao criar usuário!")   
    }
}

const login = async (req,res) => {
    const  {username, password} = req.body;
    try {
        const loginAdmin = await Admin.findOne({where:{username: username, password:password}})
        
        const token = JWT.sign(
            {username:username, password:password},
            process.env.JWT_SECRET_KEY ,
            {expiresIn:'2h'}
        );
        res.send( {"Seu token: ":token})
    } catch (error) {
        console.log(error);
        res.status(400).send("Erro ao fazer login!")
    }
    
}

module.exports = {listAdmins, register, login};