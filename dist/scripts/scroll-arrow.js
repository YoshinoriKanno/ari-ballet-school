const scrollArrow = () => {
  function createScrollArrowElement() {
    const scrollArrowElement = document.createElement('div');
    scrollArrowElement.classList.add('p-scroll-arrow');
    scrollArrowElement.innerHTML = 'Scroll';
    document.body.appendChild(scrollArrowElement);
    document.querySelector('.js-scroll-arrow').appendChild(scrollArrowElement);
    scrollArrowElement.classList.add('is-show');
    return scrollArrowElement;
  }

  // スクロール矢印要素を作成して初期化
  const scrollArrowElement = createScrollArrowElement();

  function hideScrollArrow() {
    scrollArrowElement.classList.remove('is-show');
    scrollArrowElement.classList.add('is-hidden');
  }

  function showScrollArrow() {
    document.body.appendChild(scrollArrowElement);
    // document.getElementById('kv').appendChild(scrollArrowElement);
    setTimeout(() => {
      scrollArrowElement.classList.add('is-show');
    }, 10);
  }

  function handleScroll() {
    if (window.scrollY > 0) {
      hideScrollArrow();
    } else {
      showScrollArrow();
    }
  }

  // ページロード時にスクロール位置をチェック
  document.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY > 0) {
      hideScrollArrow(); // ページがトップでない場合は矢印を隠す
    }
  });

  // スクロールイベントを監視して状態を切り替える
  window.addEventListener('scroll', handleScroll);
};

export default scrollArrow;
