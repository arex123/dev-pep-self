let arr = ["apple","banana","orange","watermelon"];

let narr = [];

//Q: jo bhi 5 se badi value h arr mai usko narr mai daalna h

for(let i=0;i<arr.length;i++){
    if(arr[i].length>5){
        narr.push(arr[i]);
    }
}

console.log(narr); // in this array all strings are having length greater than 5

//with the help of filter 
let arr2 = [];
arr2 = arr.filter(function(fruit){
    return fruit.length>5
})

console.log(arr);
console.log(arr2);

// Q: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array
