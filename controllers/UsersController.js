const Users = require("../model/Users")

class UsersControll{
    
    async Allusers (req, res){
    const [usersFdb ,_] = await Users.findAll() 
    res.json({usersFdb})    
    }


    async saveUser(req, res){
        await Users.save(req.body)
       res.json( {"addusers" : "yes"})
    }

    async findOne(req, res){
      const id = req.params.id
     const [userID,_] = await Users.findById(id)
     res.json({userID})
    }

    async delfunc(req, res){
      const id = req.params.id
      const reset = await Users.findAndDelete(id)
      res.json({"reset": true})
    }

    async update(req, res) {
      const id = req.params.id;
      const { user_ID, userName, email } = req.body;
      const [NewUser, _] = await Users.updateUsers(id, user_ID, userName, email);
      res.json({ "NewUser": "yesss" });
    }
    
    }

    module.exports = new UsersControll();