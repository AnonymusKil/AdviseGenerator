const btn = document.getElementById("getBtn")
const contain = document.getElementById("container1")
async function getAdvice() {
try {
    const response = await fetch("https://api.adviceslip.com/advice")
    const result = await response.json()
    const htmlTemple = ` <p class="grind">Advice Slip:${result.slip.id}</p>
     <p class="naham">"${result.slip.advice}"</p>`
     contain.innerHTML = htmlTemple
     const grind = contain.querySelector('.grind')
     const naham = contain.querySelector('.naham')
     grind.classList.add('fade-in')
     naham.classList.add('fade-in')
} catch (error) {
  console.log(error)  
}
}
btn.addEventListener("click", getAdvice)
setInterval(getAdvice, 1000)