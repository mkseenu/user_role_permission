const express = require('express');
const app = express();
const { users,ROLE }= require('./data');
const {authUser , authUserRole} = require('./permissions');

app.use(express.json());
app.use(setUser);

app.get('/',authUser,(req,res)=>{
    res.send('Home Page');
})

app.get('/dashboard',authUser,(req,res)=>{
    res.send('Dashboard Page');
})

app.get('/admin',authUser,authUserRole(ROLE.ADMIN),(req,res)=>{
    res.send('Admin Page');
})

function setUser(req,res,next){
    const userId = req.body.userId;
    if(userId) { 
        req.user = users.find(user=> user.id === userId)
    }
    next()
}

app.listen(3000);