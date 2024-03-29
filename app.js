const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Users = require('./routes/Users_Router')
const Email = require('./routes/Emails_Router')
const Articles = require('./routes/Articles_Router')
const Question = require('./routes/Questions_Router')
const WhatsApp = require('./routes/WhatsApp_Router')
const Enswers = require('./routes/Enswers_Router')

const port  = process.env.PORT ;

app.use("/" , Users)
app.use("/Articles", Articles )
app.use("/email" , Email)
app.use("/question" , Question)
app.use("/whatsapp" , WhatsApp)
app.use("/enswers" , Enswers)



// port
app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})















//app.use(express.static( '../final-project-react/my-final-project/src/App.jsx'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,"final-project-react/my-final-project/src" , 'app.jsx'));
// }); 