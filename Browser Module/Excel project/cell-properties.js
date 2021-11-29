let sheetDB = [];

for(let i=0; i< rows;i++){
    let sheetRow = [];
    for(let j=0;k<cols;j++){
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "#000000",
            BGcolor: "#000000" // for indication 
        }

        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}

//selecting cells for properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size");
let fontFamily = document.querySelector(".font-family-prop")
let fontColor = document.querySelector(".font-color-prop");
let BGColor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];


//application of two way binding