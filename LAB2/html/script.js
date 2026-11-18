let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function add() {
  let result = parseInt(num1.value) + parseInt(num2.value);
  document.getElementById("result").innerHTML = result;
}

//array
let numbers = [1, 2, 3, "PetongNA", 5];
console.log(numbers[2]);

//object
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  run: function () {
    console.log("The car is running");
  },
};
console.log(car.model);
console.log(car.run());

//jQuery
$(document).ready(() => {
  $("#btnAdd").click(() => {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    let result = parseInt(num1) + parseInt(num2);
    $("#result").html(result);
  });
});
