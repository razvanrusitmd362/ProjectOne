function init() {

var button = document.getElementById("input"); /* what I click */

var fname = document.getElementById("first_name_field"); /* where I type*/

var lname = document.getElementById("last_name_field"); /* where I type*/

var email = document.getElementById("email_field"); /* where I type*/

button.addEventListener("click", function() {
  alert ("Thank you! You will be contacted with more information about your inquiry");
});
}
window.addEventListener('load', init);
