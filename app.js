window.addEventListener("load", start);

let randomNum;
let guessNum = 1;

let min = 1;
let max = 100;

function start() {
    document.querySelector("#start").addEventListener("click", () => {
        output(`is it ${randomNum}`);
        document.querySelector("#start").disabled = true;
    });
    document.querySelector("#correct").addEventListener("click", correct);
    document.querySelector("#higher").addEventListener("click", higher);
    document.querySelector("#lower").addEventListener("click", lower);
    randomNum = guess();
}

const values = [...Array.from({ length: 100 }, (_, i) => i + 1)];

function guess() {
    return Math.floor((min + max) / 2);
}

function correct() {
    output(`it took ${guessNum} guesses`);
    document.querySelector("#higher").disabled = true;
    document.querySelector("#lower").disabled = true;
}

function higher() {
    guessNum++;
    min = randomNum + 1;
    checkOption();
}

function lower() {
    guessNum++;
    max = randomNum - 1;
    checkOption();
}

function output(text) {
    document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}

function checkOption() {
    if (min === max) {
        output(`there is only one option left ${min}`);
        document.querySelector("#higher").disabled = true;
        document.querySelector("#lower").disabled = true;
    } else {
        randomNum = guess();
        output(`Is it ${randomNum}?`);
    }
}
