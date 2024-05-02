
import "./styles/style.css"
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import ProjectService from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import TaskService from "./services/TaskService"

import taskMockData from "./data/taskMockData.json"

import Button from "./components/ui/Button"
import { reRenderTasks, displayTasks, cleanTaskPanel } from "./components/UIRenderer"

import Modal from "./components/ui/Modal"



const body = document.querySelector("body")
const tasksSection = document.createElement("section")

const newProjects = ["patucasa", "sabrosuraIntensa", "esquicités"]
const projectService = new ProjectService()
const taskListService = new TaskListService()
const taskService = new TaskService()


const createTaskButton = Button("Create Task", () => {
    taskService.createTask({ name: "tarea 5" })
    reRenderTasks()
})


function handleTaskCreationFormSubmit(e) {

    e.preventDefault()

    const myformData = new FormData(e.target)
    const formDataOjb = Object.fromEntries(myformData.entries())
    console.log(formDataOjb)
}

window.projectService = projectService;
window.taskListService = taskListService;
window.taskService = taskService

body.appendChild(createTaskButton)
body.appendChild(tasksSection)
body.appendChild(Modal(handleTaskCreationFormSubmit))


newProjects.forEach(project => projectService.createProject(project))

taskMockData.forEach(task => taskService.createTask(new Task(task.name, task.description, task.dueDate, task.isImportant, task.id)))


displayTasks()


const taskList = new TaskList("hola")
const project = new Project("Proyecto")

taskService.readTasks().forEach(task => project.addTask(task))

taskList.addTask({ name: "hola", taskId: 2, status: true })




