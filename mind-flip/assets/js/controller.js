import model from "./model.js";
import boardView from "./views/boardView.js";

// ***** FUNCTIONS ***** //
const loadGameBoard = async function () {
    await model.loadGameCards(12);
    boardView.generateGameBoard(model.getStateValue("cards"));
};

const controlFlipCard = function (div) {
    let numFlips = model.getStateValue("numFlips");
    if (numFlips >= 2) return;

    model.getStateValue("flips").push(+div.data("card-id"));
    boardView.flipInnerContainer(div, "add");

    model.setStateValue("numFlips", ++numFlips);

    // Check for match.
    controlMatchCard();
};

const controlMatchCard = function () {
    const flips = model.getStateValue("flips");
    if (flips.length !== 2) return;

    // Match 2 flipped cards.
    boardView.matchTwoCards(flips);

    // In case all the pairs have been found.
    boardView.checkIfGameIsOver(loadGameBoard);

    // Clear the current player turn.
    setTimeout(function () {
        model.setStateValue("flips", []);
        model.setStateValue("numFlips", 0);
    }, 1000);
};

const initController = function () {
    loadGameBoard();

    // Event handlers.
    boardView.addEventFlipCard(controlFlipCard);
};

initController();
