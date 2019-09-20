function init() {

  var button = document.getElementByTagName("submit");

  var fname =  document.getElementByTagName("first_name_field");

  var lname = document.getElementByTagName("last_name_field");

  button.addEventListener("click", function() {
    alert (fname.value + lname.value + "Thank you for your intrest in adopting a pet! We will reach out to you as soon as one of our representatives reviews your application!");
  })
}
window.addEventListener('load', init);
