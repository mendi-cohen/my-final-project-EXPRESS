const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Users = require('./routes/Users')

const port  = process.env.PORT ;

app.use("/" , Users)















//app.use(express.static( '../final-project-react/my-final-project/src/App.jsx'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,"final-project-react/my-final-project/src" , 'app.jsx'));
// }); 


// port
app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})