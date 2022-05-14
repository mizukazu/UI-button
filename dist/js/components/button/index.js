/**
 * button要素を作成する
 * create a button element
 * @param text
 * @param params
 * @returns HTMLButtonElement
 */
const createButton = (text, params) => {
    console.log(text, params);
    const button = document.createElement('button');
    button.classList.add('button');
    if (text) {
        button.innerHTML = text;
    }
    if (params) {
        params.color && button.classList.add(`button-${params.color}`);
        params.rounded && button.classList.add(`button-rounded`);
    }
    return button;
};
var ButtonColors;
(function (ButtonColors) {
    ButtonColors["red"] = "red";
    ButtonColors["yello"] = "yellow";
    ButtonColors["green"] = "green";
    ButtonColors["blue"] = "blue";
    ButtonColors["purple"] = "purple";
    ButtonColors["orange"] = "orange";
})(ButtonColors || (ButtonColors = {}));

export { ButtonColors, createButton };
