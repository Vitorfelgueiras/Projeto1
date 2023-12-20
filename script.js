function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver o light mode, adiciona a imagem
    img.setAttribute("src", "./assets/gabi2.png")
  } else {
    img.setAttribute("src", "./assets/gabi1.png")
  }
}