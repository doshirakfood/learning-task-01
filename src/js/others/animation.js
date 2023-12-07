import anime from "../libs/anime.min";

const cfAnimations = (() => {
  let $el = null;
  let $options = {};

  const init = (el, options) => {
    const elArray = Array.from(el || document.querySelectorAll(".js-animation"));

    elArray.forEach((variable) => {
      try {
        $el = variable;
        $options = options || JSON.parse(variable.getAttribute("data-animation-options"));

        build();
      } catch (error) {
        console.error("#cfAnimations", error.message);
      }
    });
  };

  const build = () => {
    const animeParams = Object.assign({ targets: $el }, $options);
    const animeInit = anime(animeParams);

    $el.classList.add("animation-init");

    return animeInit;
  };

  return { init };
})();

window.cfAnimations = cfAnimations;

export default cfAnimations;
