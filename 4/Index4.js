// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click.

const btn = document.createElement('button');
btn.id = 'btn';
btn.textContent = 'Click me';

document.body.appendChild(btn);

btn.addEventListener('click', (ev) => {
  console.log('Evento de clic:', ev);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector('.focus');
input.addEventListener('focus', (ev) => {
  console.log('Valor del input en focus:', ev.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
  console.log('Valor del input en input:', event.target.value);
});