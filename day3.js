// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
function timeConversionJS(s) {
    var hours = s.split(':')[0].toString();
    var minutes = s.split(":")[1].toString();
    var seconds = (s.split(":")[2].slice(0, 2)).toString();
    var timeType = s.split(":")[2].slice(-2).toString();
    if (timeType == "AM" && hours == "12") {
        hours = "00";
    }
    if (timeType == "PM" && Number(hours) < 12) {
        hours = (Number(hours) + 12).toString();
    }
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
console.log(timeConversionJS("12:01:00AM"));
