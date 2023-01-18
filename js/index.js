window.addEventListener("scroll", function () {
    // スクロール量の取得
    let scrollValue = window.pageYOffset;

    // 要素の取得
    let scrollEle = document.querySelectorAll(".works__container");

    // 画面の高さを取得
    let windowHeight = window.innerHeight;

    // はみ出させる値（お好みで設定）
    let value = 300;

    // 条件設定
    for (let a = 0; a < scrollEle.length; a++) {
        // 取得した要素のtop値の取得 + スクロール量
        let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
        if (scrollValue > scrollTop - windowHeight + value) {
            scrollEle[a].classList.add("js-fade");
        }
    }
});