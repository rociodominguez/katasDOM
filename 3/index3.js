// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesList = document.createElement('ul');
countries.forEach((country) => {
  const li = document.createElement('li');
  li.textContent = country;
  countriesList.appendChild(li);
});

document.body.appendChild(countriesList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const toRemove = document.querySelector('.fn-remove-me');
toRemove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];
const dataFunction = document.querySelector('[data-function="printHere"]');
const carsListElement = document.createElement('ul');
cars.forEach((car) => {
  const liElement = document.createElement('li');
  liElement.textContent = car;
  carsListElement.appendChild(liElement);
});

dataFunction.appendChild(carsListElement);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const paises = [
  {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
];

paises.forEach((pais) => {
  const countryDiv = document.createElement('div');
  const titleElement = document.createElement('h4');
  titleElement.textContent = pais.title;
  const imgElement = document.createElement('img');
  imgElement.src = pais.imgUrl;
  countryDiv.appendChild(titleElement);
  countryDiv.appendChild(imgElement);
  document.body.appendChild(countryDiv);
});