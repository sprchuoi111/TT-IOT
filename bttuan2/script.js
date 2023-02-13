
function openroom(evt, RoomName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(RoomName).style.display = "block";
  evt.currentTarget.className += " active";
};  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function initial_CircleSlider_01(data){
    $("#CircleSliderId-01").roundSlider({
      radius: 90,
      width: 10,
      handleSize: "+10",
      sliderType: "range",
      value: "0,60",
      readOnly:false,
      max :100,
      svgMode:true,
      change: function (args) {
      var obj = $("#CircleSliderId-01").data("roundSlider");
      $('#ircleSliderId-02').roundSlider('setValue',obj.getValue());
    }
  });
  };
  initial_CircleSlider_01(50);
var iconElement = document.getElementById('icon');
var options = {
    from: 'fa-bed',
    to: 'fa-arrow-right',
    animation: 'zoomOut'
};

iconate(iconElement, options);