import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("Could not find #app element");
const html = String.raw;
appElement.innerHTML = html`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
     raw
    </p>
  </div>
`;

const counterElement = document.querySelector<HTMLButtonElement>("#counter");
if (!counterElement) throw new Error("Could not find #counter element");
setupCounter(counterElement);
