import ready from "../../js/utils/documentReady.js";

const сfWelcome = (() => {
  let $el = null;
  let $slider = null;
  let $slides = null;

  const init = (el) => {
    try {
      $el = el;
      $slider = $el.querySelector(".welcome__slider");
      $slides = Array.from($slider.querySelectorAll(".welcome-slide:not(.splide__slide--clone)"));

      events();
    } catch (error) {
      console.error("#сfWelcome: ", error.message);
    }
  };

  const events = () => {
    // event slider
    BasicSlider.on($slider, {
      event: "moved",
      listener: (newIndex) => {
        let colorMain = $slides[newIndex].getAttribute("data-color"),
          colorsBlobArray = $slides[newIndex].getAttribute("data-colors-blob").split(",");

        $el.setAttribute(
          "style",
          `
            --welcome-bg-color: ${colorMain};
            --welcome-fill-blob-primary: ${colorsBlobArray[0]};
            --welcome-fill-blob-secondary: ${colorsBlobArray[1]};
            `,
        );
      },
    });
  };

  return { init };
})();

ready(() => {
  const welcomeMain = document.querySelector(".welcome") || false;

  if (welcomeMain !== false) {
    сfWelcome.init(welcomeMain);
  }
});
