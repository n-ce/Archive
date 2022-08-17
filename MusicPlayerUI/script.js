var count = 0;
var body = document.body;
var sound = new Audio('Sound.mp3');
body.onclick=function(){
  count++;
  if(count%2==1){
    body.style.backgroundImage="url(Pause.webp)";
    sound.play();
  }
  else{
    body.style.backgroundImage="url(Play.webp)";
    sound.pause();
  }
}
