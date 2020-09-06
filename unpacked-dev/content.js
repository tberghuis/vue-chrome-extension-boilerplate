console.log("hello content.js");

var elemDiv = document.createElement("div");
elemDiv.id = "app";
document.body.appendChild(elemDiv);



// This only to happen in content.dev.js
evalVueScripts("https://localhost:8080/js/chunk-vendors.js");
evalVueScripts("https://localhost:8080/js/app.js");

function evalVueScripts(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = eval(xhr.responseText);
    }
  };
  xhr.send();
}
