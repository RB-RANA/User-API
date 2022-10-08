
const Users = require('../Model/schema')
const {v4: uuidv4} = require('uuid')

const allUser = async (req,res)=>{
 
    try {
        const users = await Users.find()
    res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.massage)
    }

};

const oneUser = async(req,res)=> {

    try {
        const oneUs = await Users.findOne({id: req.params.id});

    res.status(201).json(oneUs)
        
    } catch (error) {
        res.status(500).send(error.massage)
    }


}


    const createUser = async (req,res)=>{
        try {
        const newUser = new Users({
            id: uuidv4(),
            name : req.body.name,
            age  : Number(req.body.age),
    
        })
       await newUser.save()
        res.status(200).json(newUser)
    }
    catch (error) {
        res.status(500).send(error.massage)
    }
} 

const deleteUser = async(req,res)=> {

    try {
     await Users.deleteOne({id: req.params.id});

    res.status(201).json({
        massage: 'User is deleted'
    })
        
    } catch (error) {
        res.status(500).send(error.massage)
    }


}

const updateUser = async (req,res)=>{
    try {
        const oneUs = await Users.findOne({id: req.params.id});
        id: uuidv4(),
        oneUs.name = req.body.name,
        oneUs.age  = Number(req.body.age),

        await oneUs.save()
    res.status(200).json(oneUs)

    }
    catch (error) {
        res.status(500).send(error.massage)
    }
}



module.exports = { allUser,createUser,oneUser,deleteUser,updateUser };