//    <!-- Mobile Menu Icon -->
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('mobileSidebar');
const closeBtn = document.getElementById('closeSidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});


// Animation
const texts = ["Web Developer","React Specialist", "Frontend Designer", "JavaScript Developer","UI/UX Enthusiast"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500); // Pause before next word
    } else {
      setTimeout(type, 100);
    }
  }

  type();