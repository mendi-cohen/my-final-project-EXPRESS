const Users = require("../model/Users")
const jwt = require('jsonwebtoken');
const secretKey = 'lod123';


class UsersControll{
    
    async Allusers (req, res){
    const [usersFdb ,_] = await Users.findAll() 
    res.json({usersFdb})    
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







    // Sign in user 
    

    async saveUser(req, res) {
      try {
        // validation
        const validateDB = await Users.validUser(req.body);
        if (validateDB.error) {
          return res.status(400).json(validateDB.error.message);
        }
    
        // check email
        const existingUser = await Users.findByEmail(req.body.email);
        if (existingUser && existingUser.length > 0) {
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


    //Login user if is email exsist and create tokens

    


    async Login(req, res) {
      try {
        const existsEmail = await Users.findByEmail(req.query.email);
    
        if (existsEmail && existsEmail.length > 0) {
          const user = existsEmail[0];
          const payload = { user_Id: user.id,user_Name: user.userName, user_Email: user.email };
          const token = jwt.sign(payload, secretKey );
          const set_token = await Users.enterToken( token , user.email )
          return res.status(200).json({ success: "Login successful", token });
        } else {
          return res.status(404).json({ error: "Email not found!" });
        }
      } catch (error) {
        console.error("Error in findTheEmail:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }}
 
    module.exports = new UsersControll();