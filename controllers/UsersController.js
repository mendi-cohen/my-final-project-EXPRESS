const Users = require("../model/Users")

class UsersControll{
    
    async Allusers (req, res){
    const [usersFdb ,_] = await Users.findAll() 
    res.json({usersFdb})    
    }


    async  saveUser(req, res) {

      try {
        // validation

        const validateDB = await Users.validUser(req.body)
        if(validateDB.error){
          return res.status(400).json(validateDB.error.message)
        }

        // check email

        const existingUser = await Users.findByEmail(req.body.email);
       if (existingUser[0]?.email.length > 0) {
        return res.status(400).json({ error: "Email already exists" });
    }
     
    // save the user

          await Users.save(req.body);
          res.json({ "add user": "successfully" });
      } catch (error) {
          console.error('Error saving user:', error);
          res.status(500).json({ "error": "Internal Server Error" });
      }
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
      const { userName, email } = req.body;
      const [NewUser, _] = await Users.updateUsers(id, userName, email);
      res.json({ "NewUser": "yesss" });
    }
    
    }

    module.exports = new UsersControll();