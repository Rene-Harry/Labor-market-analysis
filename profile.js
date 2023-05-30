const profileButton = document.querySelector('.profile');
const card = document.getElementById('profile-card');


// Function to make the card inactive
const makeCardInactive = () => {
    card.classList.remove('active');
  }
// Add event listener to the profile button
profileButton.addEventListener('click', () => {
  card.classList.toggle('active');
});


// Add event listener to the document object
document.addEventListener('click', (event) => {
    // Check if the click is outside of the card element
    if (!card.contains(event.target) && !profileButton.contains(event.target)) {
      makeCardInactive();
    }
});
