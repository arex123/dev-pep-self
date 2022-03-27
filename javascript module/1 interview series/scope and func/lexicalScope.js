console.log("line number 1",varName); //undefined
var varName = 10;

function b(){
    console.log("line number 5",varName);  //10
    /*
        so we have called b() from fn(),fn() has its varName
        so there is confusion that which varName to use 
        varname from line 2 or varname from line 16
        lexical scope says to print 10 here
    */
}
console.log("line number 7",varName); //10
function fn(){
    console.log("Line number 9",varName); //undefined
    var varName = 20;
    b();
    console.log(varName); //20
}
fn();

/*
Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

Note:

Scope means area, space, or region.
Global scope means global space or a public space.
Local scope means a local region or a restricted region.

*/