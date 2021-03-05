window.addEventListener('DOMContentLoaded', () => {
    let firstNumber = prompt('Введите первое число')
    let secondNumber = prompt('Введите второе число')

    if (!parseInt(firstNumber) || !parseInt(secondNumber)) {
        console.log('Некорректный ввод')
        return false
    } else {
        firstNumber = parseInt(firstNumber)
        secondNumber = parseInt(secondNumber)
    }

    const sum = firstNumber + secondNumber
    const quotient = firstNumber / secondNumber
    console.log(`Ответ: ${sum}, ${quotient}`)
})