// currently third part packages frmo npm are not available due to issue:
// https://github.com/bazelbuild/rules_typescript/issues/103
// import {sample} from 'lodash';

import React from "react";
import ReactDOM from "react-dom";

import Card from "./lib/Card/Card";

export default class App {
  constructor() {
    ReactDOM.render(
      <div>
        <Card></Card>
      </div>,
      document.querySelector("#app")
    );
  }
}
