
import "./styles/style.css"
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import ProjectService from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import TaskService from "./services/TaskService"

import taskMockData from "./data/taskMockData.json"
import projectMockData from "./data/projectMockData.json"

import generateUniqueId from "./utils/generateUniqueId"

import Button from "./components/ui/Button"
import { reRenderTasks, displayTasks, displayProjects } from "./components/UIRenderer"

import Modal from "./components/ui/Modal"

const createTaskModal = Modal(handleTaskCreationFormSubmit)

const body = document.querySelector("body")
const tasksSection = document.createElement("section")
const projectSection = document.createElement("section")

tasksSection.id = "tasks-section"

const projectService = new ProjectService()
const taskListService = new TaskListService()
const taskService = new TaskService()

const createTaskButton = Button("Create Task", () => {
    createTaskModal.showModal()
})

function handleTaskCreationFormSubmit(e) {

    e.preventDefault()

    const myformData = new FormData(e.target)
    const formDataOjb = Object.fromEntries(myformData.entries())
    console.log(formDataOjb)
    taskService.createTask(new Task(formDataOjb.task, formDataOjb.description, formDataOjb.dueDate, formDataOjb.isImportant, generateUniqueId(), formDataOjb.isCompleted))
    reRenderTasks(tasksSection)


}

window.projectService = projectService;
window.taskListService = taskListService;
window.taskService = taskService

body.appendChild(createTaskButton)
body.appendChild(projectSection)
body.appendChild(tasksSection)
body.appendChild(createTaskModal)

taskMockData.forEach(task => taskService.createTask(new Task(task.name, task.description, task.dueDate, task.isImportant, generateUniqueId(), task.isCompleted)))
projectMockData.forEach(project => projectService.createProject(new Project(project.name, generateUniqueId())));

displayTasks()
displayProjects(projectSection)


console.log(projectService.readProjects())
console.log(projectService.readProjects()[0].id)
console.log(projectService.readProjects()[0])

