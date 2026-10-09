const form = document.getElementById('imc-form');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultado = document.getElementById('resultado');

function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc < 25) {
    return 'Peso normal';
  } else if (imc < 30) {
    return 'Sobrepeso';
  } else if (imc < 35) {
    return 'Obesidade grau I';
  } else if (imc < 40) {
    return 'Obesidade grau II';
  } else {
    return 'Obesidade grau III';
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const peso = Number(pesoInput.value);
  const alturaCm = Number(alturaInput.value);

  if (!peso || !alturaCm || peso <= 0 || alturaCm <= 0) {
    resultado.textContent = 'Digite peso e altura válidos.';
    return;
  }

  const alturaEmMetros = alturaCm / 100;
  const imc = peso / (alturaEmMetros * alturaEmMetros);
  const classificacao = classificarIMC(imc);

  resultado.textContent = `Seu IMC é ${imc.toFixed(1)} - ${classificacao}`;
});
