let headerPositionY = 0
window.addEventListener("scroll", function () {
    // スクロール量の取得
    let scrollValue = window.pageYOffset;

    // 要素の取得
    let scrollEle = document.querySelectorAll(".works__container");

    // 画面の高さを取得
    let windowHeight = window.innerHeight;

    // はみ出させる値（お好みで設定）
    let value = 300;

    //条件設定
    for (let a = 0; a < scrollEle.length; a++) {
        // 取得した要素のtop値の取得 + スクロール量
        let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
        if (scrollValue > scrollTop - windowHeight + value) {
            scrollEle[a].classList.add("js-fade");
        }
    }

    operateHeader();
});

function operateHeader() {
    //ヘッダー要素格納
    let headerEle = document.querySelector("#header");
    //ヘッダーを切り替えるしきい値 必要に応じて変更
    let HEADTHRE = document.querySelector(".mainArea").clientHeight;
    //スクロール上下でheader 切り替え
    //過去のスクロール量と現在のスクロール量を比較
    if (headerPositionY < window.pageYOffset) {
        headerEle.classList.add("js-headerHide");
    } else {
        headerEle.classList.remove("js-headerHide");
    }
    //現在のスクロール量を保存
    headerPositionY = window.pageYOffset;

    //スクロール量によって背景色
    if (HEADTHRE < window.pageYOffset) {
        headerEle.classList.add("js-scroll");
    } else {
        headerEle.classList.remove("js-scroll");
    }
}