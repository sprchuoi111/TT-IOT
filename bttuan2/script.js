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
const btn = document.getElementById("expand");
const header = document.getElementById("header");
btn.addEventListener('change',function(){
  if(this.checked)
  {
    // 👇️ hide button (still takes up space on page)
    header.id = header.id.replace("header","header_roll");
    console.log("hidden");
// 👇️ show div
  }
  else
  {a
  header.id = header.id.replace("header_roll","header");
    console.log("hidden");
  }
});

nhietdo=document.getElementById("nhietdo");
//-------- Circle slider --------
var temp_lr=21;
var temp_br=21;
function initial_CircleSlider_01(temp_lr){
    $("#CircleSliderId-01").roundSlider({
      radius: 80,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: temp_lr,
      readOnly:true,
      max :60,
      svgMode:true,
      startAngle: 315,
      circleShape: "pie",
      tooltipFormat: "checktem",
      rangeColor: "black",
      pathColor: "white ",
      borderColor: "black",
      lineCap: "round",
  });
  };
function initial_CircleSlider_02(temp_br){
    $("#CircleSliderId-02").roundSlider({
      radius: 80,
      width: 20,
      circleShape: "pie",
      handleSize: "+10",
      sliderType: "min-range",
      value: 23,  
      readOnly:true,
      max :100,
      startAngle: 315,

      svgMode:true,
      tooltipFormat: "checktem",
      rangeColor: "rgb(22 6 247 / 51%) 0px 5px 55px",
      pathColor: "rgb(22 6 247 / 51%) 0px 5px 55px",
      borderColor: "black",
      lineCap: "round"
  });
  };
  function initial_CircleSlider_03(data){
    $("#CircleSliderId-03").roundSlider({
      radius: 80,
      width: 20,
      handleSize: "+10",
      sliderType: "min-range",
      value: 20,
      readOnly:true,
      max :60,
      svgMode:true,
      startAngle: 315,
      circleShape: "half-top",
      tooltipFormat: "checktem",
      rangeColor: "black",
      pathColor: "white ",
      borderColor: "black"
  });
  };
initial_CircleSlider_03(30);
// ------------------ Check temp-------------
function checktem(h)
{ temp = "&#8451;";
  tem_nomal="fa-solid fa-temperature-quarter";
  tem_half="fa-solid fa-temperature-half";
  tem_threequarters="fa-solid fa-temperature-three-quarters";
  tem_high="fa-solid fa-temperature-high";
  
  var  val =h.value,speed,tem_st;
  if (val < 20) 
  {
    tem_st=tem_nomal;
    speed = "Too Cold";
  }
  else if (val < 34) 
  {
    tem_st=tem_half;
    speed = "Normal";
  }
  else if (val <40 ) 
  {
    tem_st=tem_threequarters;
    speed = "Hot";
  }
  else 
  {
    tem_st=tem_high;
    speed = "Dangerous";
  }
  return "<h2>"+val+ "<span>" + temp +"</span>"+ "</h2>" + "<div>"+"<i class="+tem_st+">"+"<i>" + speed + "<div>";
}
function checkgas(h)
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


$(document).ready(function() {
  $('#iconbell').click(function() {
    $(this).find('.fa-bell,.fa-bell-slash').toggleClass('fa-bell').toggleClass('fa-bell-slash');
  });
});
$(document).ready(function() {
  $('#iconlock').click(function() {
    $(this).find('.fa-unlock,.fa-house-lock').toggleClass('fa-unlock').toggleClass('fa-house-lock');
  });
});
// var background_volume=document.getElementsByClassName("fa-volume-high");
// var switch_volume=document.getElementById("volume");
// switch_volume.addEventListener("change",function(){
//   if(this.checked)
//   {
//     document.getElementById("iconvolume").style.color="yellow";
//     document.getElementById("iconvolume").style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 3px 2px 0px, rgb(255 0 43) 3px 0px 3px";
//     console.log("Volume ON");
//     firebase.database().ref("/Phong_Khach").update({
//       "Lock": "ON"})
//   }
//   else {

//     document.getElementById("iconvolume").style.color="black";
//     document.getElementById("iconvolume").style.textShadow="";


