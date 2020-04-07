var mydate = new Date()
var year = mydate.getYear()

if (year < 1000)
    year += 1900

var day = mydate.getDay() // Current Day of week - 2
var month = mydate.getMonth() // Current Month 2
var daym = mydate.getDate() // Current Date -24
var h = mydate.getHours(); //Hours
var m = mydate.getMinutes(); //Minutes
var s = mydate.getSeconds(); //Seconds
m = checkTime(m);
s = checkTime(s);

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday")
var montharray = new Array("January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December")

document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + dayarray[day] + ", " + montharray[month] + " " + daym + ", " + year;



var t = setTimeout(function() { startTime() }, 500);
//This will update time