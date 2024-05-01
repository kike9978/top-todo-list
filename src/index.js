/* import "./styles/style.css"

import Project from "./components/Project"
import Task from "./components/Task"
import SystemManager from "./components/App"

const project = Project()
const task = Task()
const systemManager = SystemManager()

console.log(project.projects) 

project.createProject("🦐 Pompis")
console.log(project.projects) 

task.createTask("segunda tarea", "es la segunda tarea de prueba", "hoy", false, [])
console.table(task.tasks) 

console.log(systemManager.filterTasksByProjects())

const sideBar = document.createElement("div")

systemManager.filterTasksByProjects().forEach(entry => {

    console.log("soy el entry: " + entry)

    const div = document.createElement("div")
    const tasksContainer = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.classList.add("text-2xl")

    h2.innerText = entry.project

    div.appendChild(h2)
    div.appendChild(tasksContainer)

    entry.tasks.forEach(task => {

        const taskElem = document.createElement("p")
        taskElem.innerText = task.name
        tasksContainer.appendChild(taskElem)
    })

    sideBar.appendChild(div)
})



const body = document.querySelector("body")
body.appendChild(sideBar)  */

import TaskList from "./components/TaskList"

const taskList = new TaskList("hola")

taskList.addTask({ name: "hola", taskId: 2, status: true })

console.log("pendientes: ", taskList.getPendingTasks())
console.log("completadas: ", taskList.getCompletedTasks())