const puppeteer = require("puppeteer");

let browserOpen = puppeteer.launch({
    headless:false,
    // args:['--start-maximized'],// this will open chromium app in full/maximized screen
    defaultViewport:null
})

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
})