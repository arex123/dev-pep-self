//server creation using http module

const http = require('http');  //http is used to send req and take response from server
const fs  = require('fs') //to access other files 

const server = http.createServer((req,res)=>{
    console.log('request has been made from the browser to server')
    // console.log(req);





})


/*so with http we are sending request to server now we want 
to make our computer that server so that computer
and also like servers are located with the help of ip address,
to make our computer that server we will call this computer's ip address which is equivalent to local host and we have opened a gate also to our server at 3000
,
and that's why below line tells to listen local host at 3000 server
*/
server.listen(3000,'localhost',()=>{
    console.log('server is listining on port 3000');
})

/*
ramans code:
*/
/*
const http=require('http')
 const fs=require('fs')
const server=http.createServer((req,res)=>
{
    console.log("server connected with brower");
    console.log(req.url);
    console.log(req.method);

    //send the response server to brower
    res.setHeader('conten-Type','text/html')
    let path='./views'
    switch(req.url){
        case '/':
            path+='/index.html'
            break;

        case '/about':
           path+='/aboutUs.html'
           break;
        default :
       

*/