//Inititally there is a "global execution context", and "this"
// so if variable is being used before declaration it will be set to undefined
//And every function in code will also make a global execution context of itself


console.log(a);  // undefined,as variable is declared below it
var a;
console.log(a); //undefined,Again a is being used before declaration
var a = 10;   // now a has 10 in it
console.log(a);  //10

function exe(){ //for every function there will be a new global execution context
    console.log(a); //undefined because a is again declared in this function but below it , we are trying to use a before declaration so s will have undefined in it

    /** Note: if a is not declared in exe() then a will contain 10 */

    var a; //a has undefined it it
    a=20; // a has 20 now
    console.log(a);   //20
};
exe();