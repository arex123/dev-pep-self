function fn(){
    //in stack, execution context will be created for this function and all variables will be given a memory, so 'var a' is also given memory and var type variable is given only once memory

    console.log(a); //undefined ,as a is being used before declaration
    var a=10; // a is given 10
    console.log(a);
    if(a==10){
        var a; //a declared again but still it will have 10 in it
        console.log(a); //10
    }
    console.log(a); //10
}
fn();

/*
var type :
-> function scoped
-> hoisting ,variables can be used before declaration
-> redeclaration and reassign

*/

