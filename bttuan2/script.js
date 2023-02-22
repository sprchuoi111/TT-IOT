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
function openNav() {
  document.getElementById("tabcontrol").style.width = "250px";
  
};


nhietdo=document.getElementById("nhietdo");
//-------- Circle slider --------
var temp_lr=21;
var temp_br=21;
function initial_CircleSlider_01(temp_lr){
    $("#CircleSliderId-01").roundSlider({
      radius: 90,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: temp_lr,
      readOnly:true,
      max :100,
      svgMode:true,
      tooltipFormat: "checktem"
  });
  };
function initial_CircleSlider_02(temp_br){
    $("#CircleSliderId-02").roundSlider({
      radius: 90,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: 23,
      readOnly:true,
      max :100,
      svgMode:true,
      tooltipFormat: "checktem"
  });
  };
initial_CircleSlider_02(20);

// ------------------ Check temp-------------
function checktem(h)
{ temp = "&#8451;";
  var  val =h.value,speed;
  if (val < 20) speed ="Too Cold";
  else if (val < 34) speed = "Normal";
  else if (val <40 ) speed = "Hot";
  else speed = "Dangerous";
  return "<h2>"+val+ "<span>" + temp +"</span>"+ "</h2>" + "<div>" + speed + "<div>";
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
var val_air_br=document.getElementById("Value-air-br")
var SliderNgang_br = document.getElementById("slider2-br");
SliderNgang_br.oninput = function(){
  document.getElementById("Value-air-br").innerHTML = SliderNgang_br.value;
  firebase.database().ref("/Phong_Ngu").update({
    "Maylanh_temp": SliderNgang_br.value})
} ;
var val_air_lr=document.getElementById("Value-air-lr")
var SliderNgang_lr = document.getElementById("slider2-lr");
SliderNgang_lr.oninput = function(){
  document.getElementById("Value-air-lr").innerHTML = SliderNgang_lr.value;
  firebase.database().ref("/Phong_Khach").update({
    "Maylanh_temp":SliderNgang_lr.value})
} ;
//  ------ active toggle-------
function myfunc(div) {
  var className = div.getAttribute("class");
  if(className=="fanrotate") {
    div.className = "fanrotate-stop";
    firebase.database().ref("/Phong_Ngu").update({
      "Quat": "OFF"})
  }
  else{
    div.className = "fanrotate";
    firebase.database().ref("/Phong_Ngu").update({
      "Quat": "ON"})
  }
};
function offFan_lr(div) {
  var className = div.getAttribute("class");
  if(className=="fanrotate") {
    div.className = "fanrotate-stop";
    firebase.database().ref("/Phong_Khach").update({
      "Quat": "OFF"})
  }
  else{
    div.className = "fanrotate";
    firebase.database().ref("/Phong_Khach").update({
      "Quat": "ON"})
  }
};

// ------------button connect-----------

var sliderngang=document.getElementById("slider2-lr");
var switch1=document.getElementById("switch-air-lr");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-air-lr").innerHTML="ON";
    sliderngang.disabled=false;
    firebase.database().ref("/Phong_Khach").update({
      "Maylanh": "ON"})
  }
  else {
  document.getElementById("statusbutton-air-lr").innerHTML="OFF";
  sliderngang.disabled=true;
  firebase.database().ref("/Phong_Khach").update({
    "Maylanh": "OFF"})
  }
});
// Conditioner bedroom
var sliderngang=document.getElementById("slider2-lr");
var switch1=document.getElementById("switch-air-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-air-br").innerHTML="ON";
    sliderngang.disabled=false;
    firebase.database().ref("/Phong_Ngu").update({
      "Maylanh": "ON"})

  }
  else {
  document.getElementById("statusbutton-air-br").innerHTML="OFF";
  sliderngang.disabled=true;
  firebase.database().ref("/Phong_Ngu").update({
    "Maylanh": "OFF"})
  }
});

