const express = require('express')
const mongoose = require('mongoose')
const app = express()
const emailvalidate = require('email-validator')
//its a middleware , it converts data coming from fronted to json 
app.use(express.json())

app.listen(3000)


//mini app
const userRouter = express.Router()

const authRouter = express.Router()

//base route to use
app.use("/user",userRouter);

app.use("/auth",authRouter);

userRouter
    .route("/")
    .get(getUsers)
    .post(postUser)
    .delete(deleteUser)
    .patch(patchUser)

userRouter.route("/:username").get(getUserById)


authRouter
.route('/signup')
.get(getSignUp)  //when user will find localhost:4000/auth/signup,this get will triggeres
.post(postSignUp)


async function getUsers(req,res){
    // console.log(req.query); //it will give url query
    // let usersdata = await userModel.find(); //we'll get all documents from userModel

     let usersdata = await userModel.findOne({name:'aniket'}) //it will get one documet which has {name : Aditya} in it from userModel

    res.json({ message:'list of all the users',
                data:usersdata
            })
}


function postUser(req,res){
    console.log(req.body);
    users=req.body

    res.json({
        message:"data recieved successfully",
        users:req.body
    });
}



async function patchUser(req,res){
    console.log('req.body-> ',req.body);
    //update data in users obj
    let newdata = req.body
    let user = await userModel.findOneAndUpdate({email:'abc@gmail.com'},newdata)
    res.json({
        message:"data updated successfully",
        data:user
    })
}



async function deleteUser(req,res){
    let user = await userModel.findOneAndDelete({name:'kumar'})
    res.json({
        message:"user has been deleted",
        data: user //this user is  going to deleted
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

async function postSignUp(req,res){
    let dataObj = req.body
    // console.log("backend ",dataObj);
    let user = await userModel.create(dataObj)

    res.json({  //we are sending this data back to axion to frontend
        message:"user signed up and data in db sended successfully",
        data:user
    })

}





//mongoose connect

const db_link=url;
mongoose.connect(db_link)
.then(function(db){
    
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
})


//making schema
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailvalidate.validate(this.email)
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){
            return this.confirmPassword==this.password
                }
    }
});


//pre post hooks
//before save event occurs in db
userSchema.pre('save',function(){
    console.log('before saving in db',this); //this will give new data that we want to save in db

    //this has data which we want to save in db, but confirm psd is something we dont want to save as it will be like redundant value as we already have password then why to save confirm password in db so we will remove password from schema at the time of saving to the db
    this.confirmPassword = undefined; //now confirmPassword will not get saved to the db
})

//after save event occurs in db
userSchema.post('save',function(doc){
    console.log('after saving in db',doc); //doc is the new data which has been added to db
})


//creating model
const userModel = mongoose.model('userModel',userSchema)

//add user in db

async function createUser(){
    let user={
        name:'aniket',
        email:'abcd@gmail.com'
    };

    let data = await userModel.create(user)  //as it will take some time to save it in server so we'll use await to stop for some time
    console.log(data);
}

//calling function to add data in userModel collection
/*   createUser();              */