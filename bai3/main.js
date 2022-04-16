var display = document.getElementById('display');
// Operators variable
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var times = document.getElementById('times');
var divide = document.getElementById('div');
var dot = document.getElementById('dot');
var result = document.getElementById('doit');
var clear = document.getElementById('clear');

// numbers variable
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var three = document.getElementById('three');
var two = document.getElementById('two');
var one = document.getElementById('one');
var zero = document.getElementById('zero');
/* -------------------------------------------------------------------------- */

plus.onclick = () => {display.value += '+'}
minus.onclick = () => {display.value += '-'}
times.onclick = () => {display.value += '*'}
divide.onclick = () => {display.value += '/'}
dot.onclick = () => {display.value += '.'}

seven.onclick = () => {display.value += '7'}
eight.onclick = () => {display.value += '8'}
nine.onclick = () => {display.value += '9'}
four.onclick = () => {display.value += '4'}
five.onclick = () => {display.value += '5'}
six.onclick = () => {display.value += '6'}
one.onclick = () => {display.value += '1'}
two.onclick = () => {display.value += '2'}
three.onclick = () => {display.value += '3'}
zero.onclick = () => {display.value += '0'};

// In ra kết quả
result.onclick = () => {
    display.value = eval(display.value);
}

// Xóa từng phần tử
clear.onclick = () => {
    display.value = display.value.slice(0,-1);
    // var displayLength = display.value.length;
    // for (let i=0; i<displayLength; i++) { 
    // }
}