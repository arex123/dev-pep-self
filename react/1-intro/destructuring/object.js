let obj = {
    name:"Aditya",
    state: "Delhi",
    country:"india"
}

//we can retrive value from obj by doing these things
// let name = obj.name;
// let state = obj["state"];

// console.log(name,state);

//but in destructuring 

// let {name,state,country,extra="we can define extra val also"} = obj

let {name:firstname,state,country,extra=" <=we can define extra val also=>"} = obj //we can change the name also
console.log(firstname,state,country,extra);