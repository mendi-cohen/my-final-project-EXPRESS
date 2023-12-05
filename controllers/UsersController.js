const Users = require("../model/Users")

class users{
    
    async Allusers (req, res){
    const [usersFdb ,_] = await Users.findAll() 
    res.json({usersFdb})    
    }


    async saveUser(req, res){
       const {user_ID ,userName , email} = req.body;
       let addusers =  new Users(user_ID,userName, email) 
       addusers = await addusers.save()
       res.json({"adduser": "true"})
    }
    }

    module.exports = new users();