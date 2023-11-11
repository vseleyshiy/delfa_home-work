let btnSum = document.getElementById('btnSum');
let btnRaz = document.getElementById('btnRaz');
let btnPro = document.getElementById('btnPro');
let btnCha = document.getElementById('btnCha');
let btnC = document.getElementById('btnC');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let result = document.getElementById('result');

function summa() {
    let one = Number(firstNumber.value);
    let two = Number(secondNumber.value);
    sum = one+two;
    result.value = sum;
};
btnSum.addEventListener('click', summa);

function raznost() {
    let one = Number(firstNumber.value);
    let two = Number(secondNumber.value);
    raz = one-two;
    result.value = raz;
};
btnRaz.addEventListener('click', raznost);

function proizvedenie() {
    let one = Number(firstNumber.value);
    let two = Number(secondNumber.value);
    pro = one*two;
    result.value = pro;
};
btnPro.addEventListener('click', proizvedenie);

function chasnoe() {
    let one = Number(firstNumber.value);
    let two = Number(secondNumber.value);
    cha = one/two;
    result.value = cha;
};
btnCha.addEventListener('click', chasnoe);

function cleaning() {
    let one = firstNumber.value;
    let two = secondNumber.value;
    let zeroOne = one.value = " ";
    let zeroTwo = two.value = " ";
    clean = zeroOne,zeroTwo;
    firstNumber.value = clean;
    secondNumber.value = clean;
    result.value = clean;
};
btnC.addEventListener('click', cleaning);


