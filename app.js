let paragrafo = document.querySelector('h1');
paragrafo.innerHTML = 'Hora do Desafio.';


function botaoConsole(){
    console.log('O botão foi clicado');
}

function botaoAlerta(){
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('Escreva o nume de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let valor1 = parseInt(prompt('Digite um número inteiro'));
    let valor2 = parseInt(prompt('Agora digite outro número inteiro'));

    let resultado = valor1 + valor2;

    alert(`A soma dos valores foi de ${resultado}`);
}