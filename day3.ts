// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s: string){
    let hours = s.split(':')[0].toString();
    let minutes = s.split(":")[1].toString();
    let seconds = (s.split(":")[2].slice(0, 2)).toString();
    let timeType = s.split(":")[2].slice(-2).toString();

    if(timeType == "AM" && hours == "12"){
        hours = "00";
    }
    if(timeType == "PM" && Number(hours) < 12 ){
        hours = (Number(hours) + 12).toString();
    }

    return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion("12:01:00PM"));