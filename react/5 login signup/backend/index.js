const express = require("express");
// const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');
const app = express();
let detail = require('./model')
const router = express.Router();

app.use("/", router);

mongoose.connect('mongodb://localhost:27017/profileGuvi',{
    useNewUrlParser: true, useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

app.set("view engine","ejs")

// app.use('/articles',articleRouter);

router.route("/getData").get(function(req, res) {
    detail.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });




// app.get('/',(req,res)=>{
//     res.send("hello");
// })

const port = 1111;
app.listen(port ,()=>{
    console.log(`running at local port ${ port }`);
} )