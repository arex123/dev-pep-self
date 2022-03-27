/*
Hoisting is JavaScript's default behavior of moving declarations to the top.

JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.
*/


//In global execution context variable are stored, a 
//jab bhi ek execution context banta h n tabhi var variable
//ke liye memory allocation hoti h 
var a=10;
console.log("line number 2",a); //10
function fn(){ //new global execution context: a
    console.log("line number 4",a); //undefined
    var a=20; // a will get 20
    a++; 
    console.log("line number 7",a); //21
    if(a){//a
        var a = 30; // now same a from above scope will be changed to 30
        // if a is not initialized to 30 then it will still contain 20 even after new initiallization
        a++;
        console.log("line number 11",a); //31
    }
    console.log("line number 13",a); //21 is wrong 31 is write because a is var type of variable so a will be given memory when 
    //execution context is created
}
fn();
console.log("line number 2",a); //10