
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoterror = createCheckbox('Gosta de terror?')
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeterror = campoterror.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeterror);

  fill(color(7, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeterror) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Noiva-Cadáver";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeterror) {
          return "Coraline e o Mundo Secreto";          
        } else{
         return "Utopia";
        }
      } else {
        if (gostaDeFantasia) {
          return "The Bad Guys";
        } else {
          return "Thelma the Unicorn";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Bita e os Animais.";
    } else {
      return "Ferdinand";
    }
  }
}
