function handleMotionEvent(event){
  
  if (event.accelerationIncludingGravity.x<-10){
    document.body.innerText=Math.trunc(Math.random()*Math.pow(10,1/Math.random()));
  }
  document.querySelector('html').onclick=function(){
    document.body.innerText=Math.trunc(Math.random()*Math.pow(10,1/Math.random()));
  }
}

window.addEventListener("devicemotion", handleMotionEvent, true);