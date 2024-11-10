let currentIndex = 0;
  
const slides = document.querySelectorAll('.carousel-item');
const totalItems = slides.length;

function showSlide(index) {
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Add active class to the current slide
  slides[index].classList.add('active');

  // Update the carousel slide position
  const carouselSlide = document.getElementById("carouselSlide");
  carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
  currentIndex += direction;

  // Looping back to the first/last slide
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
}

// Auto loop through carousel items every 5 seconds
setInterval(() => moveSlide(1), 5000); // Change every 5 seconds