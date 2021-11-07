function calculate() {
  var inputOne = document.getElementById("inputOne").value;
  var inputTwo = document.getElementById("inputTwo").value;
  var result = parseInt(inputOne) + parseInt(inputTwo);
  document.getElementById("output").innerHTML = result;
}
