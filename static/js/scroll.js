const teamContainer = document.querySelector('.team-container');
teamContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  teamContainer.scrollLeft += event.deltaY;
});