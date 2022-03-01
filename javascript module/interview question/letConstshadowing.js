let fruit = "apple";
console.log(fruit); // apple 
{
    let fruit = "orange"; //this is also called variable shadowing as it covers the value of fruit from outer scope
    console.log(fruit); //orange
}
console.log(fruit); //apple

const f = "banana";
console.log(f); //banana
{
    const f = "kiwi"; //it is also shadowing outer f variable
    console.log(f); //kiwi
}
console.log(f); //banana
