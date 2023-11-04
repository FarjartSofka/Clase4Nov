//Arreglos
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

//String
let iterable2 = "Noviembre";

for (let value of iterable2) {
  console.log(value);
}

//Mapa
let iterable3 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (let entry of iterable3) {
    console.log(entry);
  }

  for (let [key, value] of iterable3) {
    console.log(value);
  }