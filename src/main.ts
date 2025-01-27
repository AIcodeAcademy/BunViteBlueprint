import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import "./style.css";

// Change the tech stack here with your own content
const techStack = import.meta.env.VITE_TECH_STACK;

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("Could not find #app element");
const html = String.raw;
appElement.innerHTML = html`
  ${Nav()}
  <article>
    <h1>${techStack}</h1>
    <p>
      Run by <a href="https://bun.sh" target="_blank">Bun</a>
    </p>
    <p>
      Packed by <a href="https://vitejs.dev" target="_blank">Vite</a>
    </p>
    <p>
      Style by <a href="https://picocss.com" target="_blank">Pico CSS</a>
    </p>
  </article>
  ${Footer()}
`;
