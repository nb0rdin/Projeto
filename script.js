function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

    //tentativa de setar atributo alt do h    
img.setAttribute("alt", "Foto de Mayk Brito usando óculos escuros")

  } else {
    //se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")

  }
}


