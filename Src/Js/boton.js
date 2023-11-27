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