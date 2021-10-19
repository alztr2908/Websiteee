const subjectGeneral = document.getElementsByClassName(
    "subject-button-general"
)[0]
const subjectSpecialized = document.getElementsByClassName(
    "subject-button-specialize"
)[0]
const subjectContent = document.getElementsByClassName("subject")[0]

// WIP
// Toggle buttons for general and specialized courses

subjectGeneral.addEventListener("click", () => {
    subjectContent.innerHTML = subjectGeneral.textContent
    console.log(subjectGeneral.textContent)
})
subjectSpecialized.addEventListener("click", () => {
    subjectContent.innerHTML = subjectSpecialized.textContent
})
