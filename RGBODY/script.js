//detect input for all inputs
for(i=0;i<3;i++)
document.getElementsByTagName("input")[i].oninput=function(){
  //convert color to hexadecimal
  function color(j){
    return Number(document.getElementsByTagName("input")[j].value).toString(16);
  }
  //color output
  var X = document.body.style.backgroundColor = document.getElementsByTagName("h2")[0].innerHTML = "#"+Hex(color(0))+Hex(color(1))+Hex(color(2));
  document.querySelector("meta[name=theme-color]").setAttribute("content",X);
  function Hex(k) {
    return (k.length < 2) ? "0" + k : k;
  }
}