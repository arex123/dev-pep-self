function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='coffee' || drink=='coffe'){
            resolve('Order Placed')
        }else{
            reject('Sorry, we only serve coffee')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed')
        resolve(`Coffee Served for the ${order}`)
    })
}

/*
//using promise
placeOrder('coffee').then(function(orderFromCustomer){
    console.log('request recieved')
    let orderIsProcessed = processOrder(orderFromCustomer)
    return orderIsProcessed
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed)
}).catch(function(err){
    console.log(err);
})
*/
// using promise , we need to use then so much time and make it as chain and it gets so messed up code not look clean ,
//and thats why async await are good as they dont form chain like promises then , and make code very clean


//using async await

async function serveOrder(){
    
    try{
        const orderRecieved = await placeOrder('cofee')
        console.log(orderRecieved)
        const processedOrder = await processOrder(orderRecieved)
        console.log(processedOrder)
    }catch(err){
        console.log(err);
    }

    
}



serveOrder()



