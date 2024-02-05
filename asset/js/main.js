var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottieAnimation"), //要放的容器名稱
    renderer: "svg", //
    loop: true, //重複動畫
    autoplay: true, //自動播放
    path: "data.json" //要讀取的json檔案位置
});