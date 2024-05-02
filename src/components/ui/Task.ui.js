import Button from "./Button"

const styles = {
    article: ["border", "border-black", "border-solid", "rounded-sm"]
}



export default function TaskUI(task) {

    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    const editButton = Button("Edit");
    const deleteButton = Button("Delete");


    article.classList.add(...styles.article)

    article.appendChild(h2)
    article.appendChild(editButton)
    article.appendChild(deleteButton)

    h2.innerText = task.name

    return article

}