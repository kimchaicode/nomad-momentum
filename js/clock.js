const clock = document.querySelector("#clock h1");

function getClock() {
 const time = new Date();
 const hour = String(time.getHours()).padStart(2, "0");
 const minute = String(time.getMinutes()).padStart(2, "0");

 clock.innerText = `${hour}:${minute}`;
}

getClock();
setInterval(getClock, 1000);
