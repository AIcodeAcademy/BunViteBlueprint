import "./style.css";


const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("Could not find #app element");
const html = String.raw;
appElement.innerHTML = html`
  <div>
    <a href="https://vite.dev" target="_blank">
      <span class="logo">Blueprint</span>
    </a>
      <article>
      <h1>Bun Vite </h1>
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
  </div>
`;
