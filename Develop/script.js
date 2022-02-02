//get current hour, current day of week, and current date
var hour = moment().format("H");
console.log(hour);
var dayOfWeek = moment().format("dddd");
var date = moment().format("MMMM Do YYYY");
console.log(dayOfWeek);
console.log(date);

//set date for html
$("#currentDay")[0].textContent = dayOfWeek + ", " + date;
console.log($("#currentDay"))



// load page
$(function() {
    var time;
    //save data on save click
    $(".saveBtn").on("click", function() {
         //grab the time based off of ID
         time = $(this).parent().attr("id")
        console.log(time)
        //grab the value based off of description class
        var description = $(this).siblings(".description").val()
        console.log(description)
       //add to local storage
         localStorage.setItem(time, description);
    })
});


//get time blocks from local storage
var am9 = localStorage.getItem("9am");
var am10 = localStorage.getItem("10am");
var am11 = localStorage.getItem("11am");
var pm12 = localStorage.getItem("12pm");
var pm1 = localStorage.getItem("1pm");
var pm2 = localStorage.getItem("2pm");

//set data from local storage to display on html page
$("#9am .description").val(am9);
$("#10am .description").val(am10);
$("#11am .description").val(am11);
$("#12pm .description").val(pm12);
$("#1pm .description").val(pm1);
$("#2pm .description").val(pm2);

//set background color
$(".description").each(function (){
    var timeEl = $(this).data("id");
    console.log(timeEl)
    //check and assign for past
    if (timeEl < parseInt(hour)){  
        console.log(timeEl + " is in the past");
        $(this).addClass("past")
    }
    //check assign for present
    else if(timeEl === parseInt(hour)){
        console.log($(this).data("id") + " is now");
        $(this).addClass("present")
    }
    //check and assign for future
    else {
        console.log($(this).data("id") + " is in the future");
        $(this).addClass("future")
    }

});