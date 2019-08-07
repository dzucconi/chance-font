import chanceFont from "chance-font";

const el = document.getElementById("root");

const render = () => {
  const style = `font-family: ${chanceFont()};`;

  el.innerHTML = `
    <div class="Example" style="${style}">
      Fat Chance John Cage
    </div>
    <pre>${style}</pre>
  `;
};

setInterval(render, 200);
