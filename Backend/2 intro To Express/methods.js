const express = require('express')

const app = express()

//its a middleware , it converts data coming from fronted to json 
app.use(express.json())

app.listen(3000)

let users=[
    {
        'id':1,
        'name':"Aditya"
    },
    {
        'id':2,
        'name':"sun"
    },
    {
        'id':3,
        'name':"badal"
    }
];

app.get('/user',(req,res)=>{
    console.log(req.query); //it will give url query
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


//delete
app.delete('/user',(req,res)=>{
    users={}
    res.json({
        message:"data has been deleted"
    })
})


//params
// app.get('/user/:id',(req,res)=>{
//     console.log(req.params.id)
//     console.log(req.params)
//     res.send("user id recieved")
// })


//params for username , both params are same
app.get('/user/:username',(req,res)=>{
    console.log(req.params.username);  //it will give url parameter
    console.log(req.params);
    res.send("user username received")
})
