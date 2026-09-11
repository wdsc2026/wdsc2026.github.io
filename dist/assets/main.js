(() => {
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  const setHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
  };
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  if (navToggle && nav) {
    const closeNav = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    };
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeNav();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) closeNav();
    });
  }

  document.querySelectorAll('[data-print]').forEach(button => {
    button.addEventListener('click', () => window.print());
  });

  const config = window.WDSC_SITE || {};
  document.querySelectorAll('[data-site-text]').forEach(element => {
    const key = element.getAttribute('data-site-text');
    if (key && config[key]) element.textContent = config[key];
  });

  document.querySelectorAll('[data-site-link]').forEach(element => {
    const key = element.getAttribute('data-site-link');
    const url = key ? config[key] : '';
    if (url) {
      element.setAttribute('href', url);
      element.removeAttribute('aria-disabled');
      element.classList.remove('button-disabled');
      element.classList.add('button-primary');
      const readyLabel = element.getAttribute('data-ready-label');
      if (readyLabel) element.textContent = readyLabel;
    } else {
      element.addEventListener('click', event => event.preventDefault());
    }
  });
})();
