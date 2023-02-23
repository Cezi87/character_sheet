
{
    const welcome = () => {
        console.log("Welcome to all developers!");
    }
    welcome();

    const changePortrait = () => {
        const portrait = document.querySelector(".js-portrait")
        const portraitPrev = document.querySelector(".js-portraitPrev");
        const portraitNext = document.querySelector(".js-portraitNext");
        portraitNext.addEventListener("click", () => {
            portrait.classList.add("section__portrait2");
        });
        portraitPrev.addEventListener("click", () => {
            portrait.classList.remove("section__portrait2");
        });
    }
    changePortrait();
}