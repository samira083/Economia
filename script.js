const input = document.querySelector(".input-salario");

input.addEventListener("input", () => {
  let valor = input.value;

  // remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // evita campo vazio
  if (valor.length === 0) {
    input.value = "";
    return;
  }//

  // garante no mínimo 3 dígitos (ex: 000)
 // while (valor.length < 3) {
  //  valor = "0" + valor;
  //}

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
  // Aqui você pode adicionar mais lógica
});



            // Abre o modal de detalhes do projeto
function abrirDetalhes(){
    const overlay = document.getElementById('overlay-projeto');
        if(overlay){
        overlay.style.display = 'flex';
        }
    }