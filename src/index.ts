import { sample } from "lodash";
import names from "./foo/baz";
// alert(1)
// console.log(sample(names));

document.body.innerHTML = sample(names) || "hello";
