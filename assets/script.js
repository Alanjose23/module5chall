// setting the current date of the formatting
var today = moment();

$("#currentDay").text(today.format('MMM Do, YYYY'));

// creating timeblocks
var sT = moment("9:00 am", "hh:mm a");
$('#9am').text(sT.format("LT"));
sT.add(1,"hours")
$('#10am').text(sT.format("LT"));
sT.add(1,"hours")
$('#11am').text(sT.format("LT"));
sT.add(1,"hours")
$('#12pm').text(sT.format("LT"));
sT.add(1,"hours")
$('#1pm').text(sT.format("LT"));
sT.add(1,"hours")
$('#2pm').text(sT.format("LT"));
sT.add(1,"hours")
$('#3pm').text(sT.format("LT"));
sT.add(1,"hours")
$('#4pm').text(sT.format("LT"));
sT.add(1,"hours")
$('#5pm').text(sT.format("LT"));





// tried to create and append time blocks
// tried to append text and create the time blocks
// console.log(startTime.format("LLL"));
// console.log(startTime.add(1,'hours').format("LLL"));

// $('.container').append('<div class = "row"></div>');
// $(".row").append('<div class = "hour col-1"></div>');
// $(".hour").append('<div class = "time-block"></div>');
// $(".row").append('<textarea class = "description col-9"></textarea>');
// $(".row").append('<button type="button" class = "saveBtn col 2">Click Me!</button>');
// $(".time-block").append("9:00");

// $('.container').append('<div class = "row2"></div>');
// $(".row2").append('<div class = "hour2 col-1"></div>');
// $(".hour2").append('<div class = "time-block2"></div>');
// $(".row2").append('<textarea class = "description2 col-9"></textarea>');
// $(".row2").append('<button type="button" class = "saveBtn2 col 2">Click Me!</button>');
// $(".time-block2").append("9:00");

