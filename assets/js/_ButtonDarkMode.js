// BUTTON DARK-MODE CONFIGS

function ButtonDarkMode() {
  const button = document.querySelector('.button__theme');
  const DarkButton = document.querySelector('.dark__button i');
  const LightButton = document.querySelector('.light__button i');
  const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
  let userTheme = localStorage.getItem('user-theme');
  
  if(!userTheme){
    userTheme = prefersLightScheme.matches ? 'light' : 'dark';
};

  if (userTheme === 'light') {
    document.body.classList.toggle('light__theme');
    LightButton.classList.toggle('light__mode__off');
    DarkButton.classList.toggle('dark__mode__on');
  }else if (userTheme === 'dark') {
    document.body.classList.toggle('dark__theme');
    DarkButton.classList.toggle('dark__mode__off');
    LightButton.classList.toggle('light__mode__on');
} 

  button.addEventListener('click',() => {
    const isLightTheme = document.body.classList.contains('light__theme');
    localStorage.setItem('user-theme', isLightTheme ? 'dark' : 'light');
    document.body.classList.toggle('light__theme');
    document.body.classList.toggle('dark__theme');
    LightButton.classList.toggle('light__mode__on');
    DarkButton.classList.toggle('dark__mode__on');
    DarkButton.classList.toggle('dark__mode__off');
    LightButton.classList.toggle('light__mode__off');
  });
};

export default ButtonDarkMode;
