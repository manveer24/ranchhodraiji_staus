let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
  // Unmute the audio after a short delay (e.g., 1000 milliseconds or 1 second)
  setTimeout(function () {
    document.getElementById('backgroundAudio').muted = false;
  }, 1000); // Specify the time to wait in milliseconds
});

