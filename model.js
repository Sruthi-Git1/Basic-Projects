
document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close');
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
