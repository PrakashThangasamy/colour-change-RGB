const redRange = document.getElementById("red-range");
const greenRange = document.getElementById("green-range");
const blueRange = document.getElementById("blue-range");
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const blueDiv = document.getElementById("blue");
const rgbValue = document.getElementById("rgb-value");

redRange.addEventListener("input", updateColors);
greenRange.addEventListener("input", updateColors);
blueRange.addEventListener("input", updateColors);

function updateColors() {
  const red = redRange.value;
  const green = greenRange.value;
  const blue = blueRange.value;
  redDiv.style.backgroundColor = `rgb(${red}, 0, 0)`;
  greenDiv.style.backgroundColor = `rgb(0, ${green}, 0)`;
  blueDiv.style.backgroundColor = `rgb(0, 0, ${blue})`;
  rgbValue.innerHTML = `RGB(${red}, ${green}, ${blue})`;
}
