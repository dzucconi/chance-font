import chanceFont from "chance-font";

const el = document.getElementById("root");

const render = () => {
  const style = `font-family: ${chanceFont()};`;

  el.innerHTML = `
    <div class="Example" style="${style}">
      A real degree of freedom
    </div>
    <pre>${style}</pre>
  `;
};

setInterval(render, 200);
