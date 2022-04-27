"use strict";

const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const list = document.querySelector("#List");
console.log(input);

btn.onclick = function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  list.appendChild(li);
  li.style.background = "#ccc";
  li.style.listStyle = "none";
  li.innerHTML = input.value;
  input.value = " ";
};
