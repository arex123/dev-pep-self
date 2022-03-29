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


//mini app
const userRouter = express.Router()

const authRouter = express.Router()

//base route to use
app.use("/user",userRouter);

app.use("/auth",authRouter);

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .delete(deleteUser)
    .patch(patchUser)

userRouter.route("/:username").get(getUserById)


authRouter
.route('/signup')
.get(getSignUp)  //when user will find localhost:4000/auth/signup,this get will triggeres
.post(postSignUp)


function getUser(req,res){
    console.log(req.query); //it will give url query
    res.send(users)
}


function postUser(req,res){
    console.log(req.body);
    users=req.body

    res.json({
        message:"data recieved successfully",
        users:req.body
    });
}



function patchUser(req,res){
    console.log('req.body-> ',req.body);
    //update data in users obj
    let newdata = req.body
    for(key in newdata){
        users[key]=newdata[key]
    }
    res.json({
        message:"data updated successfully"
    })
}



function deleteUser(req,res){
    users={}
    res.json({
        message:"data has been deleted"
    })
}





function getUserById(req,res){
    console.log(req.params.username);  //it will give url parameter
    console.log(req.params);
    res.send("user username received")
}


//sign up

function getSignUp(req,res){    //when user will find localhost:4000/auth/signup,this will triggere
    res.sendFile('/public/index.html',{root:__dirname});
}

function postSignUp(req,res){
    let datafromfrontend = req.body
    console.log("backend ",datafromfrontend);

    res.json({  //we are sending this data back to axion to frontend
        message:"user signed up",
        data:datafromfrontend
    })

}