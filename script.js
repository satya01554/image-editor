const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();

upload.onchange = function(){

img.src = URL.createObjectURL(upload.files[0]);

img.onload = function(){

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

}

}

function detectText(){

Tesseract.recognize(
canvas,
'eng',
).then(({ data:{ text } }) => {

alert("Detected Text: " + text);

})

}
