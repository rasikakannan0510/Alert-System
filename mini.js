const triggerBtn = document.getElementById("trigger");
const alertBox = document.getElementById("alertBox");
const alarm = document.getElementById("alarm");

triggerBtn.addEventListener("click", function(){

alertBox.classList.remove("hidden");

alarm.loop = true;
alarm.play();

if(navigator.vibrate){
navigator.vibrate([500,200,500,200,500]);
}

});

function stopAlert(){

alertBox.classList.add("hidden");

alarm.pause();
alarm.currentTime = 0;

}