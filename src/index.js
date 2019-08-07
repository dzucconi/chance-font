import * as FONTS from "./lib/fonts";

const sample = xs => xs[Math.floor(Math.random() * xs.length)];

export { FONTS };
export default (kind = "all") => sample(FONTS[kind.toUpperCase()]);
