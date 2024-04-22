document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // Hero のロゴのアニメーション ==============================

  const paths = document.querySelectorAll('.cls-1');
  paths.forEach((path, index) => {
    // 初期状態を設定
    gsap.set(path, { opacity: 0 });

    // アニメーションを設定
    gsap.to(path, {
      opacity: 0.35, // 目標の不透明度
      duration: 1, // アニメーションの持続時間
      delay: index * 0.1, // 各文字のアニメーション開始タイミングをずらす
      ease: 'power1.out', // イージング関数
    });
  });
  // / Hero のロゴのアニメーション ==============================
  // Hero のスクロールトリミング ==============================
  // GSAPのタイムラインを作成
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.p-hero', // トリガーとなる要素（.p-hero）
      scrub: true, // スクロールに応じてアニメーション
      pin: true, // トリガー要素を固定
      pinSpacing: false, // 固定時のスペーシングを無効
      start: 'top top', // トリガーの開始条件
      // markers: true, // 開発用のマーカー表示（本番では削除推奨）
    },
  });

  // タイムラインにアニメーションを追加
  timeline.fromTo(
    '.p-hero',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // 初期状態
    },
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', // 最終状態
      duration: 1, // アニメーションの持続時間
      ease: 'none', // アニメーションのイージング設定（一定速度）
    }
  );
  // / Hero のスクロールトリミング ==============================
  // Header のスタイル制御 ==============================
  const header = document.querySelector('.p-header-sticky');

  ScrollTrigger.create({
    trigger: header,
    start: 'top top', // .p-header-stickyの上端がビューポートの上端に達したとき
    endTrigger: 'html', // ページの最下部まで
    end: 'bottom bottom', // ページの最下部がビューポートの最下部に達したとき
    // markers: true, // 開発用のマーカー表示（本番では削除推奨）

    onEnter: () => {
      header.style.position = 'fixed';
      header.style.top = '0';
      // header.style.width = '100%'; // 必要に応じて追加
    },
    onLeaveBack: () => {
      header.style.position = 'absolute';
      header.style.top = '';
    },
    // markers: true // 開発時はマーカーを表示して調整、本番環境では削除
  });
  // / Header のスタイル制御 ==============================

  // ナビゲーションリストのアニメーション ==============================
  const navLists = document.querySelectorAll('.p-nav__list');
  navLists.forEach((list, index) => {
    gsap.from(list, {
      opacity: 0, // 開始時の透明度
      x: 100, // 開始時の水平位置（右から左への移動のため正の値を指定）
      duration: 0.5, // アニメーションの持続時間
      delay: index * 0.2, // 各要素のアニメーション開始タイミングをずらす
      ease: 'power1.out', // イージング関数
      scrollTrigger: {
        trigger: list, // トリガーとなる要素（各リスト項目）
        start: 'top 80%', // ビューポートの上端から80%の位置でトリガー
        toggleActions: 'play none none none', // スクロール時のアクション：表示時に再生
      },
    });
  });
  // / ナビゲーションリストのアニメーション ==============================
  // リサイズイベントの処理
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh(); // トリガーとアニメーションを再計算
  });
});
