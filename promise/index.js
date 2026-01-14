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
