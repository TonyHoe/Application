var aElement = document.getElementById("a");
var bElement = document.getElementById("b");
var cElement = document.getElementById("c");
var result = null;
var btnSum = document.getElementById("btnSum");
var btnMinus = document.getElementById("btnMinus");
var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var log = document.getElementById("log");


function Exception() {
    function review() {
        setTimeout(() => {
            log.innerText = "";
            cElement.value = null;
        }, 3000);
    }

    if (isNaN(aElement.value) && isNaN(bElement.value)) { // a va b khong phai la so
        log.innerText = "a và b phải là giá trị số!";
        aElement.value = null;
        bElement.value = null;
        review();
    } else if (isNaN(aElement.value)) { //a khong phai so
        log.innerText = "a phải là giá trị số!";
        aElement.value = null;
        review();
    } else if (isNaN(bElement.value)) { //b khong phai la so
        log.innerText = "b phải là giá trị số!";
        bElement.value = null;
        review();
    }
}


btnSum.onclick = function Sum() {
    result = parseFloat(aElement.value) + parseFloat(bElement.value);
    if (!isNaN(result)) { // Nếu result là giá trị số 
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
};

btnMinus.onclick = function Minus() {
    result = parseFloat(aElement.value) - parseFloat(bElement.value);
    if (!isNaN(result)) {
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
};

btnMultiply.onclick = function Multiply() {
    result = parseFloat(aElement.value) * parseFloat(bElement.value);
    if (!isNaN(result)) {
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
};

btnDivide.onclick = function Divide() {
    result = parseFloat(aElement.value) / parseFloat(bElement.value);
    if (bElement.value == 0) {
        cElement.value = result;
        log.innerText = "b phải khác 0!";
    } else
    if (!isNaN(result)) {
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
};