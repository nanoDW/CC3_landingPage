window.onload = (function () {
    changeBackground();
    UpdateCurrentTime();
})();

function UpdateCurrentTime() {
    var day = new Date().getDate();
    if (day < 10) day = DisplayWithZero(day);
    var month = new Date().getMonth() + 1;
    if (month < 10) month = DisplayWithZero(month);
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    if (hour < 10) hour = DisplayWithZero(hour);
    var minute = new Date().getMinutes();
    if (minute < 10) minute = DisplayWithZero(minute);
    var second = new Date().getSeconds();
    if (second < 10) second = DisplayWithZero(second);
    document.getElementById("clock").innerHTML =
        day +
        "/" +
        month +
        "/" +
        year +
        "  |  " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    setTimeout("UpdateCurrentTime()", 1000);
}

function DisplayWithZero(variable) {
    return "0" + variable;
}

function changeBackground() {
    var now = new Date();
    var hour = now.getHours();
    var pictures = new Array(
        "url(https://c.pxhere.com/photos/9c/56/sunrise_sun_morgenrot_skies_morning_sun_mood_nature_fog-583516.jpg!d)",
        "url(https://learn.zoner.com/wp-content/uploads/2018/06/sunset-in-the-frame.jpg)",
        "url(https://c.pxhere.com/photos/33/70/sunset_beach_landscape_beach_sunset_sea_water_ocean_sky-1051385.jpg!d)",
        "url(https://imgpile.com/images/1d39b2e06ce97dbc55b055c7aa42f4bf.jpg)"
    );
    if (hour > 6 && hour < 12) {
        document.getElementById("greeting").innerHTML = "good morning ";
        document.getElementById("foto").style.backgroundImage = pictures[0];
    } else if (hour > 11 && hour < 18) {
        document.getElementById("greeting").innerHTML = "good afternoon ";
        document.getElementById("foto").style.backgroundImage = pictures[1];
    } else if (hour > 17 && hour < 22) {
        document.getElementById("greeting").innerHTML = "good evening ";
        document.getElementById("foto").style.backgroundImage = pictures[2];
    } else {
        document.getElementById("greeting").innerHTML = "good night ";
        document.getElementById("foto").style.backgroundImage = pictures[3];
    }
    setTimeout("changeBackground()", 1000);
}