// TV bedroom
var sliderngang=document.getElementById("slider2-lr");
var switch1=document.getElementById("switch-tv-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-tv-br").innerHTML="ON";
    sliderngang.disabled=false;
    console.log("On");
    firebase.database().ref("/Phong_Ngu").update({
      "TV": "ON"})
  }
  else {
  document.getElementById("statusbutton-tv-br").innerHTML="OFF";
  sliderngang.disabled=true;
  firebase.database().ref("/Phong_Ngu").update({
    "TV": "OFF"})
  }
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvgvxH2-_45zPOSHjJjhRVPUTBgJxB2Xg",
  authDomain: "project1-11612.firebaseapp.com",
  databaseURL: "https://project1-11612-default-rtdb.firebaseio.com",
  projectId: "project1-11612",
  storageBucket: "project1-11612.appspot.com",
  messagingSenderId: "1024826906949",
  appId: "1:1024826906949:web:a0e9cb94bb4a960966862c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Auto load Temperature-------------------------
firebase.database().ref("/Phong_Ngu/Maylanh_temp").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("Value-air-br").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Phong_Khach/nhietdo").on("value",function(snapshot){
  var nd = snapshot.val();  
  temp_lr= nd;
  initial_CircleSlider_01(temp_lr);
  console.log(nd);
});
firebase.database().ref("/Phong_Ngu/nhietdo").on("value",function(snapshot){
  var nd = snapshot.val();
  temp_br=nd;  
  initial_CircleSlider_02(temp_br);
  console.log(nd);
});
firebase.database().ref("/Phong_Khach/Maylanh_temp").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("Value-air-lr").innerHTML = nd;
  console.log(nd);
});
// Auto load switch

// firebase.database().ref("/Phong_Khach/DoAm").on("value",function(snapshot){
//   var nd = snapshot.val();  
//   document.getElementById("DoAm").innerHTML = nd;
//   console.log(nd);
// });
//----- Light Living Room ----
var switch1=document.getElementById("switch-dlight-lr");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    firebase.database().ref("/Phong_Khach").update({
      "Den_Khach": "ON"})
  }
  else {
  firebase.database().ref("/Phong_Khach").update({
    "Den_Khach": "OFF"}) 
  }
});
var switch1=document.getElementById("switch-hlight-lr");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    firebase.database().ref("/Phong_Khach").update({
      "Den_Hien": "ON"})
  }
  else {
  firebase.database().ref("/Phong_Khach").update({
    "Den_Hien": "OFF"})
  }
});

