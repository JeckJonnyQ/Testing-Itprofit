import "./index.html";
import "./index.scss";

import { testModule } from "./modules/test";
console.log(testModule(5, 6));

const app = document.getElementById("app");
app.innerHTML = `Hello World`;
