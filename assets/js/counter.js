(() => {
    const $counter = document.getElementById("js-counter");
    const $buttons = document.getElementsByClassName("js-button");
    const $gameTimeLeft = document.getElementById("js-game-time-left");
    const $gamaPlusButton = document.getElementById("js-game-plus-button");

    const $minusButton = $buttons[0];
    const $plusButton = $buttons[1];

    // ゲーム関連は非表示
    $gameTimeLeft.style.display = "none";
    $gamaPlusButton.style.display = "none";

    let clickedMinusButton = false;
    let clickedPlusButton = false;

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);

        if ($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
            clickedMinusButton = false;
            clickedPlusButton = true;
        } else {
            $counter.textContent = currentCount - 1;
            clickedMinusButton = true;
            clickedPlusButton = false;
        }

        // 0の時は何も変更しないようにするよ
        let newCount = $counter.textContent;
        if (parseInt(newCount) !== 0 && parseInt(newCount) % 3 === 0) {
            if (clickedPlusButton) {
                $minusButton.style.backgroundColor = "";
                $plusButton.style.backgroundColor = "#B00000";
                $counter.style.color = "#B00000";
            } else {
                $minusButton.style.backgroundColor = "#004CA0";
                $plusButton.style.backgroundColor = "";
                $counter.style.color = "#004CA0";
            }
        } else {
            $minusButton.style.backgroundColor = "";
            $plusButton.style.backgroundColor = "";
            $counter.style.color = "";
        }
    };

    for (let index = 0; index < $buttons.length; index++) {
        $buttons[index].addEventListener("click", (e) => clickHandler(e));
    }
})();