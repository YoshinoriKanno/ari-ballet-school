document.addEventListener('DOMContentLoaded', (event) => {
  // Hero のロゴのアニメーション ==============================
  gsap.registerPlugin(ScrollTrigger);

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
  // 画像のパララックス ==============================
  const valParallax = 60;
  targets.forEach((target) => {
    gsap.set(target.querySelector('.p-hero__image'), {
      height: `calc(100% + ${valParallax}px)`,
    });
    gsap.fromTo(
      target.querySelector('.p-hero__image'),
      {
        y: valParallax,
      },
      {
        y: -valParallax,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  });

  let headerTrigger = null; // ScrollTriggerのインスタンスを保持する変数

  function setupAnimation() {
    // 既存の特定のScrollTriggerインスタンスをクリーンアップ
    if (headerTrigger) {
      headerTrigger.kill();
    }

    // デバイスの幅が768px以上の場合のみアニメーションを設定
    if (window.innerWidth >= 768) {
      gsap.set(".p-header-sticky", { autoAlpha: 0 });

      headerTrigger = gsap.to(".p-header-sticky", {
        scrollTrigger: {
          trigger: "body",
          start: "top+=100",
          end: "top",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.to(".p-header-sticky", { autoAlpha: 1, duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to(".p-header-sticky", { autoAlpha: 0, duration: .5 });
          },
          // markers: true
        }
      });
    } else {
      // 768px未満の場合は要素を常に表示
      gsap.set(".p-header-sticky", { autoAlpha: 1 });
    }
  }

  // 初期設定としてアニメーションセットアップ関数を呼び出す
  setupAnimation();

  // リサイズイベントでアニメーションセットアップを再度実行
  window.addEventListener('resize', setupAnimation);
});
