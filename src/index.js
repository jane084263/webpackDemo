import _ from "lodash";
import "./style.css";
import Cute from "./cute.jpg";
import Data from "./data.xml";

function component() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add("hello");
  var myIcon = new Image();
  myIcon.src = Cute;

  var spanEL = document.createElement("span");
  spanEL.innerHTML = "&#xe720;";
  spanEL.classList.add("m_buy");

  element.appendChild(myIcon);
  element.appendChild(spanEL);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
