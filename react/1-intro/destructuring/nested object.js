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

let {name} = obj

let {add:{country}} =  obj

let {add:{country:cname}} =  obj //we can give name to country also

let {add:{state:{name:sname,pin:spin}}} = obj;
console.log(name, sname,spin);