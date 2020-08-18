// Show/Hide left side menu
function toggleNav() {
  const sideNav = document.getElementById("mySidenav");
  if (sideNav.style.left === "0px") {
    sideNav.style.left = "-300px";
  } else {
    sideNav.style.left = "0px";
  }
}

// Highlight current section in Table of Contents as user scrolls
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});

// Audit Intro
// const playButton = document.querySelector('.play-button');

// function startAnimation() {
//   document.querySelector('.overlay').classList.toggle('remove');
//   document.querySelector('.text-first').classList.toggle('playing');
//   document.querySelector('.text-second').classList.toggle('playing');
//   document.querySelector('.text-third').classList.toggle('playing');
// }

// playButton.addEventListener('click', startAnimation);
