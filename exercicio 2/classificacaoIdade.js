const readline = require('readline');

// Cria uma interface para entrada e saída padrão
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para solicitar dados ao usuário
function solicitarDados() {
  return new Promise((resolve, reject) => {
    rl.question('Por favor, informe seu nome: ', (nome) => {
      rl.question('Informe sua idade em anos: ', (idadeStr) => {
        const idade = parseInt(idadeStr, 10);

        // Valida se a idade é um número inteiro positivo
        if (isNaN(idade) || idade < 0) {
          console.log('Idade inválida. Por favor, informe um número inteiro positivo.');
          resolve(solicitarDados()); // Solicita novamente
        } else {
          resolve({ nome, idade });
        }
      });
    });
  });
}

// Função para classificar a faixa etária
function classificarFaixaEtaria(idade) {
  const faixas = [
    { limite: 15, classificacao: 'Criança' },
    { limite: 30, classificacao: 'Jovem' },
    { limite: 60, classificacao: 'Adulto' },
    { limite: Infinity, classificacao: 'Idoso' }
  ];

  // Encontra a faixa etária correta
  return faixas.find(faixa => idade < faixa.limite).classificacao;
}

// Função principal
async function main() {
  let continuar = true;

  while (continuar) {
    const dados = await solicitarDados();
    const { nome, idade } = dados;
    const classificacao = classificarFaixaEtaria(idade);

    console.log(`${nome} tem ${idade} anos e é classificado como: ${classificacao}`);

    rl.question('Deseja informar outra idade? (s/n): ', (resposta) => {
      continuar = resposta.trim().toLowerCase() === 's';
      if (!continuar) {
        rl.close(); // Fecha a interface de leitura
      }
    });
  }
}

main();