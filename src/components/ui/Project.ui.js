export default function ProjectUI(project) {
    const article = document.createElement("article")
    const h3 = document.createElement("h3")



    h3.innerText = project.name

    article.appendChild(h3)

    return article
}