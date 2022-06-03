// ANIMATION BAR-SKILLS

function AnimationBarSkills() {
  const counterUp = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        counterUp(el, {
          duration: 4500,
          delay: 100,
        });
      }
    });
  };

  const arr = Array.from(document.querySelectorAll('.counter'));
  arr.forEach((el) => {
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(el);
  });
}

export default AnimationBarSkills;
