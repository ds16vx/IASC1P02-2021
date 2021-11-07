window.onload = (e) => {
  var start = new Date();
  var year = start.getFullYear();
  var age;
  var display;
  var input = prompt("What is your age?");
  if (input != null || input != "") {
    age = year - input;
    display = "Your birth year is: " + age;
  } else {
    display = "You entered an invalid input";
  }
  document.getElementById("year").innerHTML = display;
};
