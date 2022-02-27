// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.
//object-> group of key : value pair
//key: value ko property bolte h
//key: function ko method bolte h
let cap = {
  name: "Steve",
  lastName: "kumar",
  address: {
    city: "Manhattan",
    state: "New York",
  },
  age: 100,
  isAvenger: true,
  movies: ["First Avenger", "winter soldier", "civil war"],
  sayHi: function () {
    console.log("Cap say's hi");
    return "hello guys";
  },
};

// //get from object(its like hashmap in java)
// console.log(cap.age);
// console.log(cap.movies[1]);
// console.log(cap.sayHi());

// //updating keys in object
// cap.age=38;
// console.log(cap.age);

//adding more value pair

// cap.friends = ["tony", "bruce", "natasha", "hocaye🤔"];

// console.log(cap);

// deleting from object

// delete cap.address;
// console.log(cap);

// console.log("Key: value");
// for(let key in cap){
//     console.log(key,":",cap[key]);
// }

//search the key in object
console.log(cap["age"]);
console.log(cap.age);

//to check if key is present in object
// let propKey = "age";
// console.log(cap[propKey]!=undefined);
// console.log(cap.race==undefined);