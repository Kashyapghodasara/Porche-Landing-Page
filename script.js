let maldives = document.getElementsById("maldives");
let pink = document.getElementsById("pinkmotel");
let gray = document.getElementsById("grayclub");
let mermaid = document.getElementsById("mermaid");



function thememaldives() {
  document.body.style.background = "linear-gradient(to right, #c3defd 0%, #c3defd 50%, #266bb4 50%, #266bb4 100%)";
  document.querySelectorAll('.img').forEach(function(element) {
    element.setAttribute('hidden', true);
  });
  document.querySelector('.img1').removeAttribute('hidden');

}
function themepink() {
  document.body.style.background = "linear-gradient(to right, #fe9d97 0%, #fe9d97 50%, #ed6474 50%, #ed6474 100%)";
  document.body.style.transition = "background-color 1s ease";
  document.querySelectorAll('.img').forEach(function(element) {
    element.setAttribute('hidden', true);
  });
  document.querySelector('.img2').removeAttribute('hidden');

}
function themegray() {
  document.body.style.background = "linear-gradient(to right, #ccd0cf 0%, #ccd0cf 50%, #717B7D 50%, #717B7D 100%)";
  document.querySelectorAll('.img').forEach(function(element) {
    element.setAttribute('hidden', true);
  });
  document.querySelector('.img3').removeAttribute('hidden');

}
function thememermaid() {
  document.body.style.background = "linear-gradient(to right, #88cca5 0%, #88cca5 50%, #0d6c7e 50%, #0d6c7e 100%)";
  document.querySelectorAll('.img').forEach(function(element) {
    element.setAttribute('hidden', true);
  });
  document.querySelector('.img4').removeAttribute('hidden');

}