let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar');
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('closed');
  } else {
    navbar.classList.add('closed');
  }
  prevScrollPos = currentScrollPos <= 200 ? 200 : currentScrollPos;
});