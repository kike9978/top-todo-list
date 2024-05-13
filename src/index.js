
import "./styles/style.css"
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import { createProject, deleteProject, getProjects, readProjects, updateProject } from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import { createTask, deleteTask, getAllTasks, getFilteredTasks, getTaskById, getTasks, getTasksByTaskListId, readSingleTask, readTasks, updateTask } from "./services/TaskService"

import taskMockData from "./data/taskMockData.json"
import projectMockData from "./data/projectMockData.json"
import listsMockData from "./data/listsMockData.json"

import generateUniqueId from "./utils/generateUniqueId"

import Button from "./components/ui/Button"
import { reRenderTasks, displayTasks, displayProjects, displayTaskLists } from "./components/UIRenderer"

import taskListsIds, { consoleTest } from "./data/taskListsIds"

import Modal from "./components/ui/Modal"
import NoWorkResult from "postcss/lib/no-work-result"

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

const taskListService = new TaskListService()

const createTaskButton = Button("Create Task", () => {
    createTaskModal.showModal()
})

function handleTaskCreationFormSubmit(e) {

    e.preventDefault()

    const myformData = new FormData(e.target)
    const formDataOjb = Object.fromEntries(myformData.entries())
    console.log(formDataOjb)

    /* Right Now all tasks are created under the first list id */
    createTask(new Task(formDataOjb.task, formDataOjb.description, formDataOjb.dueDate, formDataOjb.isImportant, generateUniqueId(), formDataOjb.isCompleted, taskListsIds[0]))
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

listsMockData.forEach(list => taskListService.createTaskList(new TaskList(list.name, "", list.id, list.color)))
taskMockData.forEach(task => createTask(new Task(task.name, task.description, task.dueDate, task.isImportant, generateUniqueId(), task.isCompleted, task.taskListId)))
projectMockData.forEach(project => createProject(new Project(project.name, generateUniqueId(), project.taskList)));


displayTasks()
displayProjects(projectSection)
displayTaskLists(taskListSection)

consoleTest()