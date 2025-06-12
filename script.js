const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
const tiTle = document.querySelector(".title");
let operation = null;

function appendNumber(number) {
    if (number === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerText === "") return;

    if (prevDisplay.innerText !== "") {
        compute();
    }
    
    operation = operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
    operation = null;
}

function compute() {
    if (!operation || prevDisplay.innerText === "" || currDisplay.innerText === "") return;

    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }

    currDisplay.innerText = result;
    prevDisplay.innerText = "";
    operation = null;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click", clearDisplay);

equalBtn.addEventListener("click", compute);

delBtn.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});
function chooseOperation(operand) {
    if (currDisplay.innerText === "") return;

    if (prevDisplay.innerText !== "") {
        compute();
    }

    operation = operand;
    prevDisplay.innerText = currDisplay.innerText + " " + operand; // Show operation in display
    currDisplay.innerText = "";
}
function adjustFontSize() {
    if (currDisplay.innerText.length > 10) {
        currDisplay.style.fontSize = "18px";
    } else {
        currDisplay.style.fontSize = "24px";
    }
}
currDisplay.addEventListener("input", adjustFontSize);
function appendNumber(number) {
    if (currDisplay.innerText.length >= 15) return; // Limit to 30 digits
    currDisplay.innerText += number;
}
