function calculate(oper) {
  var result;
  var inputOne = document.getElementById("inputOne").value;
  var inputTwo = document.getElementById("inputTwo").value;
  if (oper == 1) result = parseInt(inputOne) + parseInt(inputTwo);
  if (oper == 2) result = parseInt(inputOne) - parseInt(inputTwo);
  if (oper == 3) result = parseInt(inputOne) * parseInt(inputTwo);
  if (oper == 4) result = parseInt(inputOne) / parseInt(inputTwo);
  document.getElementById("output").innerHTML = result;
}
