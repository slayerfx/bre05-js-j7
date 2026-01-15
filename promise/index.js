/*
function testAge(number) {
  return new Promise((resolve, reject) => {
    if (number >= 18) {
      resolve("Autorisation accordée.");
    } else {
      reject("Autorisation refusée.");
    }
  });
}

testAge(42)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

testAge(16)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

*/

function Reduction(age) {
  return new Promise((resolve, reject) => {
    if (age <= 18) {
      resolve("Vous avez accès à la réduction.");
    } else if (age >= 65) {
      resolve("Vous avez accès à la réduction.");
    } else {
      reject("Vous n'avez pas accès à la réduction.");
    }
  });
}

Reduction(15)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

Reduction(69)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

Reduction(25)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
