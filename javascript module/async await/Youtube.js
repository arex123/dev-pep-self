const puppeteer = require('puppeteer')
let link = 'https://www.youtube.com/playlist?list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4' //iss line ko cTab ke niche likhne se error show hota h?
let cTab //this is for storing current tab

(async function(){
    try{
        let browserOpen = puppeteer.launch({
            headless:false,
            defaultViewport: null,
            args:['--start-maximized']
        })

        let browserInstance = await browserOpen
        let allTabsArr = await browserInstance.pages()
        cTab = allTabsArr[0]
        await cTab.goto(link)
        await cTab.waitForSelector('h1#title')
        let name = await cTab.evaluate(function(select){
            return document.querySelector(select).innerText},'h1#title'
            ) // passing function as an argument and selector as an argument
        console.log(name);
    }catch(error){

    }
})()