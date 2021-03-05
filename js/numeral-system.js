window.addEventListener('DOMContentLoaded', () => {
    let firstNumber = parseInt(prompt('Введите число')) ?
    let sysNumber = prompt('Введите систему, в которую надо перевести число')

    if (!parseInt(firstNumber) || !parseInt(sysNumber)) {
        console.log('Некорректный ввод')
        return false
    } else {
        firstNumber = parseInt(firstNumber)
        sysNumber = parseInt(sysNumber)
    }

    const result = firstNumber.toString(sysNumber)
    console.log(`Число ${firstNumber} в ${sysNumber} системе даст: ${result}`)
})