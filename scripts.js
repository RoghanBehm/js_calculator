let display = document.getElementById("display")

let inp = "";
let inpList = [];
let spli;
let spli1;
let spli2;


function dispInput(select) {
    inp += select;
    inpList = inp.split(" ");
    inpList = inpList.filter((a) => a);
    if (inpList.length == 4) {
        makeArray();
        console.log("awa");
        inp = display.textContent + " " + inpList[3] + " ";
        display.textContent = inp;
        return;
    }
    
    display.textContent = inp;
}

let arrayInp

function makeArray() {
    arrayInp = inp.split(" ");
    operate(...arrayInp);
    
}

function decLimit() {
    spli = inp.split(" ");
    spli1 = spli[0];
    if (spli1.split(".").length == 2 && inpList.length < 2) {
        return;
    } if (inpList.length > 2) {
        spli2 = spli[2];
        if (spli2.split(".").length == 2) {
            return;
        }

    }
    dispInput(".");
}

one.onclick = () => dispInput("1");
two.onclick = () =>  dispInput("2");
three.onclick = () => dispInput("3");
four.onclick = () => dispInput("4");   
five.onclick = () => dispInput("5"); 
six.onclick = () => dispInput("6");   
seven.onclick = () => dispInput("7");   
eight.onclick = () => dispInput("8");   
nine.onclick = () => dispInput("9");  
zero.onclick = () => dispInput("0"); 
plus.onclick = () => dispInput(" + ");   
minus.onclick = () => dispInput(" - ");   
divi.onclick = () => dispInput(" / "); 
multi.onclick = () => dispInput(" * ");
exponent.onclick = () => dispInput(" ** ");
point.addEventListener("click", () => {
    decLimit();
})
    
equals.addEventListener("click", () => {
    makeArray();
})

clear.addEventListener("click", () => {
    inp = "";
    display.textContent = inp;
})

function delet() {
    if (inp.slice(-1) == " ") {
        inp = inp.replace(/\s/g, '');
    } 
    inp = inp.slice(0, -1);
    display.textContent = inp;
    inpList = inp.split(" ");
    inpList = inpList.filter((a) => a);
}
del.addEventListener("click", () => {
    delet();
})

window.addEventListener("keydown", function(e){
    console.log(e.key);
    if (e.key >=0 || e.key <=9) {
        dispInput(e.key);
        return;
    } if (e.key == "=" || e.key == "Enter") {
        makeArray();
        return;
    } if (e.key == "+") {
        dispInput(" + ")
        return;
    } if (e.key == "Backspace") {
        delet();
        return;
    } if (e.key == "-") {
        dispInput(" - ");
        return;
    } if (e.key == "*") {
        dispInput(" * ");
        return;
    } if (e.key == "/") {
        dispInput(" / ");
        return;
    } if (e.key == ".") {
        decLimit();
    } if (e.key == "^") {
        dispInput(" ** ");
    }
 
    
})
    



function operate(val1, operator, val2) {
    if (operator == "*") {
        multiply(val1, val2);
    } else if (operator == "/") {
        if (val1 == 0 || val2 == 0) {
            display.textContent = "Really? Surely you know better.";
            inp = "";
            return;
        } 
        divide(val1, val2);
    } else if (operator == "+") {
        add(val1, val2);
    } else if (operator == "-") {
        subtract(val1, val2);
    }else if (operator == "**") {
        exponentiate(val1, val2)
    }};


let c = 0
const add = function(x, y) {
    if (inp.split(".").length >= 2) {
        x = parseFloat(x);
        y = parseFloat(y);
    } else {
    x = parseInt(x);
    y = parseInt(y);
    }
	inp = x + y;
    inp = Math.round(inp * 100) / 100;
    if (isNaN(inp)) {
        inp = "";
        display.textContent = "Invalid input."
        return;
    }
    display.textContent = inp;
    
};

const subtract = function(x, y) {
    if (inp.split(".").length >= 2) {
        x = parseFloat(x);
        y = parseFloat(y);
    } else {
    x = parseInt(x);
    y = parseInt(y);
    }
	inp = x - y;
    inp = Math.round(inp * 100) / 100;
    if (isNaN(inp)) {
        inp = "";
        display.textContent = "Invalid input."
        return;
    }
    display.textContent = inp;
};
let z = 0

const multiply = function(x, y) {
    if (inp.split(".").length >= 2) {
        x = parseFloat(x);
        y = parseFloat(y);
    } else {
    x = parseInt(x);
    y = parseInt(y);
    }
    z = [x, y];
    inp = z.reduce((a, b) => a * b);
    inp = Math.round(inp * 100) / 100;
    if (isNaN(inp)) {
        inp = "";
        display.textContent = "Invalid input."
        return;
    }
    display.textContent = inp;
  };

const divide = function(x, y) {
    if (inp.split(".").length >= 2) {
        x = parseFloat(x);
        y = parseFloat(y);
    } else {
    x = parseInt(x);
    y = parseInt(y);
    }
    z = [x, y];
    inp = z.reduce((a, b) => a / b);
    inp = Math.round(inp * 100) / 100;
    if (isNaN(inp)) {
        inp = "";
        display.textContent = "Invalid input."
        return;
    }
    display.textContent = inp;
};

const exponentiate = function(x, y) {
    if (inp.split(".").length >= 2) {
        x = parseFloat(x);
        y = parseFloat(y);
    } else {
    x = parseInt(x);
    y = parseInt(y);
    }
    z = [x, y];
    inp = z.reduce((a, b) => a ** b);
    inp = Math.round(inp * 100) / 100;
    if (isNaN(inp)) {
        inp = "";
        display.textContent = "Invalid input."
        return;
    }
    display.textContent = inp;
};
