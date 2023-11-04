//1 ejemplo
var diasMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31
}
for (var mes in diasMes){
    console.log(mes);
}
alert(diasMes["mayo"]);

for (var mes in diasMes){
    console.log(diasMes[mes]);
}

for (var mes in diasMes){
    console.log("El mes " + mes + " tiene " + diasMes[mes] + " dias.");
}

// Ejemplo 2
let usuarios = 
{
    "Persona 1" : {
      "isFav" : true
    },
    "Persona 2" : {
      "isFav" : false
    },
    "Persona 3" : {
      "isFav" : true
    },
  }

  for(var usuario in usuarios) {
    if(usuarios[usuario].isFav) {
      console.log('El usuario con índice (usamos su nombre como índice) ' + usuario + ' es uno de tus favoritos');
    }
  }

  //Ejemplo 3
  // define array
const arr = [ 'String', 1, 'JavaScript' ];

for (let x in arr) {
    console.log(arr[x]);
}