
import "./styles/style.css"
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import ProjectService from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import TaskService from "./services/TaskService"

import TaskUI from "./components/ui/Task.ui"
import Button from "./components/ui/Button"


const taskData = [
    { name: "tarea1", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea2", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea3", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea4", description: "mi descripción", dueDate: "mañana", isImportant: true },

]
const tareasDivertidas = []


const body = document.querySelector("body")
const tasksSection = document.createElement("section")

const newProjects = ["patucasa", "sabrosuraIntensa", "esquicités"]
const projectService = new ProjectService()
const taskListService = new TaskListService()
const taskService = new TaskService()


const createTaskButton = Button("Create Task", () => {
    taskService.createTask({ name: "tarea 5" })
    diplayTasks()
})

window.projectService = projectService;
window.taskListService = taskListService;
window.taskService = taskService

body.appendChild(createTaskButton)
body.appendChild(tasksSection)


newProjects.forEach(project => projectService.createProject(project))
// console.log(projectService.readProjects())

taskData.forEach(task => tareasDivertidas.push(new Task(task.name, task.description, task.dueDate, task.isImportant)))

// console.table(new Task(taskData[0].name, taskData[0].description, taskData[0].dueDate, taskData[0].isImportant))
// console.table(tareasDivertidas)

function diplayTasks() {
    cleanTaskPanel()
    tareasDivertidas.forEach(task => {
        const taskUI = TaskUI(task)
        tasksSection.appendChild(taskUI)
    })

}

function cleanTaskPanel() {
    tasksSection.innerHTML = ""
}

diplayTasks()


const taskList = new TaskList("hola")
const project = new Project("Proyecto")

tareasDivertidas.forEach(task => project.addTask(task))

taskList.addTask({ name: "hola", taskId: 2, status: true })

// console.log("pendientes: ", taskList.getPendingTasks())
// console.log("completadas: ", taskList.getCompletedTasks())

