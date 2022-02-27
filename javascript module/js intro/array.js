// let arr =[1,0,[2,3,[88,9],4]];


// 1 : let res = arr.flat(Infinity); // it will make one array from nested array

// console.log(arr.length);
// console.log(res.length);

/*
-> so in javascript array is not a single type, we can add 
   numbers , string, char in a single array
-> one single array can be act as stack , arraylist, queue if we compare it to java data structure tools

*/
// let arr = [1,2,3,4,5,6,7,8];

// 2:  length of array:  console.log(arr.length);
// let i =0;
// while(i<arr.length){
//     console.log(arr[i++]);
// }
// 3:  adding element in arr from back-> push()
// arr.push(10);

// 4: adding element in front of array->unshift()
// arr.unshift(0);
// console.log(arr);


//  5: removing first element in array by shift() , and last element by pop()

// arr.pop(); //removing last element from array
// arr.shift();  //removing first element fron array
// console.log(arr);



// 6 : slice(idx,idx) it will make copy of array from specified index

let arr = [1,2,3,4,5,6,7,8];

// let partOfArray = arr.slice(2,6); // including 2nd element but till 6th(not including 6th element)
// console.log(partOfArray);

// //if splice(idx) it will copy from idx till end of array

// let partOfArray2 = arr.slice(7);
// console.log(partOfArray2);



// 7: splice(idx,frequency) 
//splice() will delete elements from original array from index(idx) (till idx+frequency-1)

// arr.splice(5,1);// deleting 5th index element 
// arr.splice(2,4); // deleting 4 element from index 2 in array



// 8:  arr.indexOf(element) it will give the index value of element,
// if element is not present it will print -1
console.log(arr.indexOf(15)); 

