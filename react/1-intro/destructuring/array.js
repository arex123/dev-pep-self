
let arr = ["Hi","i","am","dua" ]

// let a = arr[0]

// let b = arr[1]

// console.log(a+" ",b);

//destructuring: is an easy way of extracing value from array or obj

let [a,,,b] = arr; //here we have extracted multile value from array in single steps

// console.log(a,b)

// let [e,f,g,h,extra] =arr //we can add new val also , extra will have undefined
// console.log(e,f,g,h,extra)

// let [i,j,,k,newt ] = arr // it will skipp  "am", 
// console.log(i,j, k,newt);



let [e,f,g,h,extra1="dog"] =arr //we can assign new val also 
console.log(e,f,g,h,extra1)



