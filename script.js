let upload = document.getElementById("upload");
let preview = document.getElementById("preview");

let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");

let rotateValue = 0;
let flipValue = 1;

upload.onchange = function(){
preview.src = URL.createObjectURL(upload.files[0]);
}

brightness.oninput = updateFilter;
contrast.oninput = updateFilter;

function updateFilter(){

preview.style.filter =
"brightness(" + brightness.value + "%) " +
"contrast(" + contrast.value + "%)";
}

function grayscale(){
preview.style.filter = "grayscale(100%)";
}

function rotate(){
rotateValue += 90;
preview.style.transform = "rotate("+rotateValue+"deg)";
}

function flip(){
flipValue *= -1;
preview.style.transform = "scaleX("+flipValue+")";
}

function reset(){

brightness.value = 100;
contrast.value = 100;

preview.style.filter = "none";
preview.style.transform = "none";
}

function downloadImage(){

let link = document.createElement("a");
link.download = "edited-image.png";
link.href = preview.src;
link.click();

}