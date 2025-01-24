const gameBoard = document.querySelector(".div-game-board");

const flipCard = function () {
    const parentClass = this.classList[1];
    const innerDiv = document.querySelector(`.${parentClass} .div-card-container-inner`);
    innerDiv.classList.toggle("flip-card");
};

const generateGameBoard = async function () {
    const response = await fetch("assets/json/countries.json");
    if (!response.ok) return;

    const countries = await response.json();
    const countryCards = shuffleArray([...countries, ...countries]);

    let cardID = 1;
    for (const obj of countryCards) {
        const [[key, { id, name }]] = Object.entries(obj);

        const card = `
            <div class="div-card-container card-${cardID++}" data-card-id="${id}">
                <div class="div-card-container-inner">
                    <div class="div-card-front">&nbsp;</div>
                    <div class="div-card-back">
                        <img src="https://flagsapi.com/${key}/flat/32.png" alt="${name} Flag">
                    </div>
                </div>
            </div>
        `;

        gameBoard.insertAdjacentHTML("beforeend", card);
        document.querySelectorAll(".div-card-container").forEach((div) => {
            div.addEventListener("click", flipCard);
        });
    }
};

const shuffleArray = function (array) {
    return array.sort(() => Math.random() - 0.5);
};

generateGameBoard();
