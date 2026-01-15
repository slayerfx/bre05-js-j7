let url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://maridoucet.sites.3wa.io/user-api/users");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let tbody = document.querySelector("tbody");
    for (let i = 0; i < data.data.length; i++) {
      let tr = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdIdtext = document.createTextNode(data.data[i].id);
      tdId.appendChild(tdIdtext);
      tr.appendChild(tdId);
      let tdUsername = document.createElement("td");
      let tdUsernametext = document.createTextNode(data.data[i].username);
      tdUsername.appendChild(tdUsernametext);
      tr.appendChild(tdUsername);
      let tdFirstname = document.createElement("td");
      let tdFirstnametext = document.createTextNode(data.data[i].firstName);
      tdFirstname.appendChild(tdFirstnametext);
      tr.appendChild(tdFirstname);
      let tdLastname = document.createElement("td");
      let tdLastnametext = document.createTextNode(data.data[i].lastName);
      tdLastname.appendChild(tdLastnametext);
      tr.appendChild(tdLastname);
      let tdEmail = document.createElement("td");
      let tdEmailtext = document.createTextNode(data.data[i].email);
      tdEmail.appendChild(tdEmailtext);
      tr.appendChild(tdEmail);
      tbody.appendChild(tr);
    }
  })
  .catch((error) => console.log(error));

// VERSION AVEC innerHTML (plus courte)
// for (let i = 0; i < data.data.length; i++) {
//   let tr = document.createElement("tr");
//   tr.innerHTML = `
//     <td>${data.data[i].id}</td>
//     <td>${data.data[i].username}</td>
//     <td>${data.data[i].firstName}</td>
//     <td>${data.data[i].lastName}</td>
//     <td>${data.data[i].email}</td>
//   `;
//   tbody.appendChild(tr);
// }
