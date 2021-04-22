const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const cors = require("cors");
const GetUser = require('./controllers/user/getUser');
const AddUser = require('./controllers/user/addUser');


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/auth/login",(request,response)=>{
    GetUser(response,request);
})

app.post("/auth/signup",(request,response)=>{
    AddUser(response,request)
})

app.listen(3001, ()=>{
    console.log('app running on port 3001');
})