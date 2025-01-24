// ***** DOM ELEMENTS ***** //
const gameBoard = document.querySelector(".div-game-board");

// ***** VARIABLES ***** //
const flips = [];
let numFlips = 0;

// ***** FUNCTIONS ***** //
const eventListener = function () {
    flipCard(this);
    matches();
};

const generateGameBoard = async function () {
    const response = await fetch("assets/json/countries-24-pairs.json");

    // Guard clause.
    if (!response.ok) return;

    const countries = await response.json();
    const countryCards = shuffleArray([...countries, ...countries]);

    let cardID = 1;
    for (const obj of countryCards) {
        const [[key, { id, name }]] = Object.entries(obj);

        const card = `
            <div class="div-card card-${cardID++}" data-card-id="${id}">
                <div class="div-card-inner">
                    <div class="div-card-front">&nbsp;</div>
                    <div class="div-card-back">
                        <img src="https://flagsapi.com/${key}/flat/32.png" alt="${name} Flag">
                    </div>
                </div>
            </div>
        `;

        gameBoard.insertAdjacentHTML("beforeend", card);
    }

    document.querySelectorAll(".div-card").forEach((div) => {
        div.addEventListener("click", eventListener);
    });
};

const flipCard = function (div) {
    if (numFlips >= 2) return;

    flips.push(+div.dataset.cardId);
    targetInnerDiv(div.classList[1], "add");

    numFlips++;
};

const matches = function () {
    if (flips.length !== 2) return;

    const [cardId1, cardId2] = flips;
    const cardContainers = document.querySelectorAll(".div-card");
    if (cardId1 === cardId2) {
        cardContainers.forEach((div) => {
            if (+div.dataset.cardId === cardId1) {
                div.removeEventListener("click", eventListener);
                div.classList.add("match");
            }
        });
    } else {
        cardContainers.forEach((div) => {
            if (!div.classList.contains("match")) {
                targetInnerDiv(div.classList[1], "remove");
            }
        });
    }

    setTimeout(function () {
        flips.splice(0);
        numFlips = 0;
    }, 2000);
};

const shuffleArray = function (array) {
    return array.sort(() => Math.random() - 0.5);
};

const targetInnerDiv = function (parent, action) {
    const innerDiv = document.querySelector(`.${parent} .div-card-inner`);
    if (action === "add") {
        innerDiv.classList.add("flip-card");
        return;
    }

    setTimeout(function () {
        innerDiv.classList.remove("flip-card");
    }, 2000);
};

generateGameBoard();
