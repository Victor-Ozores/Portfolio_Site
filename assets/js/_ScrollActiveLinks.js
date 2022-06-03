// SCROLL SECTIONS ACTIVE LINK

function ScrollActiveLinks() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active');
    }
  });
}
window.addEventListener('scroll', ScrollActiveLinks);

export default ScrollActiveLinks;
