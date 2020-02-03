import _ from "lodash";
import "./style.css";
import Cute from "./cute.jpg";
function component() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add("hello");
  var myIcon = new Image();
  myIcon.src = Cute;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
