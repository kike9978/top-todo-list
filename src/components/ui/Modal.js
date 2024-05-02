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



    dialog.appendChild(form)
    form.appendChild(taskNameInput)
    form.appendChild(descriptionInput)
    form.appendChild(button)

    button.innerText = "Crear tarea"

    form.addEventListener("submit", (e) => {
        onSubmit(e)
        form.reset()
        dialog.close()
    }
    )

    return dialog
}