let obj = {
    name:"Aditya",
    add:{
        country:"india",
        state:{
            name:"delhi",
            pin:"1212"
        }
    }
}
// let {name} = obj //extracting keys/values from obj, without .(dot)
// console.log(add);


// let {add:{country}}=obj //o/p: india
// console.log(country);


// let {add:{state:{pin}}} = obj  //we are extracting pin from obj
// console.log(pin); //1212


// let {add:{state:{pin:p}}} = obj  //we are extracting pin from obj, we are also changing name of pin
// console.log(p); //1212


// let {add:{country}} =  obj

// let {add:{country:cname}} =  obj //we can give name to country also

let {add:{state:{name:sname,pin:spin}}} = obj;
console.log(sname,spin);