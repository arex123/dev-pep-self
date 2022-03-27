const express = require('express')

const app = express()

//its a middleware , it converts data coming from fronted to json 
app.use(express.json())

app.listen(3000)

let users={};

app.get('/user',(req,res)=>{
    res.send(users)
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    users=req.body

    res.json({
        message:"data recieved successfully",
        users:req.body
    });
});

//for update-> use patch http method

app.patch('/user',(req,res)=>{
    console.log('req.body-> ',req.body);
    //update data in users obj
    let newdata = req.body
    for(key in newdata){
        users[key]=newdata[key]
    }
    res.json({
        message:"data updated successfully"
    })
})

app.delete('/user',(req,res)=>{
    users={}
    res.json({
        message:"data has been deleted"
    })
})