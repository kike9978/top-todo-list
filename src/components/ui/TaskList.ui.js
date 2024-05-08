export default function TaskListUI(taskList) {
    const article = document.createElement("article")
    const p = document.createElement("p")
    const id = document.createElement("p")
    p.innerText = taskList.name
    id.innerText = taskList.id
    article.appendChild(p)
    article.appendChild(id)
    article.style.backgroundColor = taskList.color

    article.setAttribute("data-id", taskList.id)

    return article
}