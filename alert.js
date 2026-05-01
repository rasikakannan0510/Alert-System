// alert.js

const triggerBtn = document.getElementById("trigger");
const alertBox = document.getElementById("alertBox");
const alarm = document.getElementById("alarm");
const statusText = document.getElementById("status");
const datetime = document.getElementById("datetime");
const liveTime = document.getElementById("liveTime");

function updateClock(){
let now = new Date();
datetime.innerHTML = now.toLocaleString();
}

setInterval(updateClock,1000);
updateClock();

triggerBtn.addEventListener("click", async function(){

alertBox.classList.remove("hidden");

statusText.innerHTML = "Emergency Alert Activated";

alarm.loop = true;

try{
alarm.play().then(() => {
    console.log("Sound playing");
}).catch(error => {
    alert("Click again to enable sound");
});
}catch(error){
alert("Tap again if sound is blocked.");
}

if(navigator.vibrate){
navigator.vibrate([500,200,500,200,500,200,500]);
}

showLiveTime();

});

function showLiveTime(){
let now = new Date();
liveTime.innerHTML = "Alert Time: " + now.toLocaleTimeString();
}

function stopAlert(){

alertBox.classList.add("hidden");

alarm.pause();
alarm.currentTime = 0;

statusText.innerHTML = "System Ready";

if(navigator.vibrate){
navigator.vibrate(0);
}

}