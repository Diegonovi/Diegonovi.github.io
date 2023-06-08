let slideIndex = 0;
const SlideShow = document.getElementsByClassName("SlideShow")[0];
const slides = ["images/molly-porter-K7oqWgDJQ6E-unsplash.jpg", 
                "images/oladimeji-odunsi-b5gUjS-d8oE-unsplash.jpg" ,
                "images/robert-bye-FGLjt3CZKTM-unsplash.jpg"
               ];

function showSlide(index) {
  SlideShow.style.backgroundImage = `url(${slides[index]})`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Show the initial slide
showSlide(slideIndex);

