{
  const themeSwitchElement = document.getElementById("themeSwitch");

  const themeSwitching = () =>{
    const body = document.getElementById("body");
    const separator = document.querySelectorAll(".main__separator");
    themeSwitchElement.classList.toggle("light");
    themeSwitchElement.classList.toggle("themeSwitch--opacityDark");
    body.classList.toggle("body--dark");
    separator.forEach((separator) => {
      separator.classList.toggle("main__separator--lightTheme");
      separator.classList.toggle("main__separator--darkTheme");
    });
  }
  
 themeSwitchElement.addEventListener('click',themeSwitching)

}