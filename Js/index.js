$(document).ready(function(){
    $(document).mousemove(function(event){ 
      $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
    });
  });






// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);