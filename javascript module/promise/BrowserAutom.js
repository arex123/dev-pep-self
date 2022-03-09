//for more info about puppeteer go to https://pptr.dev
//https://flaviocopes.com/puppeteer/
//https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
const puppeteer = require("puppeteer");
console.log("before");
let cPage;
const browserOpenPromise = puppeteer.launch( { headless:false } );
browserOpenPromise
    .then(function(browser){
        //currently opened tabs
        const pageArrPromise = browser.pages();
        return pageArrPromise;
}).then(function (browserPages){
    cPage = browserPages[0];
    let gotoPromise =  cPage.goto("https://www.google.com/")
    return gotoPromise;
}).then(function(){
    //waiting for the element to appear on the page
    let elementWaitPromise = cPage.waitForSelector("input[type='text']",{visisble:true});
    return elementWaitPromise;
})
.then(function(){
    // console.log("Reached google home page");

    //then type any element on the page - using selector
    let keysWillSendPromise = cPage.type("input[type='text']","pepcoding");
    return keysWillSendPromise;
}).then(function(){
    //cpage.keyboard is used to type special character like "enter"
    let enterWillBePressed = cPage.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    //now we want to go to the pepcoding website after searching "pepcoding on google"
    //so now we will click on first link which is main pepcoding wesite, so for that we will
    //wait for its css selector after getting selector next step will be clicking on it
    let elementWaitPromise = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visisble:true});
    return elementWaitPromise;
}).then(function(){
    //now we will click on first suggested website link for pepcoding, as we already got the selector for the website
    let keyWillBeSendPromise = cPage.click("h3.LC20lb.MBeuO.DKV0Md");
    return keyWillBeSendPromise;
})
.then(function(){
    console.log("all work done");
}).catch(function(err){
    console.log(err);
})


console.log("After");