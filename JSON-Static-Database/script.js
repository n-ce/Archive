//FETCH
function content(a){
fetch("./"+a+".json").then(function (response) {
      return response.json();
    }).then(function (data) {
      appendData(data);
    }).catch(function (err) {
      console.log('error: ' + err);
    });
}

//Loading the objects
var root = document.getElementById('root');
function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var p = document.createElement("p");
    p.innerHTML = data[i].Name;
    root.appendChild(p);
  } 
}


// Remove Function

function remove(){
  while (root.hasChildNodes()) {
    root.removeChild(root.firstChild);
  }
}

// Click decision making

var count = couns = 0;

function Sites() {
  if(count%2==0){
    content('Sites');
    count++;
  }
  else{
    count--;
    remove();
  }
}
function Animals() {
  if (couns % 2 == 0) {
    content('Animals');
    couns++;
  }
  else {
    couns--;
    remove();
  }
}