//   console.log("Lock OFF");
//   firebase.database().ref("/Phong_Khach").update({
//     "Lock": "OFF"})
//   }
// });
$(document).ready(function() {
  $('#iconvolume').click(function() {
    $(this).find('.fa-volume-high,.fa-volume-low').toggleClass('fa-volume-high').toggleClass('fa-volume-low');
  });
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
firebase.database().ref("/Phong_Khach/CO2").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("CO2-val").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Phong_Khach/Do_Am").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("humi-val").innerHTML = nd;
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
  SliderNgang_lr.value=nd;
  console.log(nd);
});
// Auto load device

firebase.database().ref("/Phong_Khach").on("value",function(snapshot){
  if(snapshot.exists()){
    console.log(snapshot.val())
    var lock_lr_status = snapshot.val()
    if (lock_lr_status["Lock"] == "ON")
      {
        document.getElementById("iconlock").style.color="yellow";
        document.getElementById("iconlock").style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 3px 2px 0px, rgb(255 0 43) 3px 0px 3px";
        console.log("Lock ON");
        background_lock.checked = true;
    }
    else
    {
      document.getElementById("iconlock").style.color="black";
      document.getElementById("iconlock").style.textShadow="";
       console.log("Lock OFF");
       background_lock.checked = false;
    }
  }
  else
    console.log("No data available!");
});
// Auto load switch

// firebase.database().ref("/Phong_Khach/DoAm").on("value",function(snapshot){
//   var nd = snapshot.val();  
//   document.getElementById("DoAm").innerHTML = nd;
//   console.log(nd);
// });

// Update status when reload 
//  -----------------Bedroom-------------------
firebase.database().ref("/Phong_Ngu").on("value",function(snapshot){
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
firebase.database().ref("/Phong_Ngu").on("value",function(snapshot) {
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
firebase.database().ref("/Phong_Ngu").on("value",function(snapshot) {
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
firebase.database().ref("/Phong_Ngu").on("value",function(snapshot){
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
// ---------- Slider Ngang -----------
var val_air_br=document.getElementById("Value-air-br")
var SliderNgang_br = document.getElementById("slider2-br");
SliderNgang_br.oninput = function(){
  document.getElementById("Value-air-br").innerHTML = SliderNgang_br.value;
  firebase.database().ref("/Phong_Ngu").update({
    "Maylanh_temp": SliderNgang_br.value})
} ;
var SliderNgang_lr = document.getElementById("sliderair-lr");
var val_air_lr=document.getElementById("Value-air-lr");
SliderNgang_lr.oninput = function(){
  document.getElementById("Value-air-lr").innerHTML = SliderNgang_lr.value;
  firebase.database().ref("/Phong_Khach").update({
    "Maylanh_temp":SliderNgang_lr.value})
}; 
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

var switch1=document.getElementById("switch-air-lr");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-air-lr").innerHTML="ON";
    SliderNgang_lr.disabled=false;
    firebase.database().ref("/Phong_Khach").update({
      "Maylanh": "ON"})
  }
  else {
  document.getElementById("statusbutton-air-lr").innerHTML="OFF";
  SliderNgang_lr.disabled=true;
  firebase.database().ref("/Phong_Khach").update({
    "Maylanh": "OFF"})
  }
});
// Conditioner bedroom
var sliderngang_br=document.getElementById("slider2-br");
var switch1=document.getElementById("switch-air-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-air-br").innerHTML="ON";
    sliderngang_br.disabled=false;
    firebase.database().ref("/Phong_Ngu").update({
      "Maylanh": "ON"})

  }
  else {
  document.getElementById("statusbutton-air-br").innerHTML="OFF";
  sliderngang_br.disabled=true;
  firebase.database().ref("/Phong_Ngu").update({
    "Maylanh": "OFF"})
  }
});

// TV bedroom
var switch1=document.getElementById("switch-tv-br");
switch1.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("statusbutton-tv-br").innerHTML="ON";
    console.log("On");
    firebase.database().ref("/Phong_Ngu").update({
      "TV": "ON"})
  }
  else {
  document.getElementById("statusbutton-tv-br").innerHTML="OFF";
  firebase.database().ref("/Phong_Ngu").update({
    "TV": "OFF"})
  }
});
var status_fr=document.getElementById("status-rf");
var switch_fr=document.getElementById("switch-fr-kc");
switch_fr.addEventListener("change",function(){
  if(this.checked)
  {  status_fr.id = status_fr.id.replace("status-rf","status-rf-active");
    status_fr.innerHTML="ON";
    sliderngang_br.disabled=false; 
    firebase.database().ref("/Phong_Bep").update({
      "Tu_lanh": "ON"})
  }
  else {
    status_fr.id = status_fr.id.replace("status-rf-active","status-rf");
    status_fr.innerHTML="OFF";
  sliderngang_br.disabled=true;
  firebase.database().ref("/Phong_Bep").update({
    "Tu_lanh": "OFF"})
  }
});
// Connect status
// ---------------Wifi---------------
var background_wifi=document.getElementById("iconwifi");
var switch_wifi=document.getElementById("wifi");
switch_wifi.addEventListener("change",function(){
  if(this.checked)
  { 
    background_wifi.style.color="yellow";
    background_wifi.style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 1px 1px 0px, rgb(255 0 43) 3px 0px 3px";
    console.log("Wifi ON");
    firebase.database().ref("/Phong_Khach").update({
      "Wifi": "ON"})
  }
  else {
    background_wifi.style.color="black";
    background_wifi.style.textShadow="";
  console.log("Wifi OFF");
  firebase.database().ref("/Phong_Khach").update({
    "Wifi": "OFF"})
  }
});
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

