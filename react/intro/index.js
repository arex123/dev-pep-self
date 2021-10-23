// spread operator

// agar hum js mai ek array banayenge or fir uss array ko kiss mai copy karke  kuch change karenge to 
//original array mai bhi wo change ho jayega, 

var arr = [1,2,3]  // original array

let arr2 = arr  // isko hamne copy kiya kissi dusre var mai

arr2.push(5)   // dusre var mai change kiya to original mai bhi change hoga

console.log(arr2);
console.log(arr);

