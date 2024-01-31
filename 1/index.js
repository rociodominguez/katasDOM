// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowMe = document.querySelector(".showme");
console.log(btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const idPillado = document.querySelector("#pillado");
console.log(idPillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemonElements = document.querySelectorAll(".pokemon");
console.log(allPokemonElements);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elementsData = document.querySelectorAll(
  '[data-function="testMe"]'
);
console.log(elementsData);

// 1.6 Usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".

const thirdCharacter = document.querySelectorAll(
  '[data-function="testMe"]'
)[2];
console.log(thirdCharacter);