//----- Lights Bed Room ----
var switch1=document.getElementById("switch-den1-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    firebase.database().ref("/Phong_Ngu").update({
      "Den1": "ON"})
  }
  else {
  firebase.database().ref("/Phong_Ngu").update({
    "Den1": "OFF"})
  }
});
var switch1=document.getElementById("switch-den2-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    firebase.database().ref("/Phong_Ngu").update({
      "Den2": "ON"})
  }
  else {
  firebase.database().ref("/Phong_Ngu").update({
    "Den2": "OFF"})
  }
});
// Connect status
// ---------------Wifi---------------
var background_wifi=document.getElementById("iconwifi");
var switch_wifi=document.getElementById("wifi");
switch_wifi.addEventListener("change",function(){
  if(this.checked)
  {
    background_wifi.style.background="#FFC745";
    console.log("Wifi ON");
    firebase.database().ref("/Phong_Khach").update({
      "Wifi": "ON"})
  }
  else {
  background_wifi.style.background="#fff"
  console.log("Wifi OFF");
  firebase.database().ref("/Phong_Khach").update({
    "Wifi": "OFF"})
  }
});
var icon_lock=document.getElementById("iconlock_is");
var background_lock=document.getElementById("iconlock");
var switch_lock=document.getElementById("lock");
switch_lock.addEventListener("change",function(){
  if(this.checked)
  {
    background_lock.style.background="#FFC745";
      icon_lock.style.color="FFC745";
    console.log("Lock ON");
    firebase.database().ref("/Phong_Khach").update({
      "Lock": "ON"})
  }
  else {
  background_lock.style.background="#fff  "
  console.log("Lock OFF");
  firebase.database().ref("/Phong_Khach").update({
    "Lock": "OFF"})
  }
});
// Update status when reload 
//  -----------------Bedroom-------------------
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())
    var TV_br_status = snapshot.val();
    console.log(TV_br_status)
    if (TV_br_status["TV"] == "ON")
      {
     document.getElementById("switch-tv-br").checked = true;
      document.getElementById("statusbutton-tv-br").innerHTML="ON";
      console.log("TV ON")
    }
    else
    {
      document.getElementById("statusbutton-tv-br").innerHTML="OFF";
      document.getElementById("switch-tv-br").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var Air_br_status = snapshot.val()
    if (Air_br_status["Maylanh"] == "ON")
      {
      document.getElementById("statusbutton-air-br").innerHTML="ON";
      document.getElementById("switch-air-br").checked = true;
    }
    else
    {
      document.getElementById("statusbutton-air-br").innerHTML="OFF";
      document.getElementById("switch-air-br").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var Den1_br_status = snapshot.val()
    if (Den1_br_status["Den1"] == "ON")
      {
      document.getElementById("switch-den1-br").checked = true;
    }
    else
    {
      document.getElementById("switch-den1-br").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val());
    var Den2_br_status = snapshot.val()
    if (Den2_br_status["Den2"] == "ON")
      {
      document.getElementById("switch-den2-br").checked = true;
    }
    else
    {
      document.getElementById("switch-den2-br").checked = false;
    }
  }
  else
    console.log("No data available!");
});
//  -----------------Livingroom-------------------
// firebase.database().ref("/Phong_Khach").get().then((snapshot) => {
//   if(snapshot.exists()){
//     console.log(snapshot.val())

//     var TV_lr_status = snapshot.val()
//     if (TV_lr_status["TV"] == "ON")
//       {
//       document.getElementById("statusbutton-tv-lr").innerHTML="ON";
//       document.getElementById("switch-tv-lr").checked = true;
//     }
//     else
//     {
//       document.getElementById("statusbutton-tv-lr").innerHTML="OFF";
//       document.getElementById("switch-tv-lr").checked = false;
//     }
//   }
//   else
//     console.log("No data available!");
// });
var status_fan=document.getElementById("fanrotate");
var switch_fan=document.getElementById("switch-fan");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    status_fan.setAttribute("fanrotate","fanrotate-stop");
    firebase.database().ref("/Phong_Khach").update({
      "Quat": "ON"})
  }
  else {
  status_fan.setAttribute("fanrotate-stop","fanrotate");
  firebase.database().ref("/Phong_Khach").update({
    "Quat": "OFF"})
  }
});
firebase.database().ref("/Phong_Khach").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var Air_br_status = snapshot.val()
    if (Air_br_status["Maylanh"] == "ON")
      {
      document.getElementById("statusbutton-air-lr").innerHTML="ON";
      document.getElementById("switch-air-lr").checked = true;
    }
    else
    {
      document.getElementById("statusbutton-air-lr").innerHTML="OFF";
      document.getElementById("switch-air-lr").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var DenD_lr_status = snapshot.val()
    if (DenD_lr_status["Den_Khach"] == "ON")
      {
      document.getElementById("switch-dlight-lr").checked = true;
    }
    else
    {
      document.getElementById("switch-dlight-lr").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Ngu").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var DenH_lr_status = snapshot.val()
    if (DenH_lr_status["Den_Hien"] == "ON")
      {
      document.getElementById("switch-hlight-lr").checked = true;
    }
    else
    {
      document.getElementById("switch-hlight-lr").checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Khach").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())
    var Fan_lr_status = snapshot.val()
    if (Fan_lr_status["Quat"] == "OFF")
      {
      document.getElementsByClassName("fanrotate").className ="fanrotate-stop";
      console.log("Fan stop");
    }
    else
    { 
      console.log("Fan on");
    }
  }
  else
    console.log("No data available!");
});