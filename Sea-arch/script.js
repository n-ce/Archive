//Search
document.querySelector("input").onkeyup=function() {
  let input = document.querySelector('input').value;
  input=input.toLowerCase();
  let x = document.querySelectorAll('li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {x[i].style.display="none";}
    else {x[i].style.display="list-item";}
  }
}

//JSON PARSING
//FETCH
fetch('animals.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      appendData(data);
    }).catch(function (err) {
      console.log('error: ' + err);
    });
//Loading the objects
    function appendData(data) {
      for (var i = 0; i < data.length; i++) {
        var list = document.createElement("li");
        list.innerHTML = data[i].firstName;
        document.querySelector('ul').appendChild(list);
    }}