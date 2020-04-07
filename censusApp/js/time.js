/**
 * file : time.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */

// day, date and time in cenuses-header 
var mydate = new Date()
var year = mydate.getYear()

if (year < 1000)
    year += 1900
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var h = mydate.getHours();
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

setTimeout(function() { startTime() }, 500);

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var ampm = h >= 12 ? 'pm' : 'am';

    document.getElementById('spanDate').innerHTML =
        dayarray[day] + ", " + montharray[month] + " " + daym + " " + year + " - " + h + ":" + m + ":" + s + " " + ampm;
    var t = setTimeout(startTime, 500);
}