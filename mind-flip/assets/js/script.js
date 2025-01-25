// ***** DOM ELEMENTS ***** //
const gameBoard = $(".div-game-board");

// ***** VARIABLES ***** //
const flips = [];
let countryCards = [];
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
    countryCards = shuffleArray([...countries, ...countries]);

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

        gameBoard.append(card);
    }

    $(".div-card").each((_, div) => {
        $(div).click(eventListener);
    });
};

const flipCard = function (div) {
    if (numFlips >= 2) return;

    flips.push(+$(div).data("card-id"));
    targetInnerDiv(div, "add");

    numFlips++;
};

const matches = function () {
    // Guard clause.
    if (flips.length !== 2) return;

    const [cardId1, cardId2] = flips;
    const cardDivs = $(".div-card");
    if (cardId1 === cardId2) {
        cardDivs.each((_, div) => {
            const jDiv = $(div);
            if (+jDiv.data("card-id") === cardId1) {
                jDiv.addClass("match");
                jDiv.off();
            }
        });
    } else {
        cardDivs.each((_, div) => {
            if (!$(div).hasClass("match")) {
                targetInnerDiv(div, "remove");
            }
        });
    }

    // In case all the pairs have been found.
    if ($(".match").length === $(".div-card").length) {
        $(".match").each((_, div) => {
            $(div).removeClass("match");
            targetInnerDiv(div, "remove");
        });

        setTimeout(function () {
            gameBoard[0].innerHTML = "";
            generateGameBoard();
        }, 3000);
    }

    setTimeout(function () {
        flips.splice(0);
        numFlips = 0;
    }, 1000);
};

const shuffleArray = function (array) {
    return array.sort(() => Math.random() - 0.5);
};

const targetInnerDiv = function (parent, action) {
    const parentClass = $(parent).attr("class").split(" ")[1];
    const innerDiv = $(`.${parentClass} .div-card-inner`);

    if (action === "add") {
        innerDiv.addClass("flip-card");
        return;
    }

    setTimeout(function () {
        innerDiv.removeClass("flip-card");
    }, 1000);
};

generateGameBoard();
