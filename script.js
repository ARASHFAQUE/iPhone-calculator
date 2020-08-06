const inputValue = document.getElementById('result');
function inputNumbers(num){
    document.getElementById('delete').value = 'C';
    const existingNum = inputValue.value;
    let totalInputValue = existingNum + num;
    inputValue.value = totalInputValue;
    return totalInputValue;
}
function inputNegativeNumbers(){
    document.getElementById('delete').value = 'C';
    let valueInput = inputValue.value;
    const negativeValue = valueInput * -1;
    inputValue.value = negativeValue;
}

function deleteAll(){
    inputValue.value = "";
    document.getElementById('delete').value = "AC";

}
function calculateAll(){
    const result = eval(inputValue.value);
    inputValue.value = result;
}