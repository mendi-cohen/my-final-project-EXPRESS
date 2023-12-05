const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Users = require('./routes/Users')

const port  = process.env.PORT ;

app.use("/" , Users)













// port
app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})