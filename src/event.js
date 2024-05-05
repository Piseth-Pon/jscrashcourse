export default function event() {

  const randomBtn = document.querySelector("#randomBtn")
  const body = document.querySelector("body")

  randomBtn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    randomBtn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    randomBtn.textContent = `rgb(${red}, ${green}, ${blue})`

  })


}