let user = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};

document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("user") === null) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    let userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(userData);
  }
});
