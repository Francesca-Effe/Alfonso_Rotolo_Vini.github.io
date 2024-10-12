
/* mobile menu */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        console.log('Hamburger button clicked!'); 
        mobileMenu.classList.toggle('active');
    });
});



/* carousel */

// Select all carousel instances
const carousels = document.querySelectorAll('.slider-wrapper');

// Iterate over each carousel instance
carousels.forEach(carousel => {
  const slider = carousel.querySelector('.slider');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');
  
  const imageWidth = slider.querySelector('img').offsetWidth;

  // Event listener for "next" button
  nextBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: imageWidth,
      behavior: 'smooth'
    });
  });

  // Event listener for "prev" button
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: -imageWidth,
      behavior: 'smooth'
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  // Select all carousels
  const carousels = document.querySelectorAll(".slider-background");

  // Loop through each carousel to initialize them separately
  carousels.forEach((carousel) => {
    const slider = carousel.querySelector(".slider");
    const images = slider.querySelectorAll("img");

    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");
    let currentImgIndex = 0;


    // Function to show the previous video
    function showPrevImg() {
      if (currentImgIndex > 0) {
        currentImgIndex--;
        slider.scrollTo({
          left: images[currentImgIndex].offsetLeft,
          behavior: "smooth"
        });
        updateDescription(currentImgIndex);
      }
    }

    // Function to show the next video
    function showNextImg() {
      if (currentImgIndex < images.length - 1) {
        currentImgIndex++;
        slider.scrollTo({
          left: images[currentImgIndex].offsetLeft,
          behavior: "smooth"
        });
        updateDescription(currentImgIndex);
      }
    }

    // Event listeners for buttons
    prevBtn.addEventListener("click", showPrevImg);
    nextBtn.addEventListener("click", showNextImg);


  });
});


/* copyright */

const year= new Date().getFullYear();

document.getElementById('year').textContent = year;