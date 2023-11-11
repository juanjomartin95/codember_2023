const getText = () => fetch('https://codember.dev/data/message_02.txt', {method: 'GET'})
    .then(response => response.text())

const transformTextToArray = (text) => {
    return text.split('')
}

let result = '';

const operations = {
    '#': (value) => value+1, // Incrementa el valor numérico en 1.
    '@': (value) => value-1, // Decrementa el valor numérico en 1.
    '*': (value) => value * value, // Multiplica el valor numérico por sí mismo.
    '&': (value) => {
        result = result.concat(value.toString())
        return value
    }, // Imprime el valor numérico actual.
}

getText().then((text) => {
    const dataSplitted = transformTextToArray(text)
    let acum = 0
    dataSplitted.forEach((operator) => {
        acum = operations[operator](acum)
    })
    console.log('result =>', result)
    // 024899455
})
