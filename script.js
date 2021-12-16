let prevNumber = ''
let caculationOperator = ''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const correction = document.querySelector('.clear')

const updateScreen = (number) => {
    calculatorScreen.value = number
    calculatorScreen.length <= 20
}

const inputNumber = (number) => {
    if(currentNumber === '0')
    {
        currentNumber = number
    }
    else if (currentNumber.length <= 15)
    {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator = (operator) => {
    if(caculationOperator === '')
    {
        prevNumber = currentNumber
    }

    prevNumber = currentNumber
    caculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.'))
    {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(caculationOperator)
    {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    caculationOperator =''
}

equalSign.addEventListener('click', () => {
   calculate()
   updateScreen(currentNumber) 
})

const clearAll = () => {
    prevNumber = ''
    caculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clear = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
}

correction.addEventListener('click', () => {
    clear()
    updateScreen(currentNumber)
})