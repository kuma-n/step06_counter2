(() => {
    const $counter = document.getElementById("js-counter");
    const $buttons = document.getElementsByClassName("js-button");

    const clickHandler = () => {
        $counter.textContent = 0;
        $counter.style.color = "";

        for (let i = 0; i < $buttons.length; i++) {
            $buttons[i].style.backgroundColor = "";
        }
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();