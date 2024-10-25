
// navbar.js

document.addEventListener("DOMContentLoaded", () => {
   // Fetch and load the navbar HTML

   fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
         document.querySelector('nav').innerHTML = data;
         
         // Now that the navbar is loaded, add event listeners for hamburger menu functionality

         const hamburgerButton = document.getElementById('hamburger-button');
         const mobileMenu = document.getElementById('mobile-menu');
         
         hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
         });
      })
      .catch(error => console.error('Error loading navbar:', error));
});

