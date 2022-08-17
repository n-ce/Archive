var output = document.querySelector("p");

var input = document.querySelector("input");



function H2D() {
  output.innerHTML = parseInt(input.value, 16);
}
function D2H() {
  output.innerHTML = Number(input.value).toString(16);
}
function C2C() {
  navigator.clipboard.writeText(output.textContent);
  document.querySelectorAll('button')[0].innerText="Copied";
}
function B2C(){
  document.querySelectorAll('button')[0].innerText="Copy";
}