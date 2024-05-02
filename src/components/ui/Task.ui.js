import Button from "./Button"
import TaskService from "../../services/TaskService"

const taskService = new TaskService();

const styles = {
    article: ["border", "border-black", "border-solid", "rounded-sm"],
    h2: ["text-2xl", "font-bold"],
    buttonContainer: ["flex", "gap-2"]
}

function handleDeleteTask() {
    console.log(taskService.readTasks())
    taskService.deleteTask(1)
    console.log(taskService.readTasks())
}



export default function TaskUI(task) {

    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    const nameInput = document.createElement("input")
    const description = document.createElement("p")
    const buttonContainer = document.createElement("div")

    const editButton = Button("Edit");
    const deleteButton = Button("Delete", handleDeleteTask);



    article.classList.add(...styles.article)
    h2.classList.add(...styles.h2)
    buttonContainer.classList.add(...styles.buttonContainer)

    article.appendChild(h2)
    article.appendChild(description)
    article.appendChild(editButton)
    article.appendChild(deleteButton)
    article.appendChild(buttonContainer)

    h2.appendChild(nameInput)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    nameInput.setAttribute("value", task.name)
    description.innerText = task.description

    return article

}