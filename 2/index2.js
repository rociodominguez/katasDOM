// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const firstDiv = document.createElement('div');
document.body.appendChild(firstDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const secondDiv = document.createElement('div');
const pInsidesecondDiv = document.createElement('p');
secondDiv.appendChild(pInsidesecondDiv);
document.body.appendChild(secondDiv);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const thirdDiv = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const pInsidethirdDiv = document.createElement('p');
  thirdDiv.appendChild(pInsidethirdDiv);
}
document.body.appendChild(thirdDiv);

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p = document.createElement('p');
p.textContent = 'Soy dinámico!';
document.body.appendChild(p);

// 1.5 Inserta en el div con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const fourthDiv = document.querySelector('.fn-insert-here');
fourthDiv.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach((app) => {
  const liElement = document.createElement('li');
  liElement.textContent = app;
  ul.appendChild(liElement);
});
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const toRemove = document.querySelectorAll('.fn-remove-me');
toRemove.forEach((element) => element.remove());

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const secondP = document.createElement('p');
secondP.textContent = 'Voy en medio!';
const divBefore = document.body.querySelectorAll('div')[0];
const divAfter = document.body.querySelectorAll('div')[1];
document.body.insertBefore(secondP, divAfter);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsInsertHere = document.querySelectorAll('.fn-insert-here');
divsInsertHere.forEach((div) => {
  const pInDiv = document.createElement('p');
  pInDiv.textContent = 'Voy dentro!';
  div.appendChild(pInDiv);
});