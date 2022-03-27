const express = require('express')
const app = express()

app.listen(3000)

app.get('/',(req,res)=>{
    // res.send('hello world from server')

    res.sendFile('./views/index.html',{root:__dirname})

})

app.get('/about',(req,res)=>{
    res.sendFile('/views/about.html',{root:__dirname})
})


//redirect
/*
redirect are used when we have changed our page lacation
*/

app.get('/about-us',(req,res)=>{  /*if we call at '/about-us' and '/about-us' is not any address so we are shifting this to 
'/about' */
    res.redirect('/about')
})


//404 page, when page not found

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})
