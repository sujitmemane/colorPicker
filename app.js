"use strict";

const mainSelect = document.querySelector(".main");
const mainButton = document.querySelector(".button");

// mainSelect.style.backgroundColor = "blue";

const colorArray = [
  "red",
  "black",
  "pink",
  "magenta",
  "green",
  "blue",
  "orange",
  "greay",
  "yellow",
  "gold",
  "silver",
  "brown",
];

function colorIndexGenerator() {
  const numberGenerator = Math.trunc(Math.random() * 12) + 1;
  console.log(numberGenerator);
  mainSelect.style.backgroundColor = colorArray[numberGenerator];
}

mainButton.addEventListener("click", colorIndexGenerator);
