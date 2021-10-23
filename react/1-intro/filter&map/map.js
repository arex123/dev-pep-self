let arr = [1,2,3,4]

let narr = []


// print new array with multiplied arr value

// for(let i=0;i<arr.length;i++){
//     narr[i] = arr[i]*2;
// }
// console.log(arr);
// console.log(narr);

narr = arr.map((value,idx)=>{

    return value*2;

})

console.log(arr);
console.log(narr);

/*
Q: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array
*/