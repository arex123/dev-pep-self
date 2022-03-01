console.log("varName ", varName);
var varName;
console.log("varName ", varName);
varName = "Captain America";
console.log("varName ", varName);
fn();
function fn(){
    console.log("Hello From fn");
}
fn();
fnContainer();
function fnContainer(){
    console.log("I am an expression");
}
fnContainer();


/*
output:

varName undefined
varName undefined
varName Captain America
Hello From fn
Hello From fn
I am an expression
I am an expression

*/