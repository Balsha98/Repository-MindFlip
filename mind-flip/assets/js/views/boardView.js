class BoardView {
    _gameBoard = $(".div-game-board");
    _matchedCards = [];
    _allCards = [];

    generateGameBoard(cards) {
        for (const i in cards) {
            const [[key, { id, name }]] = Object.entries(cards[i]);

            const markup = `
                <div class="div-card card-${i + 1}" data-card-id="${id}">
                    <div class="div-card-inner">
                        <div class="div-card-front">&nbsp;</div>
                        <div class="div-card-back">
                            <img 
                                src="https://flagsapi.com/${key}/flat/64.png" 
                                alt="${name} Flag"
                            >
                            <span>${key}</span>
                        </div>
                    </div>
                </div>
            `;

            this._gameBoard.append(markup);
        }

        this._allCards = $(".div-card");
    }

    flipInnerContainer(parent, action) {
        const parentClass = parent.attr("class").split(" ")[1];
        const innerDiv = $(`.${parentClass} .div-card-inner`);

        if (action === "add") {
            innerDiv.addClass("flip-card");
            return;
        }

        setTimeout(function () {
            innerDiv.removeClass("flip-card");
        }, 1000);
    }

    addEventFlipCard(handlerFunction) {
        this._gameBoard.click(function (clickEvent) {
            const card = $(clickEvent.target.closest(".div-card"));

            // Guard clause.
            if (!card) return;

            handlerFunction(card);
        });
    }

    checkIfGameIsOver(loadGameBoard) {
        // Guard clause.
        if (this._matchedCards.length !== this._allCards.length) return;

        this._matchedCards.each((_, div) => {
            this.flipInnerContainer($(div), "remove");
            $(div).removeClass("match");
        });

        setTimeout(function () {
            this._gameBoard.empty();
            loadGameBoard();
        }, 3000);
    }

    _setCardClassMatch(card) {
        card.addClass("match");
        card.off();
    }

    matchTwoCards(flips) {
        const [cardId1, cardId2] = flips;
        if (cardId1 === cardId2) {
            this._allCards.each((_, card) => {
                if (+$(card).data("card-id") === cardId1) this._setCardClassMatch($(card));
            });

            this._matchedCards = $(".match");
        } else {
            this._allCards.each((_, card) => {
                if (!$(card).hasClass("match")) this.flipInnerContainer($(card), "remove");
            });
        }
    }
}

export default new BoardView();
