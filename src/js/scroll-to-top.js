const scrollToTopInit = () => {
  const btn = document.querySelector('.scroll-to-top');

  if (btn) {
    btn.style.display = 'none';
    // eslint-disable-next-line func-names
    window.onscroll = function () {

      if (window.scrollY > 550) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };
    btn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }
};

export default scrollToTopInit;
