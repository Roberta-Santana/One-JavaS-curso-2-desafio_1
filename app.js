let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio - Git Commit';

function consoleButton(){
    console.log('O botão Console foi clicado');
}

function alertButton(){
    alert('Eu amo JS');
}

function promptButton(){
    let cidade = prompt('Informe o nome de uma cidade que você já visitou:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaButton(){
    let valor1 = parseInt(prompt('Digite o primeiro valor da soma:'));
    let valor2 = parseInt(prompt('Digite o segundo valor da soma:'));
    let soma = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é ${soma}`)
}