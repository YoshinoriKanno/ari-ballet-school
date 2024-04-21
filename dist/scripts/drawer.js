const drawer = () => {
  const menuItems = document.querySelectorAll('.js-menu-item');
  const nav = document.querySelector('.p-nav-full-screen');
  const openDrawer = document.querySelector('.js-toggle-hamburger');

  function showNav() {
    if (!nav || !openDrawer) return;
    nav.classList.add('is-show');
    document.body.classList.add('is-fixed');
    openDrawer.classList.add('is-active');
  }

  function hideNav() {
    if (!nav || !openDrawer) return;
    nav.classList.remove('is-show');
    document.body.classList.remove('is-fixed');
    openDrawer.classList.remove('is-active');
  }
  function toggleNav() {
    if (!nav || !openDrawer) return;

    const isNavVisible = nav.classList.contains('is-show');

    if (isNavVisible) {
      hideNav();
    } else {
      showNav();
    }
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleNav();
    });
  });

  openDrawer.addEventListener('click', () => {
    toggleNav();
  });

  nav.addEventListener('click', () => {
    toggleNav();
  });

  // リサイズ時にナビゲーションを閉じる
  window.addEventListener('resize', () => {
    hideNav();
  });
};

export default drawer;
