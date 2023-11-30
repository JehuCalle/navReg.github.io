console.log("😼");

const primerDiv = document.querySelector("#primerDiv");
const segundoDiv = document.querySelector("#segundoDiv");
const tercerDiv = document.querySelector("#tercerDiv");
const btnCentroIzquierda = document.querySelector("#btnCentroIzquierda");
const btnCentroDerecha = document.querySelector("#btnCentroDerecha");

let contPag1 = 0;
btnCentroDerecha.addEventListener('click', (e) => {
  e.preventDefault
  const pagina1 = document.querySelector('.pagina1');
  const pagina2 = document.querySelector('.pagina2');
  console.log("0")
  if (contPag1 === 0) {
    pagina1.style.transform = 'rotateY(-180deg)';
    pagina2.style.transform = 'rotateY(-180deg)';
    console.log("1");
    contPag1 += 1;
  } else {
    pagina1.style.transform = 'rotateY(0deg)';
    pagina2.style.transform = 'rotateY(0deg)';
    console.log("2");
    contPag1 -= 1;
  }
});

let contPag2 = 0;
btnCentroIzquierda.addEventListener('click', (e) => {
  const pagina3 = document.querySelector('.pagina3');
  const pagina4 = document.querySelector('.pagina4');

  if (contPag2 === 0) {
    pagina3.style.transform = 'rotateY(180deg)';
    pagina4.style.transform = 'rotateY(180deg)';
    console.log("3");
    contPag2 += 1;
  } else {
    pagina3.style.transform = 'rotateY(0deg)';
    pagina4.style.transform = 'rotateY(0deg)';
    console.log("4");
    contPag2 -=1
  }
});


let contM1 = 0;
const musica1 = document.querySelector("#musica1");
const btnMusica1 = document.querySelector("#btnMusica1");
let contM2 = 0;
const musica2 = document.querySelector("#musica2");
const btnMusica2 = document.querySelector("#btnMusica2");
const btnMusica3 = document.querySelector("#btnMusica3");
const btnMusica4 = document.querySelector("#btnMusica4");
const btnMusica5 = document.querySelector("#btnMusica5");

btnMusica1.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica2.pause();
  musica2.currentTime = 0;
  contM2 = 0;

  if( contM1 === 0){
    musica1.play();
    contM1 += 1;
  }else if ( contM1 === 1){
    musica1.pause();
    musica1.currentTime = 0;
    contM1 -= 1;
  };
});

btnMusica2.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica1.pause();
  musica1.currentTime = 0;
  contM1 = 0;

  if( contM2 === 0){
    musica2.play();
    contM2 += 1;
  }else if ( contM2 === 1){
    musica2.pause();
    musica2.currentTime = 0;
    contM2 -= 1;
  };
});