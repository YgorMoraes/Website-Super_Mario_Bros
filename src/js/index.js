const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")

// botaoTrailer.addEventListener('click', () => {
//   modal.classList.add("aberto")
//   video.setAttribute('src','https://www.youtube.com/embed/Cb4WV4aXBpk')
// })

// botaoFecharModal.addEventListener('click', () => {
// modal.classList.remove("aberto")
// video.setAttribute('src', "")
// })

function alternarModal() {
  modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener('click', () => {
  alternarModal()
  video.setAttribute('src','https://www.youtube.com/embed/Cb4WV4aXBpk')
})

botaoFecharModal.addEventListener('click', () => {
  alternarModal()
video.setAttribute('src', "")
})





