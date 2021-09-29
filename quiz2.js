//Samuel Koop's Quiz 2 Javascript for Mrs. Lambey's Advanced Web 2021
function showMore() {
  var y = document.getElementById("extra-text");
    y.style.display = "block";
}

function showLess() {
  var x = document.getElementById("extra-text");
    x.style.display = "none";
}

function turnGreen() {
  var shrek = document.getElementById("extra-text");
    shrek.style.backgroundColor = "green";
}

function turnBlue() {
  var smurf = document.getElementById("extra-text");
    smurf.style.backgroundColor = "rgb(102 153 204 / 0.8)";
}

function validateForm() {
  let a = document.forms["customerForm"]["name"].value;
  if (a == "") {
    alert("Name must be filled out");
    return false;
  }

  let b = document.forms["customerForm"]["email"].value;
  if (b == "") {
    alert("Email must be filled out");
    return false;
  }

  let c = document.forms["customerForm"]["message"].value;
  if (c == "") {
    alert("Message must be filled out");
    return false;
  }
}
