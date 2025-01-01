export function init() {
  const links = document.querySelectorAll(".header__navbar__link");

  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      const linkActiveClass = "header__navbar__link--active";
      links.forEach((link) => {
        link.classList.remove(linkActiveClass);
      });
      element.classList.add(linkActiveClass);
    });
  });
}
