const gameBoard = document.querySelector(".div-game-board");

const generateGameBoard = async function () {
    const response = await fetch("assets/json/countries.json");
    if (!response.ok) return;

    const countries = await response.json();
    const countryCards = [...countries, ...countries];
    for (let i = 0; i < countryCards.length; i++) {
        countryCards.sort(() => Math.random() - 0.5);
    }

    return countryCards;
};

generateGameBoard();
