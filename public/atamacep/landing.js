const featureButtons = document.querySelectorAll('[data-screen]');
const screen = document.getElementById('stage-image');
const caption = document.getElementById('screen-caption');

for (const button of featureButtons) {
  button.addEventListener('click', () => {
    for (const feature of featureButtons) {
      feature.setAttribute('aria-pressed', String(feature === button));
    }
    screen.src = '/media/atamacep-web-' + button.dataset.screen + '.webp';
    screen.alt = button.dataset.alt;
    caption.textContent = button.dataset.caption;
  });
}
