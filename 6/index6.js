// Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

document.addEventListener('DOMContentLoaded', () => {
    const elementToRemove = document.querySelector('.fn-remove-me');
    if (elementToRemove) elementToRemove.remove();
  });
  