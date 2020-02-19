// import _ from "lodash";
// import printMe from "./print.js";

// function component() {
//   var element = document.createElement("div");
//   var btn = document.createElement("button");
//   element.innerHTML = _.join(["hello", "webpack"], " ");

//   btn.innerHTML = "Click me and check the console!";
//   btn.onclick = printMe;
//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept("./print.js", function() {
//     console.log("Accepting the updated printMe module!");
//     printMe();
//   });
// }

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
