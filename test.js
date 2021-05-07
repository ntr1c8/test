var AM_PM
var date = new Date();
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
if (curr_hour < 12)
    {
        AM_PM = "AM";
    }
if (curr_hour == 12)
{
    AM_PM = "PM"
}
if (curr_hour>12)
    {
        AM_PM = "PM"; 
        curr_hour -= 12; 
    }
if (curr_hour <= 9)
    {
        curr_hour = "0" + curr_hour
    } 
if (curr_min <= 9)
   { 
        curr_min = "0" + curr_min;
   }

var curr_day = date.getDay();
var curr_date = date.getDate();
var curr_month = date.getMonth();
if (curr_date <=9)
   {
    curr_date = "0" + curr_date;
   }
var darr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var marr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"];

result = "It is currently: " + curr_hour+ ":" + curr_min +" "+ AM_PM + " on " + darr[curr_day] 
+ ", " + marr[curr_month] + " " + curr_date + "."
result = result.italics()
result = result.bold()
result = result.fontsize(6)
document.write(result)