// Função para calcular juros compostos com validação
function calcularJurosCompostos(capital, taxa, tempo) {
    if (typeof capital !== 'number' || typeof taxa !== 'number' || typeof tempo !== 'number') {
        throw new Error('Todos os valores devem ser números.');
    }
    if (capital <= 0 || taxa < 0 || tempo < 0) {
        throw new Error('Capital, taxa e tempo devem ser positivos.');
    }

    return capital * Math.pow((1 + taxa), tempo);
}

// Exemplo de uso
try {
    console.log(calcularJurosCompostos(1000, 0.05, 12)); // Resultado esperado: 1795.856326
    console.log(calcularJurosCompostos(-1000, 0.05, 12)); // Erro: Capital deve ser positivo
} catch (error) {
    console.error(error.message);
}
