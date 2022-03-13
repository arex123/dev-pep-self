//in this tutorial we will talk about Browser environment and non-stick mode for this

/*

What is this?
The JavaScript this keyword refers to the object it belongs to.

*/



// console.log(this);  // When used alone, the owner is the Global object, so this refers to the Global object.
                        //In a browser window the Global object is [object Window]:

// function fn(){
//     console.log(this);
// }

// fn() //Global object is window ko call Kara rha h.


// let obj = {
//     name:"aditya",
//     func: fn
// }

// obj.func() //self object

/******************************************************************************************************************************************/

/*

function fn(){
    console.log(this);  // ye this obj ko point kar raha h
    function abc(){
        console.log(this); //ye window obj ko point kar rha h,
        //isme yahi problem h ki ye obj ko point nahi kar rha uske liye ab 2 method dekhenge jisse
        //ye bhi obj ko point kare
    }
    abc()
}


let obj = {
    name:"aditya",
    func: fn  //fn returns function to func
}

obj.func()

*/


/*********************************************************************************************************************************************
 * /

/*
//METHOD ! : bind function


function fn(){
    console.log(this);  // ye this obj ko point kar raha h
    function abc(){
        console.log(this);  // ab ye bhi bind function ki wajah se obj ko point kar rha h
    }
    
    let ret = abc.bind(this);
    ret();

}


let obj = {
    name:"aditya",
    func: fn  //fn returns function to func
}

obj.func()

*/

/*********************************************************************************************************************************/

//METHOD 2: Array function


// function fn(){
//     console.log(this);  // ye this obj ko point kar raha h
//         abc = () => {
//         console.log(this);  // Arrow function parent obj ko point karwata h to ye bhi ab 
//                             // obj ko point karega
//     }
    
//     abc();

// }


// let obj = {
//     name:"aditya",
//     func: fn  //fn returns function to func
// }

// obj.func()