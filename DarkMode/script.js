var checkBox = document.querySelector("input");
function meta(X) {
  return document.querySelector('meta[name="theme-color"]').setAttribute("content", X),document.body.style.backgroundColor = X;
}
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    meta("black");
    checkBox.checked=true;
  } else {
    meta("white");
    checkBox.checked=false ;
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

if (window.localStorage.getItem('data-theme') == "black"){
  window.localStorage.setItem('data-theme',"black");
  meta("black");
  checkBox.checked = true;
}
checkBox.onchange = function() {
  if (this.checked) {
    window.localStorage.setItem('data-theme',"black");
    meta("black");
  } else {
    window.localStorage.setItem('data-theme',"white");
    meta("white");
  }
}
