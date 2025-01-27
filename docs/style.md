# Style with PicoCSS

```bash
# Install PicoCSS
bun i @picocss/pico
# Install fonts
bun i @fontsource/fira-mono
bun i @fontsource/major-mono-display
bun i @fontsource/tomorrow
```
## Global style
```css
@import "@picocss/pico";
@import "@fontsource/tomorrow";
@import "@fontsource/major-mono-display";
@import "@fontsource/fira-mono";

:root {
	--pico-font-family: "Fira Mono", Consolas, monospace;
	--pico-font-family-emoji: "Major Mono Display", Consolas, monospace;
	--pico-font-family-sans-serif: Tomorrow, Roboto, Helvetica, Arial, sans-serif;
	--pico-font-family-monospace: "Fira Mono", Consolas, monospace;
	--pico-border-radius: 0rem;
	--ab-green: #47d469;
	--ab-cyan: #33c1ee;
	--ab-blue: #0783d8;
	--ab-dark-blue: #0e4d90;
	--ab-dark-green: #063831;
	--ab-white: #fff;
}

[data-theme=light],
:root:not([data-theme=dark]) {
	--pico-color: var(--ab-dark-green);
	--pico-primary: var(--ab-green);
  --pico-secondary: var(--ab-cyan);
}
[data-theme=dark]{
  --pico-text-selection-color: var(--ab-dark-green);
  --pico-primary: var(--ab-green);
  --pico-code-color: var(--ab-blue);
  --pico-code-background: var(--ab-dark-green);
  --pico-primary-background: var(--ab-dark-green);
  --pico-primary-underline: var(--ab-green);
  --pico-primary-hover: var(--ab-cyan);
  --pico-primary-hover-background: var(--ab-dark-blue);
  --pico-primary-focus: var(--ab-green);
  --pico-primary-inverse: #fff;
}
```
