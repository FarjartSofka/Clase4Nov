let incorrecto = true

while (incorrecto == true){

    valorUsuario = prompt(`cuanto es 2+2?`);
    if(valorUsuario == 4){
        console.log(`La respuesta es correcta`)

        incorrecto = false;
    }
    else{
        console.log(`El valor ingresado es incorrecto`);
    }

}

//While Array
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  console.log(i)
  console.log(cars[i]) ;
  i++;
}
