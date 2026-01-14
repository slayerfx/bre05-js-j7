let url = "https://maridoucet.sites.3wa.io/user-api/create-user";

let formData = new FormData();
formData.append("username", "Loulou");
formData.append("firstName", "Louenn");
formData.append("lastName", "Penanchoat");
formData.append("email", "louenn.penanc-hoat@3wa.fr");

let body = {
  method: "POST",
  body: formData,
};

fetch(url, body)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
