console.log('JavaScript is working!');
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    window.location.href = 'search screen.html';
  }
});


document.querySelector('.fa-microphone').addEventListener('click', () => {
  alert('Voice search coming soon!');
});

document.querySelector('.fa-camera').addEventListener('click', () => {
  alert('Image search coming soon!');
});     