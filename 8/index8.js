document.addEventListener('DOMContentLoaded', () => {
    const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
    const printHereDiv = document.querySelector('[data-function="printHere"]');
  
    if (printHereDiv) {
      const ulElement = document.createElement('ul');
  
      places.forEach(place => {
        const liElement = document.createElement('li');
        liElement.textContent = place;
        ulElement.appendChild(liElement);
      });
  
      printHereDiv.appendChild(ulElement);
    }
  });
  