import Input from "./Input"

const styles = {
    dialog: ["border", "border-solid", "border-black"],
    form: ["flex", "flex-col"]
}

export default function Modal(onSubmit) {
    const dialog = document.createElement("dialog")
    const form = document.createElement("form")
    const taskNameInput = Input("task", true)
    const descriptionInput = Input("description")
    const button = document.createElement("button")

    dialog.classList.add(...styles.dialog)
    form.classList.add(...styles.form)

    dialog.setAttribute("open", "")


    dialog.appendChild(form)
    form.appendChild(taskNameInput)
    form.appendChild(descriptionInput)
    form.appendChild(button)

    button.innerText = "Crear tarea"

    form.addEventListener("submit", onSubmit)

    return dialog
}