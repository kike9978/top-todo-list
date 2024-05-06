import Button from "./Button"

const styles = {
    article: ["border", "border-black", "border-solid", "rounded-sm", "p-2"],
    h2: ["text-2xl", "font-bold"],
    buttonContainer: ["flex", "gap-2"]
}

export default function TaskUI(task, onDelete, onChange) {

    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    const nameInput = document.createElement("input")
    const description = document.createElement("p")
    const buttonContainer = document.createElement("div")
    const completeCheck = document.createElement("input")

    const editButton = Button("Edit");
    const deleteButton = Button("Delete", () => onDelete());
    completeCheck.addEventListener("change", () => onChange())



    article.classList.add(...styles.article)
    h2.classList.add(...styles.h2)
    buttonContainer.classList.add(...styles.buttonContainer)

    article.appendChild(h2)
    if (task.description) {

        article.appendChild(description)
    }
    article.appendChild(editButton)
    article.appendChild(deleteButton)
    article.appendChild(buttonContainer)
    article.appendChild(completeCheck)

    h2.appendChild(nameInput)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    nameInput.setAttribute("value", task.name)
    description.innerText = task.description
    completeCheck.setAttribute("type", "checkbox")

    if (task.isCompleted) {
        completeCheck.setAttribute("checked", "")
    }

    return article

}