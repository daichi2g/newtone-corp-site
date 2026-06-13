window.addEventListener('DOMContentLoaded', () => {
    
    // --- 【前回分】セクションの下から上へのフェードイン（ここはそのまま） ---
    const targets = document.querySelectorAll('.home2, .home3, .home4, .home1-news, .home2-2');
    const observerOptions = {
        root: null, rootMargin: '0px 0px -10% 0px', threshold: 0
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    targets.forEach(target => { observer.observe(target); });


    // --- 【今回変更】下スクロールで非表示、上スクロールで表示の制御 ---
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY; // 1つ前のスクロール位置を記憶

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // ページの最上部（スクロールしていない状態）のときは、ヘッダーを普通に表示させておく
        if (currentScrollY <= 0) {
            header.classList.add('is-show');
            return;
        }

        // 現在の位置が前の位置より大きい ＝「下スクロール中」はヘッダーを隠す
        if (currentScrollY > lastScrollY) {
            header.classList.remove('is-show'); // クラスを外して上に隠すにゃ
        } 
        // 現在の位置が前の位置より小さい ＝「上スクロール中」はヘッダーを出す
        else {
            header.classList.add('is-show'); // クラスをつけて上から出すにゃ
        }

        // 次の判定のために現在のスクロール位置を更新
        lastScrollY = currentScrollY;
    });
    
});



