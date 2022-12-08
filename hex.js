"use strict";

const mainSelect = document.querySelector(".main");
const mainButton = document.querySelector(".button");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += getRandom();
    console.log(color);
  }
  mainSelect.style.backgroundColor = color;
}

mainButton.addEventListener("click", generateColor);

function getRandom() {
  return Math.floor(Math.random() * 12);
}
