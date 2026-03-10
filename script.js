let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let blur = document.getElementById("blur");
let grayscale = document.getElementById("grayscale");

brightness.oninput = updateFilter;
contrast.oninput = updateFilter;
blur.oninput = updateFilter;
grayscale.oninput = updateFilter;

function updateFilter(){

preview.style.filter =
"brightness(" + brightness.value + "%) " +
"contrast(" + contrast.value + "%) " +
"blur(" + blur.value + "px) " +
"grayscale(" + grayscale.value + "%)";
}

function reset(){

brightness.value = 100;
contrast.value = 100;
blur.value = 0;
grayscale.value = 0;

preview.style.filter = "none";

}
