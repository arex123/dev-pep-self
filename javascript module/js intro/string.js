//strings in javascript has almost same functions as java

let word= "hello there cats are eating";

//1: let arrStr = word.split(" "); // array of string which are splited string between spaces

//2: let str = arrStr.join("+"); // all array string are joined together by "+" and stored in as 
//                             //whole string in str
// console.log(str);

//3: string.trim()  , this function removes all starting and ending spaces from string

let str = "   hello good boy dogs are dancing    ";// as it has unnecessary spaces 

str = str.trim(); //as it copys trimed string to another, it doesn't change original string
console.log(str);