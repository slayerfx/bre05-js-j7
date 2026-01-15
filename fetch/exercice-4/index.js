let url = "https://maridoucet.sites.3wa.io/user-api/user/18";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("username").textContent = data.data.username;
    document.getElementById("fullname").textContent =
      data.data.firstName + " " + data.data.lastName;
    document.getElementById("email").textContent = data.data.email;
  })
  .catch((err) => console.error(err));
