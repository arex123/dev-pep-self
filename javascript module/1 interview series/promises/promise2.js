setTimeout(function(){
    console.log(1);
});

setTimeout(function(){
    console.log(2);
})

let p = new Promise(function(resolve,reject){
    resolve()
});
console.log(3);

p.then(function(){
    console.log(4);
});

p.then(function(){
    console.log(5);
});

p.then(function(){
    console.log(6);
})
