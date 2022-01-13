const mobileNavbar = () => {
  const activeNavbarButton = document.querySelector(".active-navbar-button");

  function toggleMenu(event) {
    /*Se o tipo do evento for o touchstart ele vai ouvir apenas o touchstart e não ouvir o click, assim não dá problema */
    if (event.type == "touchstart") {
      event.preventdefalut();
    }

    const navBar = document.querySelector(".header-navbar-mobile");
    navBar.classList.toggle("active");
  }

  activeNavbarButton.addEventListener("click", toggleMenu);
  activeNavbarButton.addEventListener(
    "touchstart",
    toggleMenu
  ); /*O evento click demora cerca de 300ms para responder, o touchstart é o mais recomendado para o mobile */
};

export default mobileNavbar;
