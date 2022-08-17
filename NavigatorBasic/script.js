var x=0;
var y=0;
function right() {x++;}
function left() {x--;}
function up() {y++;}
function down() {y--;}
function upleft() {y++;x--;}
function upright() {y++;x++;}
function downleft() {y--;x--;}
function downright() {y--;x++;}
document.body.onclick = function(){
  document.querySelector('b').style.transform = "translate(" +2*x+"rem,"+2*-y + "rem)";
  document.querySelector('h4').innerHTML=x+","+y;
}