const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const addNumber1 = Number(addInput1.value); 
    const addNumber2 = Number(addInput2.value);
    const addResultValue = addNumber1 + addNumber2;
    addResult.textContent = addResultValue;
})

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

subButton.addEventListener('click', () => {
    const subNumber1 = Number(subInput1.value); 
    const subNumber2 = Number(subInput2.value);
    const subResultValue = subNumber1 - subNumber2;
    subResult.textContent = subResultValue;
})

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    const multNumber1 = Number(multInput1.value); 
    const multNumber2 = Number(multInput2.value);
    const multResultValue = multNumber1 * multNumber2;
    multResult.textContent = multResultValue;
})

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    const divNumber1 = Number(divInput1.value); 
    const divNumber2 = Number(divInput2.value);
    const divResultValue = divNumber1 * divNumber2;
    divResult.textContent = divResultValue;
})

