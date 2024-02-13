
alert ('You are welcome!!!');

function myFunction() {
  document.getElementById("get").innerHTML = "Hello World!!";
  document.getElementById("set").innerHTML = "How are you?";
}

var person = prompt("Please enter your name", "Lincoln jrn");
if (person != null) {
    document.getElementById("dem").innerHTML =
    "Hello " + person + "! How are you today?";
}

function myFunction() {
  var txt = "Who Are You";
  if (document.getElementById("we").validity.rangeUnderflow) {
     txt = "Value too small";
  }
  document.getElementById("jo").innerHTML = txt;
}

var x = 0.1;
var y = 0.2;
var z = x + y            // the result in z will not be 0.3
if (z == 0.3)
/*
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (inpObj.checkValidity() == false) {
      document.getElementById("mew").innerHTML = inpObj.validationMessage
   }
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == null || x == "") {
      alert("Name must be filled out");
      return true;
  }

}
document.getElementById('p').innerHTML

function createBuffer(){
var name = prompt("Enter a name for the new buffer", "");
if (name)
  removeBuffer(name);
}


try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("mm").innerHTML = err.message;
}

var r = confirm("Are you Sure ?");
if (r == true) {
    x = "You pressed OK!";
} else {
    x = "You pressed Cancel!";
}

function myFunction(a, b) {
  return a * b;
}
document.querySelector(".q").innerHTML = myFunction(4, 3);

var msec = Date.parse("March 21, 2012");
document.getElementById("of").innerHTML = msec;



var d = new Date();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     document.getElementById("if").innerHTML = days[d.getDay()];

*/

     var d = new Date();
     document.getElementById("me").innerHTML = d.getFullYear();
     var d = new Date();
     document.getElementById("us").innerHTML = d.getDay();
     var d = new Date();
     document.getElementById("on").innerHTML = d.getHours();