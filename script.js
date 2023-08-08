let themeSwitchElement = document.getElementById("themeSwitch");
let body = document.getElementById("body");
let separator = document.querySelectorAll(".main__separator");

themeSwitchElement.addEventListener("click", () => {
  themeSwitchElement.classList.toggle("light");

  body.classList.toggle("body--dark");

  themeSwitchElement.classList.toggle("themeSwitch--opacityDark");

  separator.forEach((separator) => {
    separator.classList.toggle("main__separator--lightTheme");
    separator.classList.toggle("main__separator--darkTheme");
  });
});
