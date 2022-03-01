//2015 ES6
//hoisting
//ek function mai, var ke liye ek baar hi memory allocate hoti h

console.log("using variable before declaration is hoisting",varName);

//declare
var varName;
varName=10;
console.log("line number 8",varName);

//reassign
varName = 20;
console.log("line number 12",varName);

var varName; //declaring again but in global execution context, var is function scoped, varName is already given a memory so it will have previous assigned value 20

console.log(varName);