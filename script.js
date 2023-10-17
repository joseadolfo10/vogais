function contarVogais() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (vogais.includes(inputString[i])) {
            contador++;
        }
    }

    document.getElementById('resultado').textContent = `Número de vogais na string: ${contador}`;
}