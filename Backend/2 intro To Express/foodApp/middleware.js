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
.get(middleware1,getSignUp,middleware2)   //calling middleware1, first middleware1() will get called then getSignUp() then middleware2
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


function middleware1(req,res,next){  //next also helps in sending same req/res parameter to other middleware
    console.log("middleware called");
    next(); //as middleware is done so now it will redirect to getSignUp now 
    //if we didn't write next() we will get stuck here and app will not work
}

function middleware2(req,res){
    console.log("middleware2 encountered");
    
    console.log("middleware 2 ended req/res cycle");
    res.sendFile('/public/index.html',{root:__dirname}); //sending the res from this middleware
    

}
//sign up

function getSignUp(req,res,next){    //when user will find localhost:4000/auth/signup,this will triggere
    console.log('getSignUp called , now we will go next next middleware which is middleware2');
    next();

}

function postSignUp(req,res){
    let datafromfrontend = req.body
    console.log("backend ",datafromfrontend);

    res.json({  //we are sending this data back to axion to frontend
        message:"user signed up",
        data:datafromfrontend
    })

}