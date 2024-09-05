window.addEventListener("load", start);

let randomNum;
let guessNum = 1;

function start() {
    document.querySelector("#start").addEventListener("click", () => {
        output(`is it ${randomNum}`);
    });
    document.querySelector("#correct").addEventListener("click", correct);
    document.querySelector("#higher").addEventListener("click", higher);
    document.querySelector("#lower").addEventListener("click", lower);
    randomNum = guess();
}

const values = [...Array.from({ length: 100 }, (_, i) => i + 1)];

function guess() {
    return Math.floor(Math.random() * 100) + 1;
}

function correct() {
    output(`it took ${guessNum} guesses`);
}

function higher() {
    guessNum++;
    randomNum = guess();
    output(`Is it ${randomNum}`);
}

function lower() {
    guessNum++;
    randomNum = guess();
    output(`Is it ${randomNum}`);
}

function output(text) {
    document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}
