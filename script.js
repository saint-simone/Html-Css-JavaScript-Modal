'use strict';

// Select the modal, overlay, close button, and all buttons that open the modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal and overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal and overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event listener to each button that opens the modal to call the openModal function
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Add event listener to the close button to call the closeModal function
btnCloseModal.addEventListener('click', closeModal);

// Add event listener to the overlay to call the closeModal function when clicked
overlay.addEventListener('click', closeModal);

// Add event listener to the document to listen for the 'Escape' key press
// If the modal is open and the 'Escape' key is pressed, call the closeModal function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
