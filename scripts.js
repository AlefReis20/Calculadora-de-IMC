const calculateButton = document.getElementById('calculate-button')
const cleanButton = document.getElementById('clean-button')

const calculate = () => {
    const inputHeight = document.getElementById('input-height').value
    const inputWeight = document.getElementById('input-weight').value
    const imcValue = document.getElementById('imc-value')
    const message = 'Seu IMC é:'  

    imcValue.innerHTML = `${message}
    ${((inputWeight) / (inputHeight*2)).toFixed(2)}`

    if ((inputWeight / (inputHeight*2)) < 18.5) {
        alert(`Pessoa está abaixo do peso, imc igual a ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    } 

    else if ((inputWeight / inputHeight*2) >= 18.5 && (inputWeight / (inputHeight*2)) <= 24.9) {
        alert(`Pessoa está com peso ideal, imc igual a ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    } 

    else if ((inputWeight / inputHeight*2) >= 25 && (inputWeight / (inputHeight*2)) <= 29.9) {
        alert(`Pessoa está com sobrepeso, imc igual a  ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    } 
    
    else if ((inputWeight / inputHeight*2) >= 30 && (inputWeight / (inputHeight*2)) <= 34.9) {
        alert(`Pessoa está com obesidade grau I, imc igual a  ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    } 
    
    else if ((inputWeight / inputHeight*2) >= 35 && (inputWeight / (inputHeight*2)) <= 39.9) {
        alert(`Pessoa está com obesidade grau II, imc igual a ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    }
    else {
        alert(`Pessoa está com obesidade grau III, imc igual a ${((inputWeight) / (inputHeight*2)).toFixed(2)}.`)
    }
}

const clean = () => {
    const inputHeight = document.getElementById('input-height').value = ''
    const inputWeight = document.getElementById('input-weight').value = ''

}

calculateButton.addEventListener('click',calculate)
cleanButton.addEventListener('click',clean)
