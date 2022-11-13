// setting the current date of the formatting
var today = moment();

$("#currentDay").text(today.format('MMM Do, YYYY'));

// creating timeblocks
var startTime = moment("9:00 am", "hh:mm a");
var endTime =  moment("5:00 pm", "hh:mm A");
console.log(startTime);
console.log(endTime);

for(var i = 0; i < 1; i++){
// create and append time blocks
// append text and create the time blocks
startTime.format("LLL")


}