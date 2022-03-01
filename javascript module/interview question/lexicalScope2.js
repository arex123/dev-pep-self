const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName; //due to lexical scoped fullName has "Oluwatobi Sofela"
    }
    return writeName();
  }
  return sayName();
}
console.log(profile());

/*
Scope Chain : At the top of the scope chain is the global scope, which is the window object in the browser ( global in NodeJS ). Besides from the global scope, functions have their own scoping of variables. The scope chain can be determined by looking at where functions are defined. When resolving a variable, inner functions first look at their own scope.
*/