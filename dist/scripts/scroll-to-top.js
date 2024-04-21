const scrollToTop = () => {
  function createScrollToTopElement() {
    const scrollToTopElement = document.createElement('a');
    scrollToTopElement.href = '#';
    scrollToTopElement.classList.add('p-scroll-to-top');
    scrollToTopElement.classList.add('is-hidden');
    scrollToTopElement.innerHTML = '<span><span>Top</span></span>';
    document.body.appendChild(scrollToTopElement);
    return scrollToTopElement;
  }

  // トップに戻るバッジを作成して初期化
  const scrollArrowElement = createScrollToTopElement();

  function hideScrollToTop() {
    scrollArrowElement.classList.remove('is-show');
    setTimeout(() => {
      scrollArrowElement.classList.add('is-hidden');
    }, 200);
  }

  function showScrollToTop() {
    document.body.appendChild(scrollArrowElement);
    scrollArrowElement.classList.add('is-show');
    setTimeout(() => {
      scrollArrowElement.classList.remove('is-hidden');
    }, 200);
  }

  function handleScroll() {
    if (window.scrollY > 310) {
      showScrollToTop();
    } else {
      hideScrollToTop();
    }
  }
  // スクロールイベントを監視して状態を切り替える
  window.addEventListener('scroll', handleScroll);
};

export default scrollToTop;
