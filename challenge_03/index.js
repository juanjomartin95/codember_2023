const getText = () => fetch('https://codember.dev/data/encryption_policies.txt', {method: 'GET'})
    .then(response => response.text())

getText().then((text) => {
    keyRuleList = text.split('\n')
    const newKeyRuleList = keyRuleList.map((el) => {
        const [rule, password] = el.split(': ')
        const [minMax, letter] = rule.split(' ')
        const [min, max] = minMax.split('-')
        return { letter, password, min, max }
    })

    const invalidPasswords = newKeyRuleList.filter(({ letter, password, min, max }, index) => {
        const passwordSplitted = password.split('')
        const arrayLetters = passwordSplitted.filter((el) => el === letter);
        const letterLength = arrayLetters.length;
        if (min > letterLength || max < letterLength) return true
    });

    const position = 42
    const calcPosition = position - 1;

    console.log(invalidPasswords[calcPosition].password)
    // bgamidqewtbus
})
