

export default function Modal() {
    const dialog = document.createElement("dialog")
    const form = document.createElement("form")
    const input = document.createElement("input")
    const button = document.createElement("button")

    dialog.classList.add("border", "border-solid", "border-black")

    dialog.setAttribute("open", "")
    input.setAttribute("name", "test")

    dialog.appendChild(form)
    form.appendChild(input)
    form.appendChild(button)

    button.innerText = "Crear tarea"

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const myformData = new FormData(e.target)
        const formDataOjb = Object.fromEntries(myformData.entries())
        console.log(formDataOjb)


    })

    return dialog
}