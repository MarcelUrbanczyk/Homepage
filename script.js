{
  const themeSwitchElement = document.getElementById("themeSwitch");

  const themeSwitching = () =>{
    const movieLinks = document.querySelectorAll(".sectionMovies__a")
    const body = document.getElementById("body");
    const separator = document.querySelectorAll(".main__separator");
    themeSwitchElement.classList.toggle("light");
    themeSwitchElement.classList.toggle("themeSwitch--opacityDark");
    body.classList.toggle("body--dark");
    separator.forEach((separator) => {
      separator.classList.toggle("main__separator--darkTheme");
    });
    movieLinks.forEach((movieLinks) => {
      movieLinks.classList.toggle("sectionMovies__a--darkTheme");
    });
  }
  
 themeSwitchElement.addEventListener('click',themeSwitching)

}