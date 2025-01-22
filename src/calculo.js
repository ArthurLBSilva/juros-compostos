// Função para calcular juros compostos
function calcularJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo);
}

// Exemplo de uso
console.log(calcularJurosCompostos(1000, 0.05, 12)); // Resultado esperado: 1795.856326
