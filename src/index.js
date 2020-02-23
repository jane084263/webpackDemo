import _ from "lodash";
import "babel-polyfill";
// import { file, parse } from "./src/global.js";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = join(["hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  // btn.onclick = printMe;
  element.appendChild(btn);
  console.log(111111);
  console.log("file", file);
  console.log("parse", parse);

  return element;
}

document.body.appendChild(component());
