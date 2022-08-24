let display = document.getElementById("display")

let inp = "";
let inpList = [];


function dispInput(select) {
    inp += select;
    inpList = inp.split(" ");
    inpList = inpList.filter((a) => a);
    if (inpList.length == 4) {
        makeArray();
        console.log("awa");
        inp = display.textContent + " " + inpList[3] + " ";
        display.textContent = inp;
        
    } else display.textContent = inp;
}

let arrayInp

function makeArray() {
    arrayInp = inp.split(" ");
    operate(...arrayInp);
}

function delet() {
    if (inp.slice(-1) == " ") {
        inp = inp.replace(/\s/g, '');
    } 
    inp = inp.slice(0, -1);
    display.textContent = inp;

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
power.onclick = () => dispInput(" ^ ");
point.onclick = () => dispInput(".");
equals.addEventListener("click", () => {
    makeArray();
})

clear.addEventListener("click", () => {
    inp = "";
    display.textContent = inp;
})


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
        dispInput(e.key);
    }
 
    
})


function operate(val1, operator, val2) {
    if (operator == "*") {
        multiply(val1, val2);
    } else if (operator == "/") {
        divide(val1, val2);
    } else if (operator == "+") {
        add(val1, val2);
    } else if (operator == "-") {
        subtract(val1, val2);
    }};


let c = 0
const add = function(x, y) {
    x = parseInt(x);
    y = parseInt(y);
	display.textContent = x + y;
    inp = display.textContent;
    
};

const subtract = function(x, y) {
    x = parseInt(x);
    y = parseInt(y);
	display.textContent = x - y;
    inp = display.textContent;
};
let z = 0

const multiply = function(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    z = [x, y];
    display.textContent = z.reduce((a, b) => a * b);
    inp = display.textContent;
  };

const divide = function(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    z = [x, y];
    display.textContent = z.reduce((a, b) => a / b);
    inp = display.textContent;
};

 
