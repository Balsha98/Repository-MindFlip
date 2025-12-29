import { getJSON, shuffle } from "./helpers/helper.js";

class Model {
    _state = {
        flips: [],
        numFlips: 0,
        cards: [],
    };

    async loadGameCards(numPairs) {
        const cards = await getJSON(numPairs);
        this._state.cards = shuffle([...cards, ...cards]);
    }

    getStateValue(key) {
        return this._state[key];
    }

    setStateValue(key, value) {
        this._state[key] = value;
    }
}

export default new Model();
