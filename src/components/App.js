/* import Project from "./Project"
import Task from "./Task"

const task = Task()
const project = Project()

let items = []

function clearItems() {
    items = []
}

export default function SystemManager() {

    function filterTasksByProjects() {
        clearItems()

        project.projects.forEach(entry => {

            items.push({ project: entry["name"], tasks: [] })
        })

        task.tasks.forEach(entry => {

            items.find(item => item.project === entry.project)["tasks"].push(entry)
        })



        return items
    }

    return { filterTasksByProjects }
} */

