window.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("username");

  if (username === null) {
    const nom = window.prompt("veuillez saisir votre nom !");
    if (nom) {
      sessionStorage.setItem("username", nom);
    }
  } else {
    window.alert(username);
  }
});
