console.log("😼");

const primerDiv = document.querySelector("#primerDiv");
const segundoDiv = document.querySelector("#segundoDiv");
const tercerDiv = document.querySelector("#tercerDiv");
const btnIniciarSecuencia = document.querySelector("#btnIniciarSecuencia");

let contador = 0;

function secuencia(){
  segundoDiv.classList.add("d-none");
  tercerDiv.classList.remove("d-none");
};

btnIniciarSecuencia.addEventListener( 'click', (e) => {
  e.preventDefault();

  if( contador === 0 ){
    primerDiv.classList.add("d-none");
    segundoDiv.classList.remove("d-none");
    setTimeout(secuencia, 5000);
    contador += 1;
  } else if( contador !== 0){
    console.log("Fin");
  };
});