var background_lock=document.getElementById("lock");
var switch_lock=document.getElementById("lock");
switch_lock.addEventListener("change",function(){
  if(this.checked)
  {
    document.getElementById("iconlock").style.color="yellow";
    document.getElementById("iconlock").style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 3px 2px 0px, rgb(255 0 43) 3px 0px 3px";
    console.log("Lock ON");
    firebase.database().ref("/Phong_Khach").update({
      "Lock": "ON"})
  }
  else {
    document.getElementById("iconlock").style.color="black";
    document.getElementById("iconlock").style.textShadow="";

  console.log("Lock OFF");
  firebase.database().ref("/Phong_Khach").update({
    "Lock": "OFF"})
  }
});
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
firebase.database().ref("/Phong_Khach").on("value",function(snapshot){
  if(snapshot.exists()){
    console.log(snapshot.val())

    var Air_br_status = snapshot.val()
    if (Air_br_status["Maylanh"] == "ON")
      {
      document.getElementById("statusbutton-air-lr").innerHTML="ON";
      document.getElementById("switch-air-lr").checked = true;
      SliderNgang_lr.disabled=false;
    }
    else
    {
      document.getElementById("statusbutton-air-lr").innerHTML="OFF";
      document.getElementById("switch-air-lr").checked = false;
      SliderNgang_lr.disabled=true;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Khach").on("value",function(snapshot){
  if(snapshot.exists()){
    console.log(snapshot.val())

    var wifi_lr_status = snapshot.val()
    if (wifi_lr_status["Wifi"] == "ON")
      {
        background_wifi.style.color="yellow";
        background_wifi.style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 1px 1px 0px, rgb(255 0 43) 3px 0px 3px";
        console.log("Wifi ON");
      document.getElementById("wifi").checked = true;
    }
    else
    {
      background_wifi.style.color="black";
      background_wifi.style.textShadow="";
      console.log("Wifi OFF");
      background_wifi.checked = false;
    }
  }
  else
    console.log("No data available!");
});
firebase.database().ref("/Phong_Khach").on("value",function(snapshot){
  if(snapshot.exists()){
    console.log(snapshot.val())
    var lock_lr_status = snapshot.val()
    if (lock_lr_status["Lock"] == "ON")
      {
        background_lock.style.color="yellow";
        background_lock.style.textShadow="rgb(128 0 64) 2px 0px 12px, rgb(77 0 38 / 100%) 3px 2px 0px, rgb(255 0 43) 3px 0px 3px";
        console.log("Lock ON");
        background_lock.checked = true;
    }
    else
    {
      background_lock.style.color="black";
      background_lock.style.textShadow="";
       console.log("Lock OFF");
       background_lock.checked = false;
    }
  }
  else
    console.log("No data available!");
});


firebase.database().ref("/Phong_Khach").on("value",function(snapshot) {
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
firebase.database().ref("/Phong_Khach").on("value",function(snapshot){
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
firebase.database().ref("/Phong_Ngu").on("value",function(snapshot) {
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
firebase.database().ref("/Phong_Khach").on("value",function(snapshot) {
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
// --------------------CLOCK----------------
var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  var lastSeconds = last.getSeconds().toString()
  var nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100);
// get calendar
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const d = new Date();
let day = weekday[d.getUTCDay()]; 
document.getElementById("weekday").innerHTML = day;
let date = d.getDate();
document.getElementById("date").innerHTML = date;
let name = month[d.getMonth()];
document.getElementById("month").innerHTML = name;
