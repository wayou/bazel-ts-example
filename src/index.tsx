import React from "react";
import ReactDOM from "react-dom";
import { AppBar } from "./components/AppBar/AppBar";
import { Footer } from "./components/Footer/Footer";
import { foo } from "./foo";
import styles from "./index.css";

ReactDOM.render(
  <div className={styles.myapp}>
    <AppBar />
    <div className="body">
      <h1>Allo, {foo}</h1>
    </div>
    <Footer />
  </div>,
  document.querySelector("#root")
);
