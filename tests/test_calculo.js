const calcularJurosCompostos = require('../src/calculo');

// Teste para valores positivos
function testValoresPositivos() {
    const capital = 1000;
    const taxa = 0.05; // 5%
    const tempo = 12; // 12 períodos

    const resultadoEsperado = 1000 * Math.pow(1 + 0.05, 12); // Fórmula de juros compostos
    const resultadoObtido = calcularJurosCompostos(capital, taxa, tempo);

    if (resultadoObtido === resultadoEsperado) {
        console.log("Teste com valores positivos passou!");
    } else {
        console.error(
            `Teste com valores positivos falhou! Esperado: ${resultadoEsperado}, Obtido: ${resultadoObtido}`
        );
    }
}

// Executa o teste
testValoresPositivos();
