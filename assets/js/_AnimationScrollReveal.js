function AnimationScrollReveal(){

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true,
});

function AnimationBefore (el) {
    el.classList.add('display__on');
}

function AnimationReset (el) {
    el.classList.remove('display__on');
    el.classList.add('display__off');
}

//Origin top
sr.reveal('.about__container__row__first__total__box, .skills__container__row__box__primary',{}); 
sr.reveal('.home__container__row__first__total__box, .home__container__row__second__total__box, .home__container__row__third__total__box', {interval: 400});

//Origin left
sr.reveal('.about__container__row__second__total__box',{origin: 'left'}); 
sr.reveal('.projects__container__row__first__project__box',{origin: 'left',interval: 300});
sr.reveal('.scrollreveal__html, .scrollreveal__css, .scrollreveal__js, .scrollreveal__sass, .scrollreveal__bs',{origin: 'left',interval: 300});
sr.reveal('.html, .css, .js, .sass, .bs',{beforeReveal: AnimationBefore, beforeReset: AnimationReset});
};

export default AnimationScrollReveal;