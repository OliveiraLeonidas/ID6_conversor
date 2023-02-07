//cotacao
var cotacaoDolar  = 5.32;
var cotacaoPM = 3.69;
var cotacaoEuro = 5.55;
var cotacaoIene = 0.1445;

var valorEmReal;

//main function
function converteParaReal(){
  selecaoMoedas();
  recebeValor();
  
  //algoritmo de conversao
  var valorConvertido = document.getElementById("valorConvertido");
  if(selecaoMoedas() == 'dolar'){
    valorConvertido.innerHTML = '<p> O valor de ' + recebeValor() + ' dolares é igual à R$ ' + converteEmReal(recebeValor(), cotacaoDolar)  + '</p>'
  } else if(selecaoMoedas() == 'pesoMexicano'){
    valorConvertido.innerHTML = '<p> O valor de ' + recebeValor() + ' pesos mexicanos é igual à R$ ' + converteEmReal(recebeValor(), cotacaoPM)  + '</p>'
  } else if(selecaoMoedas() == 'iene') {
    valorConvertido.innerHTML = '<p> O valor de ' + recebeValor() + ' Ienes é igual à R$ ' + converteEmReal(recebeValor(), cotacaoIene)  + '</p>'
  }else if(selecaoMoedas() == 'euro'){
    valorConvertido.innerHTML = '<p> O valor de ' + recebeValor() + ' euros é igual à: ' + converteEmReal(recebeValor(), cotacaoEuro)  + '</p>'
  }
  document.getElementById("valorMonetario").value = '';
};

function converteEmReal(moedaSelecionada, cotacao){
    valorEmReal = moedaSelecionada * cotacao;
    valorEmReal = valorEmReal.toFixed(2);
    console.log("R$ " + valorEmReal)
  return valorEmReal;
};
function selecaoMoedas(){
 //selecao de moedas
  var select = document.getElementById("moedaEscolhida");
  var opcaoValor = select.options[select.selectedIndex].value;
  console.log(opcaoValor);
  return opcaoValor;
}
function recebeValor(){
  //valor para conversao
  var valorMoeda  = document.getElementById("valorMonetario").value;
  console.log(valorMoeda);
  return valorMoeda;
}

