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
    const submitButton = document.createElement("button")
    const closebutton = document.createElement("button")

    dialog.classList.add(...styles.dialog)
    form.classList.add(...styles.form)

    closebutton.setAttribute("type", "button")

    dialog.appendChild(form)
    form.appendChild(taskNameInput)
    form.appendChild(descriptionInput)
    form.appendChild(closebutton)
    form.appendChild(submitButton)

    submitButton.innerText = "Crear tarea"
    closebutton.innerText = "Close"

    closebutton.addEventListener("click", () => {
        dialog.close()
    })

    form.addEventListener("submit", (e) => {
        onSubmit(e)
        form.reset()
        dialog.close()
    }
    )

    return dialog
}