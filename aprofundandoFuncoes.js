//IMC
function calcularImc(altura, peso){
  let imc =  peso / (altura * altura);
}

//Fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  //Dólar
  function converterDolar(valorDolar){
    let cotacaoDolar = 4.80;
    let valorReais = valorDolar * cotacaoDolar;
    return valorReais.toFixed(2);
  }
  
  let valorDolar = 50;
  let valorReais = converterDolarParaReal(valorDolar);
  console.log(`${valorDolar} dólares equivalem a R$ ${valorReais}`);
  
  //Sala Retangular
  function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  let altura = 3; 
  let largura = 5; 
  calcularSalaRetangular(altura, largura);

  //Sala Circular
  function calcularSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  let raio = 4;
  calcularSalaCircular(raio);

  //Tabuada
  function mostrarTabuada(numeroTab) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  let numeroTab = 7;
  mostrarTabuada(numero);
