let cols = 26;
let rows = 100;

let addressColCont = document.querySelector("address-col-cont");
for(let i=1;i<=rows;i++){
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class","address-col");
    addressCol.innerText = i;
    addressCol.appendChild(addressCol);
}