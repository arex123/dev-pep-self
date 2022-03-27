let fs = require("fs");
console.log("Before");

// fs.readFile("doc.txt",function(err,data){
//     console.log(data.toString());
// })

let promise = fs.promises.readFile("doc.txt");
console.log(promise);

//fullfilled
promise.then(function (data){
    console.log(""+data);
})

//rejected
promise.catch(function (err){
    console.log(err);
})


console.log("after");