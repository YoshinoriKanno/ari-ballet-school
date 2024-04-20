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
      duration: 1,   // アニメーションの持続時間
      delay: index * 0.1, // 各文字のアニメーション開始タイミングをずらす
      ease: "power1.out" // イージング関数
    });
  });
  // / Hero のロゴのアニメーション ==============================
  // Hero アニメーション ==============================
  // GSAPのタイムラインを作成
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.p-hero', // トリガーとなる要素（.p-hero）
      scrub: true, // スクロールに応じてアニメーション
      pin: true, // トリガー要素を固定
      pinSpacing: false, // 固定時のスペーシングを無効
      start: 'top top', // トリガーの開始条件
      markers: true, // 開発用のマーカー表示（本番では削除推奨）
    }
  });

  // タイムラインにアニメーションを追加
  timeline.fromTo('.p-hero', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' // 初期状態
  }, {
    clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', // 最終状態
    duration: 1, // アニメーションの持続時間
    ease: "none" // アニメーションのイージング設定（一定速度）
  });
  // / Hero アニメーション ==============================

});
