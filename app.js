const toggleContainer = document.querySelector(".toggle")
const toggleBtn = document.querySelector(".toggle-btn")
const container = document.querySelector(".slider-container")
const value = document.querySelector(".value")

const slider = container.querySelector(".slider")
const thumb = container.querySelector(".slider-thumb")
const progress = container.querySelector(".progress")

toggleContainer.addEventListener("click", () => {
    toggleBtn.classList.toggle("slide")
})

function customSlider(){
    const maxVal = slider.getAttribute("max")
    const val = (slider.value / maxVal) * 100 + "%"

    value.innerHTML = `$${slider.value}`
    progress.style.width = val
    thumb.style.left = val
}

customSlider()

slider.addEventListener("input", () => {
    customSlider()
})