const inputHeight = document.getElementById('inpt_height')
const inputWeight = document.getElementById('inpt_weight')

function calcIMC(params) {
  // Altura
  let height = inputHeight.value
  // Peso
  let weight = inputWeight.value

  let imc = weight/(height * height)

  if (imc < 18.5) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Peso Ideal";
    resultadoIMC.style.color = "#FFC312"
  }

  else if ((imc >= 18.5) && (imc <= 24.9)) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Peso Ideal";
    resultadoIMC.style.color = "#4cd137"
  }

  else if ((imc > 24.9) && (imc <= 29.9)) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Acima do peso";
    resultadoIMC.style.color = "#EA2027"
  }

  else if ((imc > 29.9) && (imc <= 34.9)) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Obesidade grau I";
    resultadoIMC.style.color = "#EA2027"
  }

  else if ((imc > 34.9) && (imc <= 39.9)) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Obesidade grau II";
    resultadoIMC.style.color = "#EA2027"
  }

  else if (imc >= 40) { 
    var resultadoIMC = document.getElementById("imc");
    var resultadoSituation = document.getElementById("situation");
    resultadoIMC.textContent = (imc.toFixed(2) + " kg/m²");
    resultadoSituation.textContent = "Obesidade grau III";
    resultadoIMC.style.color = "#EA2027"
  }
}