//Quando eu terminar de carregar a pagina "onload"
onload = () => {
  document.querySelector("#button-0").onclick = () => digito(0);
  document.querySelector("#button-1").onclick = () => digito(1);
  document.querySelector("#button-2").onclick = () => digito(2);
  document.querySelector("#button-3").onclick = () => digito(3);
  document.querySelector("#button-4").onclick = () => digito(4);
  document.querySelector("#button-5").onclick = () => digito(5);
  document.querySelector("#button-6").onclick = () => digito(6);
  document.querySelector("#button-7").onclick = () => digito(7);
  document.querySelector("#button-8").onclick = () => digito(8);
  document.querySelector("#button-9").onclick = () => digito(9);
  document.querySelector("#comma").onclick = comma;
  document.querySelector("#clean").onclick = clean;
  document.querySelector("#plus").onclick = () => operator("+");
  document.querySelector("#minus").onclick = () => operator("-");
  document.querySelector("#times").onclick = () => operator("*");
  document.querySelector("#divide").onclick = () => operator("/");
  document.querySelector("#results").onclick = () => operator("=");
};
let isValue = "0";
let isNewNumber = true;
let previousValue = 0; //valor acumulado para uma operação
let operacaoPendente = null;

const attDisplay = () => {
  let [partsInt, partsDec] = isValue.split(",");
  let voids = "";
  c = 0;
  for (let i = partsInt.length - 1; i >= 0; i--) {
    if (++c > 3) {
      voids = "." + voids;
      c = 1;
    }
    voids = partsInt[i] + voids;
  }
  voids = voids + (partsDec ? "," + partsDec : "");
  document.querySelector("#display").innerText = voids;
};

const digito = (n) => {
  if (isNewNumber) {
    isValue = "" + n;
    isNewNumber = false;
  } else isValue += n;
  attDisplay();
  // console.log(attDisplay());
};

//tratamento da virgula
const comma = () => {
  if (isNewNumber) {
    isValue = "0,";
    isNewNumber = false;
  } else if (isValue.indexOf(",") == -1) isValue += ",";
  attDisplay();
};
const clean = () => {
  isNewNumber = true;
  previousValue = 0;
  isValue = "0";
  operacaoPendente = null;
  attDisplay();
};

const currentValue = () => parseFloat(isValue.replace(",", "."));

const operator = (op) => {
  calculates();
  previousValue = currentValue();
  operacaoPendente = op;
  isNewNumber = true;
};

const calculates = () => {
  if (operacaoPendente != null) {
    let isResults;
    switch (operacaoPendente) {
      case "+":
        isResults = previousValue + currentValue();
        break;
      case "-":
        isResults = previousValue - currentValue();
        break;
      case "*":
        isResults = previousValue * currentValue();
        break;
      case "/":
        isResults = previousValue / currentValue();
        break;
    }
    isValue = isResults.toString().replace('.', ',')
  }
  isNewNumber = true;
  operacaoPendente = null;
  previousValue = 0;
  attDisplay();
};
