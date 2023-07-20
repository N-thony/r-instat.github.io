const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const showCards = () => {
  const cards = document.querySelectorAll('.team-card');
  cards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

nextBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.team-card');
  if (currentIndex + 3 < cards.length) {
    currentIndex += 3;
    showCards();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex >= 3) {
    currentIndex -= 3;
    showCards();
  }
});

// Initial display of cards
showCards();
