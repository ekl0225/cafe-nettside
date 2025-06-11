document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("close");
    menu.classList.toggle("overlay");
  });

  // Lukk menyen når man klikker på en lenke
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("close");
      menu.classList.remove("overlay");
    });
  });
});
