import React from "react";
import ReactDOM from "react-dom";
import App from "./app/landing/Landing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
