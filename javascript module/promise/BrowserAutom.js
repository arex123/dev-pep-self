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
    console.log("all work done");
}).catch(function(err){
    console.log(err);
})


console.log("After");