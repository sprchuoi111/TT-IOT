//------------- Tab Content main ----------------
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
nhietdo=document.getElementById("nhietdo");
//-------- Circle slider --------
function initial_CircleSlider_01(data){
    $("#CircleSliderId-01").roundSlider({
      radius: 90,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: 23,
      readOnly:false,
      max :100,
      svgMode:true,
      tooltipFormat: "checktem"
  });
  };
  function initial_CircleSlider_02(data){
    $("#CircleSliderId-02").roundSlider({
      radius: 90,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: 23,
      readOnly:false,
      max :100,
      svgMode:true,
      tooltipFormat: "checktem"
  });
  };
initial_CircleSlider_01(20);

// ------------------ Check temp-------------
function checktem(h)
{ temp = "&#8451;";
  var  val =h.value,speed;
  if (val < 20) speed = "Too Cold";
  else if (val < 34) speed = "Normal";
  else if (val <40 ) speed = "Hot";
  else speed = "Dangerous";
  return val + "<span>" + temp +"</span>"+ "<div>" + speed + "<div>";
}
// var iconElement = document.getElementById('icon');
 button_off=document.getElementsByClassName("slider");
// var image = document.getElementById("airconditioner"), 
//     button = document.getElementById("pause");

// --------  Stop Fan button --------
// button_off.onclick=function() {
//   if(className=="fanrotate") {
//     div.className = "fanrotate-stop";
//   }
//   else{
//     div.className = "fanrotate";
//   }
//  };
// // add active 

// ---------- Slider Ngang -----------
var SliderNgang = document.getElementById("slider2");
SliderNgang.oninput = function(){
  document.getElementById("Value").innerHTML = SliderNgang.value;
  console.log("test");
} ;
//  ------ active toggle-------
function myfunc(div) {
  var className = div.getAttribute("class");
  if(className=="fanrotate-stop") {
    div.className = "fanrotate-stop";
  }
  else{
    div.className = "fanrotate";
  }
};