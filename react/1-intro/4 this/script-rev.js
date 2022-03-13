// console.log("this1 ",this)

// function fn(){
//     console.log("this2 ",this);
// }
// fn()
// let obj={
//     name:"udai",
//     func: fn
// }
// obj.func();

/****************************************************************************************************/

//problem
// function fn(){
//     console.log("first this ", this); //'this' hold obj
//     function abc(){
//         console.log("second this ",this); //but this is has window object , we want this 'this' to have obj
//     }
//     abc()
// }

// let obj = {
//     name:"Aditya",
//     func: fn
// }

// obj.func();



/***************************************************************/


// //solution 1st aproach using bind()

// function fn(){
//     console.log("first this ", this); //'this' hold obj
//     function abc(){
//         console.log("second this ",this); //now this will point at obj also
//     }
//     let ret = abc.bind(this) //this will make abc() to hold obj with it
//     ret()
// }

// let obj = {
//     name:"Aditya",
//     func: fn
// }

// obj.func();




/***************************************************************/

//solution 1st aproach using bind()

function fn(){
    console.log("first this ", this); //'this' hold obj
    abc = () =>{
        console.log("second this ",this); // arrow funtion apna this apne parent function se leta h, ye iski by default property
    }
    abc()
}

let obj = {
    name:"Aditya",
    func: fn
}

obj.func();