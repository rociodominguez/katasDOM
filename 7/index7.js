document.addEventListener('DOMContentLoaded', () => {
    const printHereDiv = document.querySelector('[data-function="printHere"]');
    if (printHereDiv) printHereDiv.textContent = 'Hello, World!';
  });  