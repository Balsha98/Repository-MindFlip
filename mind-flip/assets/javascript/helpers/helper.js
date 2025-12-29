export const getJSON = async function (numPairs) {
    const response = await fetch(`assets/json/countries-${numPairs}-pairs.json`);

    // Guard clause.
    if (!response.ok) return response.ok;

    return await response.json();
};

export const shuffle = function (array) {
    return array.sort(() => Math.random() - 0.5);
};
