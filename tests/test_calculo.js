const calcularJurosCompostos = require('../src/calculo');

// Teste para valores positivos
function testValoresPositivos() {
    const capital = 1000;
    const taxa = 0.05; // 5%
    const tempo = 12; // 12 períodos

    const resultadoEsperado = 1000 * Math.pow(1 + 0.05, 12); // Fórmula de juros compostos
    const resultadoObtido = calcularJurosCompostos(capital, taxa, tempo);

    if (resultadoObtido === resultadoEsperado) {
        console.log(" Teste com valores positivos passou!");
    } else {
        console.error(
            ` Teste com valores positivos falhou! Esperado: ${resultadoEsperado}, Obtido: ${resultadoObtido}`
        );
    }
}

// Teste para taxa negativa
function testTaxaNegativa() {
    const capital = 1000;
    const taxa = -0.05; // -5%
    const tempo = 12;

    try {
        calcularJurosCompostos(capital, taxa, tempo);
        console.error(" Teste com taxa negativa falhou! Nenhuma exceção foi lançada.");
    } catch (error) {
        console.log(" Teste com taxa negativa passou! Exceção capturada:", error.message);
    }
}

// Executa os testes
testValoresPositivos();
testTaxaNegativa();
 