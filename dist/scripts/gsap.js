document.addEventListener('DOMContentLoaded', (event) => {
  // 画像のパララックス ==============================
  const targets = document.querySelectorAll('.gsap-paralax-image');
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
