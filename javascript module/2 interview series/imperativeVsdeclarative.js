// is the square of the number is even


//Imperative way, a naive way of writing the logic of code 

// const x=9;

// const xSquare = x*x;

// let isEven = false;
// if(xSquare%2==0){
//     isEven=true;
// }
// console.log(isEven);


//Declarative , this is below code as we can see how sort and simple it is so in functional programmig we'll use declarative way of coding  

const isSquareEven = (x)=>((x*x)%2===0?true : false)
console.log(isSquareEven(4));  //we can call object as a function also