import _ from "lodash";


function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  console.log(111111);

  return element;
}

document.body.appendChild(component());



