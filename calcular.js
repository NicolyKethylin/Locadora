let tanque;
let autonomia;
let precoCarro;
let distancia;
let precoGasolina = 6.49;
let kmExcedente = 30.87;
let valorTotal;
let valorTotalComDesconto;
let desconto;
let img = document.querySelector("#imagem-de-carro")
let carro = document.getElementById("marca-carro")
let destino = document.getElementById("destino-final")
let texto = document.querySelector(".texto");

function clicar() {

  let carroV = carro.value
  let destinoV = destino.options[destino.selectedIndex].value;

  if (carroV == "Corolla") {
    tanque = 60;
    autonomia = 13;
    precoCarro = 400;
    img.setAttribute("src", "./src/corolla.png");
  } else if (carroV == "Cobalt") {
    tanque = 54;
    autonomia = 12;
    precoCarro = 280;
    img.setAttribute("src", "./src/cobalt.jpg")
  } else if (carroV == "Gol") {
    tanque = 55;
    autonomia = 13;
    precoCarro = 180;
    img.setAttribute("src", "./src/gol.jpg")
  } else if (carroV == "Fiat Uno") {
    tanque = 48;
    autonomia = 15;
    precoCarro = 80;
    img.setAttribute("src", "./src/fiat.jpg")
  } else {
    alert("Por favor preencher o carro desejado")
    return
  }

  if (destinoV == "Caruaru") {
    distancia = 144;
  } else if (destinoV == "Serra talhada") {
    distancia = 419;
  } else if (destinoV == "Petrolina") {
    distancia = 720;
  } else if (destinoV == "Salvador") {
    distancia = 814;
  } else {
    alert("Destino não encontrado");
    return
  }
  let qtdAbastecer = distancia / tanque;
  if (distancia > 200) {
    let adicional = (distancia - 200) * kmExcedente;
    precoCarro += adicional;
  }

  valorTotal = (distancia / autonomia) * precoGasolina + precoCarro;
  if (valorTotal > 5000) {
    desconto = 5;
  } else if (valorTotal > 10000) {
    desconto = 7;
  } else {
    desconto = 0;
  }

  valorTotalComDesconto = valorTotal - (valorTotal * desconto) / 100;

  if (desconto != 0) { texto.innerText = `Será necessário abastecer o seu carro ${qtdAbastecer.toFixed(0)} vezes para concluir sua viagem. O Valor total normal seria de: R$ ${valorTotal.toFixed(2)}, porém você recebeu um desconto de: ${desconto}% e o valor com desconto será de: R$${valorTotalComDesconto.toFixed(2)}` }
  else {
    texto.innerText = `Será necessário abastecer o seu carro ${qtdAbastecer.toFixed(0)} vezes para concluir sua viagem. O Valor total é de: R$ ${valorTotal.toFixed(2)}.`
  }

}
function limpar() {
  img.setAttribute("src", "./src/carro1.png");
  document.getElementById("marca-carro").value = "Selecione seu carro";
  document.getElementById("destino-final").value = "vazio";
  texto.innerText = "";
}