import { createTask, deleteTask, getAllTasks, getFilteredTasks, getTaskById, getTasks, getTasksByTaskListId, readSingleTask, readTasks, updateTask } from "../services/TaskService"
import { createProject, deleteProject, getProjects, readProjects, updateProject } from "../services/ProjectService"
import TaskListService from "../services/TaskListService"
import TaskUI from "./ui/Task.ui"
import ProjectUI from "./ui/Project.ui"
import TaskListUI from "./ui/TaskList.ui"
import Button from "./ui/Button"

const taskListService = new TaskListService()


function displayProjects(projectSection) {
    const fragment = document.createDocumentFragment()
    readProjects().forEach(project => {
        const projectUI = ProjectUI(project)
        fragment.appendChild(projectUI)
    })
    projectSection.appendChild(fragment)
}

function displayTaskLists(taskListSection) {
    const fragment = document.createDocumentFragment()
    taskListService.readTaskLists().forEach(taskList => {
        const taskListUI = TaskListUI(taskList)
        fragment.appendChild(taskListUI)
    })
    taskListSection.appendChild(fragment)
}

function handleDeleteTask(taskId) {

    deleteTask(taskId);
    reRenderTasks();
}

function handleCompleteTask(taskId) {
    const updatedStatus = !readSingleTask(taskId).isCompleted
    updateTask(taskId, { isCompleted: updatedStatus })
    reRenderTasks()
}

function handleUpdateTaskName(e, taskId) {
    e.preventDefault()

    const myformData = new FormData(e.target)
    const formDataOjb = Object.fromEntries(myformData.entries())
    updateTask(taskId, { name: formDataOjb.taskName })
    reRenderTasks()



}


function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {
    const tasksSection = document.querySelector("#tasks-section")
    const fragment = document.createDocumentFragment()
    getFilteredTasks().forEach(task => {
        const taskUI = TaskUI(task, () => handleDeleteTask(task.id), () => handleCompleteTask(task.id), (e) => handleUpdateTaskName(e, task.id))
        fragment.appendChild(taskUI)
    })
    tasksSection.appendChild(fragment)

}

function cleanTaskPanel() {
    const tasksSection = document.querySelector("#tasks-section")
    tasksSection.innerHTML = ""
}


export default function UIRenderer() {



    return
}
export { reRenderTasks, displayTasks, cleanTaskPanel, displayProjects, displayTaskLists }