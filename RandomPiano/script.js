var count = 0;
var body = document.body;

body.onclick = function() {count++;}

setTimeout(loop,500);

function command(x){
  var sound = new Audio("Chords/" + Math.trunc(Math.random() * 88) + ".mp3");
  if(count % 2 == 1){
    body.style.backgroundImage = "url(Pause.webp)";
    body.style.backgroundColor = "#059C6A";
    sound.play();
  }
  else{
    body.style.backgroundImage = "url(Play.webp)";
    body.style.backgroundColor = "#00D08C";
    sound.pause();
  }
  setTimeout(x,Math.trunc(Math.random()*3000));
}
function loop(){command(loop2);}
function loop2(){command(loop);}
