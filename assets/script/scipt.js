const inputHeight = document.getElementById('inpt_height')
const inputWeight = document.getElementById('inpt_weight')


function calcIMC(params) {
  // Altura
  let height = inputHeight.value
  // Peso
  let weight = inputWeight.value
  console.log(weight)
  console.log(height)

  let imc = weight/(height * height)

  console.log(imc)

  var resultadoElemento = document.getElementById("imc");
      resultadoElemento.textContent = imc.toFixed(2);
}