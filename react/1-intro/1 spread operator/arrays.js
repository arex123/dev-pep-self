// let arr = [10,[8,9,[20,30]]]

// let res = arr.flat(Infinity); // it will make one array from nested array

// arr.push(200)
// res.push(10)
// console.log(arr);
// console.log(res);


let arr1 = [1,2,3,4]

// let arr2 = arr1 // we are just copying address of arr1 to arr2, thats why if we change in one it will reflect in another array also, so for avoiding that we will use spread operator

console.log(...arr1) // output: 1 2 3 4,  ...arr1 this is a list so if we want to make it in array put this list to arr like [...arr1]

let arr2 = [...arr1]
arr1.push(50)
console.log(arr1);
console.log(arr2);