(() => {
    const $counter = document.getElementById("js-counter");
    const $gameTimeLeft = document.getElementById("js-game-time-left");
    const $buttons = document.getElementsByClassName("js-button");
    const $resetButton = document.getElementById("js-reset-button");
    const $gameRunButton = document.getElementById("js-game-run-button");
    const $gamaPlusButton = document.getElementById("js-game-plus-button");

    const $minusButton = $buttons[0];
    const $plusButton = $buttons[1];

    let timerInterval;

    const clickHandler = () => {
        $counter.textContent = 0;
        $counter.style.color = "";
        $gameTimeLeft.style.display = "";
        $minusButton.style.backgroundColor = "";
        $minusButton.style.display = "none";
        $plusButton.style.backgroundColor = "";
        $plusButton.style.display = "none";
        $resetButton.style.display = "none";
        $gameRunButton.style.display = "none";
        $gamaPlusButton.style.display = "";

        const plusButtonClickHandler = () => {
            let currentCount = parseInt($counter.textContent);
            $counter.textContent = currentCount + 1;
        };

        // ゲームタイマー
        let startGameTime = 10;
        $gameTimeLeft.textContent = `残り時間：${startGameTime}秒`;
        const gameDuration = startGameTime * 1000;
        let timeLeft = gameDuration / 1000;

        window.alert(`${startGameTime}秒間ひたすら＋ボタンをクリックしてね！`)

        timerInterval = setInterval(() => {
            timeLeft -= 1;
            if (timeLeft >= 0) {
                $gameTimeLeft.textContent = `残り時間：${timeLeft}秒`;
            } else {
                clearInterval(timerInterval);
                window.alert(`あなたは${$counter.textContent}回クリックしました！`)

                $counter.textContent = 0;
                $gameTimeLeft.textContent = "";
                $gameTimeLeft.style.display = "none";
                $minusButton.style.display = "";
                $plusButton.style.display = "";
                $resetButton.style.display = "";
                $gameRunButton.style.display = "";
                $gamaPlusButton.style.display = "none";
                $gamaPlusButton.removeEventListener("click", plusButtonClickHandler);
            }
        }, 1000);

        $gamaPlusButton.addEventListener("click", plusButtonClickHandler);
    };

    $gameRunButton.addEventListener("click", clickHandler);
})();