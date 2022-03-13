let obj = {
    name: "username",
    add:{
        country:"india",
        state:{
            code:"DL",
            pin:"11111"
        }
    }
}

let obj2 = obj;
obj2.name = "abcd"

console.log(obj);
console.log(obj2); 

//obj2 mai change karne ki wajah se obj mai bhi change ho gya isko avoid karne ke liye 
//hum spread operator use karenge usme, deep

/*
Shallow Copy. A new object is created that has an exact copy of the values in the original object. but in shallow child obj are not copied
Deep Copy. A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields.
   or deep copy , copies all obj , child obj 

    in short cut deep copy can be done by

    let obj = {
    name: "username",
    add:{
        country:"india",
        state:{
            code:"DL",
            pin:"11111"
        }
    }
}

    let obj2 = JSON.parse(JSON.stringify(obj));

        it coppies obj to obj2 in new address so 
        changing obj2 will not affect obj    
    



*/


//now doing copy of obj and then changing in its copy obj2 without affecting it
// let obj = {
//     name: "username",
//     add:{
//         country:"india",
//         state:{
//             code:"DL",
//             pin:"11111"
//         }
//     }
// }

/*

let obj2 = {...obj} //shallow copy, now we can change name in obj2 without changing name of obj , but cant change inside add because it is still
//pointing to its original location , so if change in add in obj2 it will change obj also, thats why it is known as 
//shallow copy

obj2.name = "user";

*/

// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}}; //it is deep copy, copying child obj to new address 

// obj2.name = "abcd";
// obj2.add.country = "usa";
// obj2.add.state.code = "NY";

// console.log(obj);
// console.log(obj2);
