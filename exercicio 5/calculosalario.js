let totalSalarios = 0;

function calcularSalario() {
    // Captura dos dados
    const codigo = document.getElementById("codigo").value;
    const horas = document.getElementById("horas").value;
    const turno = document.getElementById("turno").value;
    const categoria = document.getElementById("categoria").value;
    const salarioMinimo = parseFloat(document.getElementById("salarioMinimo").value);

    // Cálculo do valor da hora trabalhada
    let valorHora;
    if (categoria === "F") {
        if (turno === "M") valorHora = 0.1 * salarioMinimo;
        else if (turno === "V") valorHora = 0.12 * salarioMinimo;
        else if (turno === "N") valorHora = 0.15 * salarioMinimo;
    } else if (categoria === "G") {
        if (turno === "M") valorHora = 0.2 * salarioMinimo;
        else if (turno === "V") valorHora = 0.25 * salarioMinimo;
        else if (turno === "N") valorHora = 0.3 * salarioMinimo;
    }

    // Cálculo do salário inicial
    const salarioInicial = valorHora * horas;

    // Cálculo do auxílio-alimentação
    let auxilioAlimentacao;
    if (salarioInicial <= 2 * salarioMinimo) {
        auxilioAlimentacao = 0.15 * salarioInicial;
    } else if (salarioInicial > 2 * salarioMinimo && salarioInicial <= 4 * salarioMinimo) {
        auxilioAlimentacao = 0.1 * salarioInicial;
    } else {
        auxilioAlimentacao = 0.05 * salarioInicial;
    }

    // Cálculo do salário final
    const salarioFinal = salarioInicial + auxilioAlimentacao;

    // Atualização do total de salários
    totalSalarios += salarioFinal;

    // Exibição dos resultados na tabela
    const tabela = document.getElementById("resultado").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).innerText = codigo;
    novaLinha.insertCell(1).innerText = horas;
    novaLinha.insertCell(2).innerText = valorHora.toFixed(2);
    novaLinha.insertCell(3).innerText = salarioInicial.toFixed(2);
    novaLinha.insertCell(4).innerText = auxilioAlimentacao.toFixed(2);
    novaLinha.insertCell(5).innerText = salarioFinal.toFixed(2);

    // Limpeza do formulário
    document.getElementById("form-funcionario").reset();
}
