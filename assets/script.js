// setting the current date of the formatting
var today = moment();

$("#currentDay").text(today.format('MMM Do, YYYY'));

// creating timeblocks
var hour = moment().hour()
if(hour > 12){
    var thour = hour-12;
}
else{
    var thour = hour;
}
console.log(thour)


function timeblockhour(timeblock,id){

if(thour != timeblock) {
    if(thour > timeblock && thour > 6 && timeblock >= 9){
    id.addClass('past');
}

else if(thour > timeblock && timeblock < 6 && thour < 6){
id.addClass('past')
}

else if(thour < timeblock && timeblock > 8 && thour < 6){
    id.addClass('past')
}

else if(thour > timeblock && timeblock < 6 && thour > 8){
    id.addClass('future')
}

else if(thour < timeblock && timeblock < 6 && thour < 6){
    id.addClass('future')
}

else if(thour < timeblock && thour > 6 && timeblock >= 9){
    id.addClass('future')
}
}
else if (thour = timeblock){

    id.addClass('present')
}
}




var st1 = $("#9")
timeblockhour(st1.attr("id"),st1)
var st2 = $('#10')
timeblockhour(st2.attr("id"),st2)
var st3 = $('#11')
timeblockhour(st3.attr("id"),st3)
var st4 = $('#12')
timeblockhour(st4.attr("id"),st4)
var st5 = $('#1')
timeblockhour(st5.attr("id"),st5)
var st6 = $('#2')
timeblockhour(st6.attr("id"),st6)
var st7 = $('#3')
timeblockhour(st7.attr("id"),st7)
var st8 = $('#4')
timeblockhour(st8.attr("id"),st8)
var st9 = $("#5")
timeblockhour(st9.attr("id"),st9)






// var st3 = $('#11')
// timeblockhour(st3)
// var st4 = $('#12')
// timeblockhour(st4)
// var st5 = $('#1')
// timeblockhour(st5)

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

