// currently third part packages frmo npm are not available due to issue:
// https://github.com/bazelbuild/rules_typescript/issues/103
// import {sample} from 'lodash';

import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting/greeting";

export default class App {
  constructor() {
    ReactDOM.render(
      <div>
        <Greeting msg="dude" />
        <Greeting />
      </div>,
      document.querySelector("#app")
    );
  }
}
