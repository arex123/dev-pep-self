// let obj = {
//     name:"username",
//     add:{
//         country:"india",
//         state:{
//             code:"DL-48",
//             pin:"121212"
//         }
//     }
// }

// //iterate an object in javascript
// Object.entries(obj).map(entry=>{
//     let key = entry[0]
//     let val = entry[1];
//     console.log(key," ",val);
// })

// Object.entries(obj).map(entry=>{
//     let key = entry[0];
//     let value = entry[1];
//     console.log(key," ",value);
// })

// Object.entries(obj).map(entry=>{
//     console.log(entry[0]," ",entry[1]);
// })

// Object.entries(obj).map(entry=>{
//     console.log(entry[0]," ",entry[1]);
// })

/************************************************************************/


let obj = {
    name:"username",
    add:{
        country:"india",
        state:{
            code:"DL-48",
            pin:"121212"
        }
    }
}


// let obj1 = obj;
// obj1.lastname = "kumar"
// console.log(obj);
// console.log(obj1);

 
// let obj1 = {...obj} //it is shalow copy,it will only copy outer most keys only
// obj1.lastname = "kumar"
// console.log(obj);
// console.log(obj1);

// let  obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}} //it will copy all inner child of given object also, also called deep copy

let obj2 = JSON.parse(JSON.stringify(obj)) //it is shortcut to deeply copy all inner child of object without using spread operator

obj2.lastname = "kumar"
console.log(obj);
console.log(obj2);

