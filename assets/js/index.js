/* Hide header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
}

/* Modal popup */
function openModal (modalId){
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal (modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}