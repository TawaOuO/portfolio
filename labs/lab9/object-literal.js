// Set up the object 

var hotel = {
  name : 'a',
  rooms : 40,
  booked : 25,
  logo : document.write('<img src="flower.svg" onload=this.width=400>'),
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};

var hotel2 = new Object()
  
  hotel2.name = 'b';
  hotel2.rooms = 120;
  hotel2.booked = 77;
  hotel2.logo = document.write('<img src="flower2.svg" onload=this.width=400>');
  hotel2.checkAvailability = function() {
    return this.rooms - this.booked; // Need "this" because inside function
 };


// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name + ' ' + hotel2.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability() + ' , ' + hotel2.checkAvailability();   // Update HTML with property of the object

document.getElementById('hotelLogo');
elName.textContent = hotel.logo + hotel2.logo;
/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/

