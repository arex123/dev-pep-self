// spread operator

// simplearr()
spread()

function simplearr(){    
    // agar hum js mai ek array banayenge or fir uss array ko kiss mai copy karke  kuch change karenge to 
    //original array mai bhi wo change ho jayega, 
    
    var arr = [1,2,3]  // original array
    
    let arr2 = arr  // isko hamne arr ka address copy kiya kissi dusre var mai
    
    arr2.push(5)   // dusre var mai change kiya to original mai bhi change hoga
    
    console.log(arr2);
    console.log(arr);
}

function spread(){
    var arr = [1,2,3]  // original array

    // console.log(arr);  //simple arr
    // console.log(...arr);  //list

    var arr2 = [...arr]
    arr2.push(10)
   
    console.log(arr);
    console.log(arr2) //now it is changed without affecting original arr variable


}



