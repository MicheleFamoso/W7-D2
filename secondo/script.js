// ● Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo.

const timer = document.getElementById("Timer");
const n = document.getElementById("numbers");

let secondi = parseInt(sessionStorage.getItem("secondi")) || 0;
const tempo = function () {
  setTimeout(function () {
    secondi += 1;
    console.log(secondi);
    sessionStorage.setItem("secondi", secondi);
    let contatore = sessionStorage.getItem("secondi");

    n.innerText = secondi;

    tempo();
  }, 1000);
};
tempo();
