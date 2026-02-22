// VARIÁVEL GLOBAL PARA ARMAZENAR O SALÁRIO
let salarioMensal = 0;
let gastos = {
  trabalho: 0,
  fixos: 0,
  lazer: 0,
  economia: 0
};

let porcentagens = {
  trabalho: 0,
  fixos: 0,
  lazer: 0,
  economia: 0
};

const input = document.querySelector(".input-salario");

input.addEventListener("input", () => {
  let valor = input.value;

  // remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // evita campo vazio
  if (valor.length === 0) {
    input.value = "";
    salarioMensal = 0;
    return;

  }

  // separa reais e centavos
  const reais = valor.slice(0, -2);
  const centavos = valor.slice(-2);

  // adiciona separador de milhar
  const reaisFormatado = reais.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  input.value = `${reaisFormatado},${centavos}`;
});

// Adiciona listener para o botão confirmar salário
const botao = document.querySelector(".botao-salario");
botao.addEventListener("click", () => {
  // Remove formatação de moeda
  const valorFormatado = input.value.replace(/\D/g, "");
  salarioMensal = parseInt(valorFormatado) / 100;
  console.log(`Salário confirmado: R$ ${salarioMensal.toFixed(2)}`);
  alert(`Salário registrado: R$ ${salarioMensal.toFixed(2).replace(".", ",")}`);
});

// FUNÇÃO PARA FORMATAR MOEDA
function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

// FUNÇÃO PARA CALCULAR SOMA DE PORCENTAGENS
function calcularSomaOutras(categoria) {
  let soma = 0;
  for (let cat in porcentagens) {
    if (cat !== categoria) {
      soma += porcentagens[cat];
    }
  }
  return soma;
}

// FUNÇÕES DOS MODAIS

// Trabalho
function abrirDetalhes() {
  document.getElementById("overlay-trabalho").style.display = "flex";
}

function fecharDetalhes() {
  document.getElementById("overlay-trabalho").style.display = "none";
}

function confirmarTrabalho() {
  const porcentagem = parseFloat(document.getElementById("porcentagem-trabalho").value);
  
  if (!porcentagem || porcentagem < 0) {
    alert("Por favor, informe uma porcentagem válida!");
    return;
  }
  
  if (salarioMensal === 0) {
    alert("Confirme o salário primeiro!");
    return;
  }

  const somaOutras = calcularSomaOutras("trabalho");
  const somaTotal = somaOutras + porcentagem;

  if (somaTotal > 100) {
    alert(`Soma ultrapassou 100%! Já alocados: ${somaOutras}% + ${porcentagem}% = ${somaTotal}%\nReduz o valor ou as outras categorias.`);
    return;
  }

  porcentagens.trabalho = porcentagem;
  gastos.trabalho = (salarioMensal * porcentagem) / 100;
  document.getElementById("valor-trabalho").textContent = formatarMoeda(gastos.trabalho);
  fecharDetalhes();
}

// Fixos
function abrirDetalhesFixos() {
  document.getElementById("overlay-fixos").style.display = "flex";
}

function fecharDetalhesFixos() {
  document.getElementById("overlay-fixos").style.display = "none";
}

function confirmarFixos() {
  const porcentagem = parseFloat(document.getElementById("porcentagem-fixos").value);
  
  if (!porcentagem || porcentagem < 0) {
    alert("Por favor, informe uma porcentagem válida!");
    return;
  }
  
  if (salarioMensal === 0) {
    alert("Confirme o salário primeiro!");
    return;
  }

  const somaOutras = calcularSomaOutras("fixos");
  const somaTotal = somaOutras + porcentagem;

  if (somaTotal > 100) {
    alert(`Soma ultrapassou 100%! Já alocados: ${somaOutras}% + ${porcentagem}% = ${somaTotal}%\nReduz o valor ou as outras categorias.`);
    return;
  }

  porcentagens.fixos = porcentagem;
  gastos.fixos = (salarioMensal * porcentagem) / 100;
  document.getElementById("valor-fixos").textContent = formatarMoeda(gastos.fixos);
  fecharDetalhesFixos();
}

// Lazer
function abrirDetalhesLazer() {
  document.getElementById("overlay-lazer").style.display = "flex";
}

function fecharDetalhesLazer() {
  document.getElementById("overlay-lazer").style.display = "none";
}

function confirmarLazer() {
  const porcentagem = parseFloat(document.getElementById("porcentagem-lazer").value);
  
  if (!porcentagem || porcentagem < 0) {
    alert("Por favor, informe uma porcentagem válida!");
    return;
  }
  
  if (salarioMensal === 0) {
    alert("Confirme o salário primeiro!");
    return;
  }

  const somaOutras = calcularSomaOutras("lazer");
  const somaTotal = somaOutras + porcentagem;

  if (somaTotal > 100) {
    alert(`Soma ultrapassou 100%! Já alocados: ${somaOutras}% + ${porcentagem}% = ${somaTotal}%\nRedus o valor ou as outras categorias.`);
    return;
  }

  porcentagens.lazer = porcentagem;
  gastos.lazer = (salarioMensal * porcentagem) / 100;
  document.getElementById("valor-lazer").textContent = formatarMoeda(gastos.lazer);
  fecharDetalhesLazer();
}

// Economia
function abrirDetalhesEconomia() {
  document.getElementById("overlay-economia").style.display = "flex";
}

function fecharDetalhesEconomia() {
  document.getElementById("overlay-economia").style.display = "none";
}

function confirmarEconomia() {
  const porcentagem = parseFloat(document.getElementById("porcentagem-economia").value);
  
  if (!porcentagem || porcentagem < 0) {
    alert("Por favor, informe uma porcentagem válida!");
    return;
  }
  
  if (salarioMensal === 0) {
    alert("Confirme o salário primeiro!");
    return;
  }

  const somaOutras = calcularSomaOutras("economia");
  const somaTotal = somaOutras + porcentagem;

  if (somaTotal > 100) {
    alert(`Soma ultrapassou 100%! Já alocados: ${somaOutras}% + ${porcentagem}% = ${somaTotal}%\nReduz o valor ou as outras categorias.`);
    return;
  }

  porcentagens.economia = porcentagem;
  gastos.economia = (salarioMensal * porcentagem) / 100;
  document.getElementById("valor-economia").textContent = formatarMoeda(gastos.economia);
  fecharDetalhesEconomia();
}
