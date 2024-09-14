const input = document.getElementById("input")
const input1 = document.getElementsByClassName("input")
const bg = document.querySelector(".bg")
const bg2 = document.querySelector(".bg2")
const bg3 = document.querySelector(".bg3")
const bg4 = document.querySelector(".bg4")
const text = document.querySelector(".text")
n = 5
setInterval(() => {
  if(n < 0) {
    bg.classList.remove("none")
    bg2.classList.remove("none")
    bg3.classList.remove("none")
    bg4.classList.remove("none")
    text.classList.remove("none")
    input.classList.add("none")
  }
  if(n >= 0){
    input.textContent = n
    n--
  }
}, 1000)
