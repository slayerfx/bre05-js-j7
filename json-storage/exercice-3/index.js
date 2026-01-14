let data = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};

let str =
  '{"firstName":"Colonel","lastName":"Sanders","motto":"Il est bon mon poulet"}';

document.addEventListener("DOMContentLoaded", function () {
  let jsonString = JSON.stringify(data);
  console.log(jsonString);

  let obj = JSON.parse(str);
  console.log(obj);
});
