{
    const welcome = () => {
        console.log("Welcome to all developers!");
    }
    welcome();

    const select = document.querySelector('.js-charClass');
    const portrait = document.querySelector('.js-portrait');

    select.addEventListener('change', () => {
        const selectedPortrait = select.value;
        switch (selectedPortrait) {
            case 'Warrior':
                portrait.className = 'js-portrait section__portraitWarrior';
                break;
            case 'Bandit':
                portrait.className = 'js-portrait section__portraitBandit';
                break;
            case 'Knight':
                portrait.className = 'js-portrait section__portraitKnight';
                break;
            default:
                portrait.className = 'js-portrait section__portraitWarrriorr';
                break;
        }
    });
}