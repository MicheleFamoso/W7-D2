// Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente.

// Recupero il contenuto del form
const user = document.getElementById("User");
const form = document.getElementById("form");
const nameuser = document.getElementById("Name");

//Aggiungo un evento al click del tasto e salvo il dato
const save = document.getElementById("Save");
save.addEventListener("click", function () {
  const usersave = user.value;
  localStorage.setItem("nome", usersave);
  const mostra = localStorage.getItem("nome");
  const nameus = document.createElement("h2");
  nameus.innerText = mostra;
  nameuser.appendChild(nameus);
  form.reset();
});

//Recupero il tasto elimina e aggiungo una funzione che elimina i dati
const del = document.getElementById("Delete");
del.addEventListener("click", function () {
  nameuser.removeChild(nameuser.lastChild);
});
