const input = document.querySelector(".input-salario");

input.addEventListener("input", () => {
  let valor = input.value;

  // remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // evita campo vazio
  if (valor.length === 0) {
    input.value = "";
    return;
  }

  // separa reais e centavos
  const reais = valor.slice(0, -2);
  const centavos = valor.slice(-2);

  // adiciona separador de milhar
  const reaisFormatado = reais.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  input.value = `${reaisFormatado},${centavos}`;
});

// Adiciona listener para o botão confirmar
const botao = document.querySelector(".botao-salario");
botao.addEventListener("click", () => {
  const valor = input.value;
  console.log(`Salário confirmado: R$ ${valor}`);
});

// FUNÇÕES DOS MODAIS

// Trabalho
function abrirDetalhes() {
  document.getElementById("overlay-trabalho").style.display = "flex";
}

function fecharDetalhes() {
  document.getElementById("overlay-trabalho").style.display = "none";
}

// Fixos
function abrirDetalhesFixos() {
  document.getElementById("overlay-fixos").style.display = "flex";
}

function fecharDetalhesFixos() {
  document.getElementById("overlay-fixos").style.display = "none";
}

// Lazer
function abrirDetalhesLazer() {
  document.getElementById("overlay-lazer").style.display = "flex";
}

function fecharDetalhesLazer() {
  document.getElementById("overlay-lazer").style.display = "none";
}

// Economia
function abrirDetalhesEconomia() {
  document.getElementById("overlay-economia").style.display = "flex";
}

function fecharDetalhesEconomia() {
  document.getElementById("overlay-economia").style.display = "none";
}

// Confirmar porcentagem
function confirmar() {
  const valor = document.getElementById("porcentagem-salario").value;
  console.log(`Porcentagem confirmada: ${valor}%`);
}
