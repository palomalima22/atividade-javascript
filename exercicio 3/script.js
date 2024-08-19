function calculateAverage() {
    // Obter valores dos inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const peso1 = parseInt(document.getElementById('peso1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const peso2 = parseInt(document.getElementById('peso2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const peso3 = parseInt(document.getElementById('peso3').value);

    // Validação das notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert('Notas devem estar entre 0 e 10.');
        return;
    }

    // Validação dos pesos
    if (isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || peso1 <= 0 || peso2 <= 0 || peso3 <= 0) {
        alert('Pesos devem ser números inteiros positivos.');
        return;
    }

    // Cálculo da média ponderada
    const totalPesos = peso1 + peso2 + peso3;
    const mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / totalPesos;

    // Classificação
    let classificacao;
    if (mediaPonderada >= 9) {
        classificacao = 'Excelente';
    } else if (mediaPonderada >= 7) {
        classificacao = 'Bom';
    } else if (mediaPonderada >= 5) {
        classificacao = 'Regular';
    } else {
        classificacao = 'Insuficiente';
    }

    // Exibir o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `A média ponderada do aluno é ${mediaPonderada.toFixed(2)}, sendo classificada como: ${classificacao}`;
}
