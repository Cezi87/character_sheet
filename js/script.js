{
    const welcome = () => {
        console.log("Welcome to all developers!");
    };
    welcome();

    // const basicStats = () => {
    //     let charPoolElement = document.querySelector("js-characterPool");
    //     select.addEventListener("change", () => {
    //         const selectedOption = select.value;

    //         // Set the class of the portrait element based on the selected option
    //         charPoolElement 
    //     });
    // };
    // basicStats();

    const portrait = () => {
        const charClassElement = document.querySelector(".js-charClass");
        const portraitElement = document.querySelector(".js-portrait");
        charClassElement.addEventListener("change", () => {
            const selectedPortrait = charClassElement.value;
            switch (selectedPortrait) {
                case "Warrior":
                    portraitElement.className = "section__portraitWarrior";
                    break;
                case "Bandit":
                    portraitElement.className = "section__portraitBandit";
                    break;
                case "Knight":
                    portraitElement.className = "section__portraitKnight";
                    break;
                default:
                    portraitElement.className = "section__portraitWarrior";
                    break;
            }
        });
    };
    portrait();
}