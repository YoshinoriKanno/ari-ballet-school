document.addEventListener('DOMContentLoaded', (event) => {
  // 画像のパララックス ==============================
  const targets = document.querySelectorAll('.gsap-paralax-image');
  const valParallax = 60;
  targets.forEach((target) => {
    gsap.set(target.querySelector('img'), {
      height: `calc(100% + ${valParallax}px)`,
    });
    gsap.fromTo(
      target.querySelector('img'),
      {
        y: valParallax,
      },
      {
        y: -valParallax, // y方向-に120px移動させる
        ease: 'none', // イージングなし
        scrollTrigger: {
          trigger: target, // ScrollTriggerの開始位置を計算するために使用される要素
          start: 'top bottom', // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
          end: 'bottom top', // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
          scrub: 1, // 要素を1秒遅れで追従させる
          // markers: true, // 開始位置、終了位置を調整確認する際に使用します
        },
      }
    );
  });
});
