const { default: Slider } = require("./modules/slider")

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();
})