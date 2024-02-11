const navbarInit = () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item');
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarContainer = document.querySelector('#navbarSupportedContent');

      navbarToggler.setAttribute('aria-expanded', false);
      navbarContainer.classList.remove('show');
      navbarToggler.classList.add('collapsed');
    });
  });
};

export default navbarInit;
