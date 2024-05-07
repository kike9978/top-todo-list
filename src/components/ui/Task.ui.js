import Button from "./Button"

const styles = {
    article: ["border", "border-black", "border-solid", "rounded-sm", "p-2"],
    h2: ["text-2xl", "font-bold"],
    nameInput: ["truncate"],
    buttonContainer: ["flex", "gap-2"],
    updateNameButton: ["hidden"]
}

export default function TaskUI(task, onDelete, onChange, onNameSubmit) {

    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    const nameInput = document.createElement("input")
    const description = document.createElement("p")
    const buttonContainer = document.createElement("div")
    const completeCheck = document.createElement("input")
    const form = document.createElement("form")
    const updateNameButton = document.createElement("button")
    const taskListId = document.createElement("p")

    //Events

    const editButton = Button("Edit");
    const deleteButton = Button("Delete", () => onDelete());
    completeCheck.addEventListener("change", () => onChange())
    form.addEventListener("submit", onNameSubmit)



    //Styles

    article.classList.add(...styles.article)
    h2.classList.add(...styles.h2)
    nameInput.classList.add(...styles.nameInput)
    buttonContainer.classList.add(...styles.buttonContainer)
    updateNameButton.classList.add(...styles.updateNameButton)


    //Child appending

    article.appendChild(form)
    form.appendChild(h2)
    form.appendChild(updateNameButton)
    if (task.description) {

        article.appendChild(description)
    }
    article.appendChild(editButton)
    article.appendChild(deleteButton)
    article.appendChild(buttonContainer)
    article.appendChild(completeCheck)
    article.appendChild(taskListId)

    h2.appendChild(nameInput)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    //Attributes

    nameInput.setAttribute("name", "taskName")
    nameInput.setAttribute("value", task.name)
    description.innerText = task.description
    completeCheck.setAttribute("type", "checkbox")
    taskListId.innerText = task.taskListId

    if (task.isCompleted) {
        completeCheck.setAttribute("checked", "")
    }

    return article

}