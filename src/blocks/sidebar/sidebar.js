import ready from "../../js/utils/documentReady.js";

const сfSidebar = (() => {
  const $navMain = document.querySelector('.nav') || false
  const $socialNetwork = document.querySelector('.social-network') || false
  const $sidebarBurger = document.querySelector('.sidebar-burger') || false
  const $sidebarPanel = document.querySelector('.sidebar-slideout') || false

  const init = () => {
    try {
      if ($sidebarPanel !== false) {
        build()
      }
    } catch (error) {
      console.error('#cfSidebar', error.message)
    }
  }

  const build = () => {
    const navMob = $navMain.cloneNode(true);
    const socialMob = $socialNetwork.cloneNode(true);

    navMob.classList.add('sidebar-menu')
    navMob.classList.remove('--desktop')

    socialMob.classList.add('sidebar-social-network')
    socialMob.classList.remove('--desktop')

    // output main
    $sidebarPanel.querySelector('.sidebar-slideout__main').insertAdjacentHTML(
      'afterbegin',
      `
            ${navMob.outerHTML}
            <a
                class="button sidebar-slideout__help"
                href="#"
                title="Хочу помочь"
                aria-label="Хочу помочь"
            >
                <svg class="icon icon--left color-icon-4">
                  <use href="./img/svgSprite.svg#icon__heart-1"></use>
                </svg>
                Хочу помочь
            </a>
        `
      );

    // output footer
    $sidebarPanel.querySelector('.sidebar-slideout__footer').insertAdjacentHTML(
      'afterbegin',
      socialMob.outerHTML
    );
  };

  return { init }
})()

window.сfSidebar = сfSidebar

ready(() => сfSidebar.init());
