function cropImage(){

preview.style.width = "300px";
preview.style.height = "300px";

}

function addText(){

let text = prompt("Enter text");

let div = document.createElement("div");

div.innerText = text;
div.style.position = "absolute";
div.style.top = "200px";
div.style.left = "200px";
div.style.color = "red";
div.style.fontSize = "30px";

document.body.appendChild(div);

}

function draw(){

preview.style.border = "5px solid red";

}

function undo(){

preview.style = "";

}


