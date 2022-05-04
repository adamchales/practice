
function clockTime(){
    let date = new Date();
    let hour = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    var session = "AM";

    if(hour==0){
        hour=12;
    }

    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour<10) ? "0" + hour: hour;
    m = (m<10) ? "0" + m: m;
    s = (s < 10) ? "0" + s : s;

    let time = hour + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText=time;
    document.getElementById("clock").textContent=time;
    setTimeout(clockTime, 1000);
}

clockTime();