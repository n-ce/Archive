function ui(){
  var theme = document.getElementsByTagName('link')[1];
  if (theme.getAttribute('href') == 'style.css') {
    theme.setAttribute('href', 'style-2.css');                                           }
  else
  {theme.setAttribute('href', 'style.css');}
} 