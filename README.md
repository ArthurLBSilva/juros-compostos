# Juros Compostos

Este projeto é um sistema simples para calcular juros compostos. Ele foi desenvolvido para demonstrar boas práticas no uso do Git e GitHub, incluindo versionamento, organização e documentação.

## Funcionalidades Planejadas
- Cálculo de juros compostos com base no capital, taxa e tempo.
- Entrada de valores positivos e negativos.
- Validação dos parâmetros de entrada.

## Exemplos de Entrada e Saída

1. **Exemplo 1:**
   - Entrada:
     - Capital: 1000
     - Taxa: 0.05 (5%)
     - Tempo: 12 períodos
   - Saída:
     - Montante: 1795.8563

2. **Exemplo 2:**
   - Entrada:
     - Capital: 5000
     - Taxa: 0.03 (3%)
     - Tempo: 6 períodos
   - Saída:
     - Montante: 5957.1949

## Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/ArthurLBSilva/juros-compostos.git

2. Navegue até a pasta do projeto:
      ```bash
   cd juros-compostos

3. Execute o código:
      ```bash
   node src/calculo.js
      
4. Teste o sistema:
      ```bash
   node tests/test_calculo.js