const getText = () => fetch('https://codember.dev/data/message_01.txt', {method: 'GET'})
    .then(response => response.text())

const transformTextToArray = (text) => {
    return text
        .replace('\n', '')
        .toLowerCase()
        .split(' ')
}

getText().then((text) => {
    const dataSplitted = transformTextToArray(text)
    const dataObj = {}
    dataSplitted.forEach((value) => {
        dataObj[value] = (dataObj[value] || 0) + 1;
    })
    const result = Object.entries(dataObj).map(([animal, number]) => `${animal}${number}`).join('')
    console.log(result)
    // murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7
})
