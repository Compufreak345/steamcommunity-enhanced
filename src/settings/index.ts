import $ = require("jquery")
console.log("Hi") 
$(document).ready(function(){
    
console.log("Ho");
$("#global_header div.supernav_container").append("<a class='menuitem supernav'>Enhanced</a>");
});

console.log("Hey") 