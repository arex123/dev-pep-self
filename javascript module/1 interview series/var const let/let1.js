let fruits = "apple";
console.log(fruits); //apple
{ //this is known as block
    // console.log(fruits); //error because let type of variable can be used only after declaring
    let fruits;
    console.log(fruits); //undefined because fruits is not initialized
    fruits = "orange"; //fruits now has orange
    {
        console.log(fruits);//orange ,in this scope fruits is not declared so it will find fruits in outer scope
    }
    console.log(fruits); //orange
}
console.log(fruits); //apple

/*
let variable :
 -> let variable cant be redeclared but can be initialized many times
 -> let variable is scoped in inner scope let variable can be declared again
 */