window.onload = (event) => {
  setInterval(function(){
    var H = "0123456789ABCDEF";
    var C = '#';
    for (var i = 0; i < 6; i++)
    C += H[(Math.floor(Math.random()*16))];
    document.body.style.backgroundColor=C;
    document.querySelector("div").style.boxShadow = "0 0 1.75rem 1rem" + C;
    document.querySelector("div").style.backgroundImage="radial-gradient(white,transparent,"+C+" 70% ),conic-gradient(violet,indigo,blue,green,yellow,orange,red,violet)";
    document.querySelector("meta[name=theme-color]").setAttribute("content",C);
  }, 1000);
}
document.body.onclick=function(){document.documentElement.requestFullscreen()}
