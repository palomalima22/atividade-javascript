// Função para calcular o IMC e classificar o resultado
function calcularIMC() {
    // Solicita o nome do usuário
    const nome = prompt("Digite o seu nome:");

    // Solicita a altura do usuário em centímetros
    let alturaCentimetros = parseFloat(prompt("Digite a sua altura em centímetros:"));

    // Solicita o peso do usuário em quilogramas
    let pesoQuilogramas = parseFloat(prompt("Digite o seu peso em quilogramas:"));

    // Converte a altura de centímetros para metros
    let alturaMetros = alturaCentimetros / 100;

    // Calcula o IMC
    let imc = pesoQuilogramas / (alturaMetros * alturaMetros);

    // Determina a classificação do IMC
    let classificacao;
    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    // Exibe o resultado para o usuário
    alert(`${nome} possui um Índice de Massa Corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}`);
}

// Chama a função para calcular o IMC
calcularIMC();