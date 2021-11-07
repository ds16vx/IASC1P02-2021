var start;

window.onload = (e) => {
  start = new Date();
};

function stopTime() {
  var stop = new Date();
  var time = stop - start.getTime();
  alert("You have been on this page for: " + time / 600 + " seconds");
}
