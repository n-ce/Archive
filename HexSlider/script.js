$("#slider").roundSlider({
  width: 3,
  handleSize: 25,
  radius: 140,
  showTooltip: true,
  min: 0,
  max: 16777215,
  update: function() {
    var x=$("#slider").roundSlider("getValue");
    var y = Number(x).toString(16);
    document.body.style.backgroundColor = document.getElementsByClassName("rs-bg-color")[0].style.backgroundColor = "#"+y;
  }
});