export default function ProjectUI(project) {
    const details = document.createElement("details")
    const summary = document.createElement("summary")


    summary.innerText = project.name
    details.appendChild(summary)

    project.taskList.forEach(task => {
        const p = document.createElement("p")
        p.innerText = task
        details.appendChild(p)
    })
    details.style.backgroundColor = project.color

    return details
}