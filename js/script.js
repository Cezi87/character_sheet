
{
    const welcome = () => {
        console.log("Welcome to all developers!");
    }
    welcome();

    const changePortrait = () => {
        const portrait = document.querySelector(".js-portrait")
        const portraitPrev = document.querySelector(".js-portraitPrev");
        const portraitNext = document.querySelector(".js-portraitNext");
        buttonPrev.addEventListener("click", () => {
            // body.classList.toggle("body--light");

            // body.classList.contains("body--light") ? button.innerText = "Przyciemnij tło" : button.innerText = "Rozjaśnij tło";
        });
    }
    changePortrait();
}