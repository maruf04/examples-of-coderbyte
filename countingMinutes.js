// Counting Minutes
// Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
// Examples
// Input: "12:30pm-12:00am"
// Output: 690
// Input: "1:23am-1:08am"
// Output: 1425


//kotu bir kod

function CountingMinutes(str) {
    var time = str.match(/(\d+)\:(\d+)(\w+)-(\d+)\:(\d+)(\w+)/);

    var timeOneHours = parseInt(time[1] * 60);
    var timeOneMin = parseInt(time[2]);
    var timeTwoHours = parseInt(time[4] * 60);
    var timeTwoMin = parseInt(time[5]);

    //ikisi aynı ise
    if (time[6] === time[3]) {
        if (time[1] < time[4]) {
            return (timeTwoHours - timeOneHours) + (timeTwoMin - timeOneMin)
        } else if (time[1] > time[4]) {
            timeTwoHours += 720;
            return (timeTwoHours - timeOneHours) + (timeTwoMin - timeOneMin);
        } else if (time[1] == time[4] && time[2] > time[5]) {
            timeTwoHours += 1440;
            return (timeTwoHours - timeOneHours) - ((timeTwoMin + 30) - timeOneMin);
        }
    }
    if (time[3] == "pm" && time[6] == "am") {
        timeTwoHours += 720;
        return ((timeTwoHours - timeOneHours) - (timeTwoMin - timeOneMin)) - 60
    }

}

// keep this function call here 
console.log(CountingMinutes(readline()));