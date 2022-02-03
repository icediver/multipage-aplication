const { default: VideoPlayer } = require("./modules/playVideo");
const { default: Slider } = require("./modules/slider")

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
})