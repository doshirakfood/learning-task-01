import ready from "../../js/utils/documentReady.js";

const сfWelcome = (() => {
  var $el = null,
      $slider = null,
      $slides = null;

  const init = () => {
    try {
      $el = document.querySelector('.welcome')
      $slider = $el.querySelector('.welcome__slider')
      $slides = Array.from($slider.querySelectorAll('.welcome-slide:not(.splide__slide--clone)'))

      events();
    } catch (error) {
      console.error('#сfWelcome: ', error.message)
    }
  }

  const events = () => {

    // event slider
    BasicSlider.on($slider, {
      event: 'moved',
      listener: (newIndex, prevIndex, destIndex) => {
        let colorMain = $slides[newIndex].getAttribute('data-color'),
            colorsBlobArray = $slides[newIndex].getAttribute('data-colors-blob').split(',')

        $el.setAttribute(
          'style',
          `
            --welcome-bg-color: ${colorMain};
            --welcome-fill-blob-primary: ${colorsBlobArray[0]};
            --welcome-fill-blob-secondary: ${colorsBlobArray[1]};
            `
        )
      }
    })

  }

  return { init };
})();

window.сfWelcome = сfWelcome;

ready(() => сfWelcome.init())
