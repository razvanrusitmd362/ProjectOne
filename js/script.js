
window.addEventListener('load', function init()) {

  var button = document.getElementById("submit");

  var fname =  document.getElementById("first_name_field");

  var lname = document.getElementById("last_name_field");

  button.onclick("click", function() {
    alert (fname.value + lname.value + "Thank you for your intrest in adopting a pet! We will reach out to you as soon as one of our representatives reviews your application!");
  }
}


/*
document.getElementClassName("submit").addEventListener("click", myFunction);

function myFunction() {
  document.getElementByClassBane("submit").innerHTML = "YOU CLICKED ME!";
}
*/
