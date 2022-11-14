// setting the current date of the formatting
var today = moment();

$("#currentDay").text(today.format('MMM Do, YYYY'));

// creating timeblocks





function comparetime(t1,t2){
    if(t1.isBefore(t2)) {
        console.log("hey")
    }
    else {
        console.log("bye bye")
    }

}
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

