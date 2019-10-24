function init() {

var button = document.getElementById("input"); /* what I click */

var fname = document.getElementById("first_name_field"); /* where I type*/

var lname = document.getElementById("last_name_field"); /* where I type*/


button.addEventListener("click", function() {
  alert (fname.value + lname.value);
});
}
window.addEventListener('load', init);
