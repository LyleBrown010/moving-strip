document.addEventListener("DOMContentLoaded", function() {
    const stripContainer = document.querySelector(".moving-strip-container");
    const strip = document.querySelector(".moving-strip");
    const stripWidth = strip.offsetWidth;
    const containerWidth = stripContainer.offsetWidth;
    const animationDuration = 20; // in seconds
    const delay = ((stripWidth + containerWidth) / containerWidth) * animationDuration;
  
    strip.style.animationDelay = `${-delay}s`;
  });