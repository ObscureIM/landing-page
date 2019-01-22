const localData = {}

if (typeof google !== 'undefined') {
  google.charts.load('current', {
    packages: ['corechart']
  })
}

$(document).ready(function () {

  updateTime();

  $('#searchButton').click(function () {
    searchForTerm($('#searchValue').val())
  })

  $('#receiveButton').click(function () {
    receive($('#receiverAddress').val())
  })

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
})

function updateTime() {
  // Set the date we're counting down to
var countDownDate = new Date("Feb 15, 2019 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("miningTime").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("miningTime").innerHTML = "EXPIRED";
  }
}, 1000);
}


function popUp(error) {
  window.alert(error.responseText)
}

function secondsToHumanReadable(seconds) {
  var days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  var hrs = Math.floor(seconds / 3600);
  seconds -= hrs * 3600;
  var mnts = Math.floor(seconds / 60);
  seconds -= mnts * 60;

  return {
    days: days,
    hours: hrs,
    minutes: mnts,
    seconds: seconds
  }
}
