
import "./styles/style.css"
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import ProjectService from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import TaskService from "./services/TaskService"

import taskMockData from "./data/taskMockData.json"
import projectMockData from "./data/projectMockData.json"
import listsMockData from "./data/listsMockData.json"

import generateUniqueId from "./utils/generateUniqueId"

import Button from "./components/ui/Button"
import { reRenderTasks, displayTasks, displayProjects, displayTaskLists } from "./components/UIRenderer"

import taskListsIds, { consoleTest } from "./data/taskListsIds"

import Modal from "./components/ui/Modal"

const createTaskModal = Modal(handleTaskCreationFormSubmit)

const body = document.querySelector("body")
const tasksSection = document.createElement("section")
const projectSection = document.createElement("section")
const taskListSection = document.createElement("section")

const main = document.createElement("main")

const styles = {
    main: ["flex"]
}

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

main.classList.add(...styles.main)

body.appendChild(createTaskButton)
body.appendChild(main)
main.appendChild(projectSection)
main.appendChild(taskListSection)
main.appendChild(tasksSection)
body.appendChild(createTaskModal)


console.log(taskListsIds)

taskMockData.forEach(task => taskService.createTask(new Task(task.name, task.description, task.dueDate, task.isImportant, generateUniqueId(), task.isCompleted, taskListsIds[0])))
projectMockData.forEach(project => projectService.createProject(new Project(project.name, generateUniqueId(), project.color, taskListsIds)));
listsMockData.forEach(list => taskListService.createTaskList(new TaskList(list.name, "", generateUniqueId())))

displayTasks()
displayProjects(projectSection)
displayTaskLists(taskListSection)

consoleTest()