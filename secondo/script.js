// ● Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo.

const n = document.getElementById("numbers");

let secondi = parseInt(sessionStorage.getItem("secondi")) || 0;

const tempo = function () {
  setTimeout(function () {
    secondi += 1;
    console.log(secondi);
    sessionStorage.setItem("secondi", secondi);

    n.innerText = secondi;
    if (secondi > 99) {
      n.classList.add("novenove");
    }

    tempo();
  }, 1000);
};
tempo();
